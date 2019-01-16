//Core
import React, {Component} from 'react';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import { Link, withRouter } from 'react-router-dom';
import momnet from 'moment';

//Components
import {Pagination} from '../';

//Helpers
import {parseUrl} from '../../instruments';

//Actions
import { fetchPersonesAsync, searchPersonesAsync } from '../../bus/person/actions';

//MapState
const mapState = (state) => {
    return {
        persones: state.persones,
    };
};

//MapDispatch
const mapDispatch = (dispatch) => {
    return {
        actions: bindActionCreators({
            fetchPersonesAsync,
            searchPersonesAsync,
        }, dispatch),
    };
};

export default
@withRouter
@connect(mapState, mapDispatch)
class Persones extends Component {
    state = {
        search: '',
    }

    componentDidMount() {
        this._getPersonList();
    }

    componentDidUpdate(prevProps, prevSate) {
        const {match, actions} = this.props;
        const {search} = this.state;

        if (prevProps.match.url !== match.url) {
            this._getPersonList();
        }

        if (prevSate !== this.state) {
            actions.searchPersonesAsync(search);
        }
    }

    _getPersonList = () => {
        const {actions, match: {params}} = this.props;

        if (typeof window !== 'undefined') {
            window.scrollTo(0, 0);
        }

        if (params.page) {
            return actions.fetchPersonesAsync(params.page);
        }

        return actions.fetchPersonesAsync();
    }

    _seachHandle = (e) =>{
        this.setState({
            search: e.target.value,
        });
    }

    render() {
        const {persones} = this.props;

        return (
            <div className = 'container'>
                <h2>Search persone</h2>
                <div className = 'form-group'>
                    <input
                        type = ''
                        onChange = { this._seachHandle }
                        className = 'form-control'
                    />
                </div>

                <h2>List persone</h2>
                {
                    persones.map(
                        (person, index) => {
                            return (
                                <div
                                    className = 'card'
                                    key = { `post-item-${index}` }>
                                    <div className = 'card-body'>
                                        <small>{momnet(person.get('created')).format('MM.DD.YYYY')}</small>
                                        <h5 className = 'card-title'>
                                            <Link to = { `/person/${parseUrl(person.get('url'), 'people')}` }>
                                                {person.get('name')}
                                            </Link>
                                        </h5>
                                    </div>
                                </div>
                            );
                        },
                    )
                }
                <Pagination/>
            </div>
        );
    }
}

