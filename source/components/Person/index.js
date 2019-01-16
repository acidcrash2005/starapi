import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter, Link} from 'react-router-dom';
import {bindActionCreators} from 'redux';


//Actions
import { fetchPersonAsync, clearPerson } from '../../bus/person/actions';

//Components
import {Films, Species, Vehicles, Starships} from '../';

//MapState
const mapState = (state)=> {
    return {
        person:     state.person,
        isFetching: state.ui.get('isFetching'),
    };
};

//MapDispatch
const mapDispatch = (dispatch) => {
    return {
        actions: bindActionCreators({
            fetchPersonAsync,
            clearPerson,
        }, dispatch),
    };
};


export default
@withRouter
@connect(mapState, mapDispatch)
class Person extends Component {
    componentDidMount() {
        const {actions, match: {params}} = this.props;

        actions.fetchPersonAsync(params.id);
    }

    componentWillUnmount() {
        const {actions} = this.props;

        actions.clearPerson();
    }

    render () {
        const {person, isFetching} = this.props;

        return !isFetching ? (
            <div className = 'container'>
                <h1>{person.get('name')}</h1>
                <div className = 'row'>
                    <div className = 'col-6'>
                        <dl className = 'row'>
                            <dt className = 'col-sm-3'>height</dt>
                            <dd className = 'col-sm-9'>{person.get('height')}</dd>

                            <dt className = 'col-sm-3'>mass</dt>
                            <dd className = 'col-sm-9'>{person.get('mass')}</dd>

                            <dt className = 'col-sm-3'>Hair Color</dt>
                            <dd className = 'col-sm-9'>{person.get('hair_color')}</dd>

                            <dt className = 'col-sm-3'>Skin Color</dt>
                            <dd className = 'col-sm-9'>{person.get('skin_color')}</dd>

                            <dt className = 'col-sm-3'>Eye Color</dt>
                            <dd className = 'col-sm-9'>{person.get('eye_color')}</dd>

                            <dt className = 'col-sm-3'>Birth Year</dt>
                            <dd className = 'col-sm-9'>{person.get('birth_year')}</dd>

                            <dt className = 'col-sm-3'>Gender</dt>
                            <dd className = 'col-sm-9'>{person.get('gender')}</dd>
                        </dl>
                    </div>
                    <div className = 'col-6'>
                        {
                            person.get('species')
                            && person.get('species').size
                            && <Species list = { person.get('species') } />
                        }
                    </div>
                </div>


                {
                    person.get('films')
                    && person.get('films').size
                    && <Films list = { person.get('films') } />
                }

                {
                    person.get('starships')
                    && person.get('starships').size
                    && <Starships list = { person.get('starships') } />
                }

                <Link to = '/'>Home</Link>
            </div>
        ) : null;
    }
}
