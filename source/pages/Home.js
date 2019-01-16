// Core
import React, { Component } from 'react';

// Components
import {  Nav, Spinner, Catcher, Persones } from '../components';

export default class Home extends Component {
    render () {
        return (
            <Catcher>
                <Spinner />
                <Nav />
                <Persones />
            </Catcher>
        );
    }
}
