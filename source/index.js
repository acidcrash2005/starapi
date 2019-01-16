// Core
import React from 'react';
import { render } from 'react-dom';
import { ConnectedRouter as Router } from 'connected-react-router';
import { Provider } from 'react-redux';

//History
import { history } from './init/middleware/core';

//Store
import { store } from './init/store';

// Instruments
import './theme/init.scss';

// Intro
import App from './navigation/App';

render(
    <Provider store = { store }>
        <Router history = { history }>
            <App />
        </Router>
    </Provider>,
    document.getElementById('app'),
);

