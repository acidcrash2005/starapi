// Core
import React from 'react';
import { ConnectedRouter as Router } from 'connected-react-router';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';

//History
import { history } from '../../../init/middleware/core';
import { store } from '../../../init/store';

// Test component
import Nav from '../../Nav';


const result = mount(<Provider store = { store }><Router history = { history }><Nav /></Router></Provider>);


export { result };
