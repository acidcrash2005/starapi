// Core
import React, { Component } from 'react';

// Components
import {  Nav, Spinner, Catcher, Person } from '../components';

export default class PersonPage extends Component {
    render () {
        return (
            <Catcher>
                <Spinner />
                <Nav />
                <Person />
            </Catcher>
        );
    }
}
