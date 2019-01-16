// Core
import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

//Instruments
import {book} from './book';


// Pages
import { Home, Person } from '../pages';

export default class App extends Component {
    render () {
        return (
            <Switch>
                <Route
                    exact
                    component = { Home }
                    path = { book.home }
                />
                <Route
                    exact
                    component = { Home }
                    path = { book.page }
                />
                <Route
                    exact
                    component = { Person }
                    path = { book.person }
                />
                <Redirect to = { book.home } />
            </Switch>
        );
    }
}
