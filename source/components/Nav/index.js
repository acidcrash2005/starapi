import React, { Component } from 'react';

//Components
import {Link} from 'react-router-dom';
import { book } from '../../navigation/book';

export default class Nav extends Component {
    render () {
        return (
            <nav className = 'navbar navbar-expand-lg navbar-light bg-light mb-4'>
                <div className = 'container'>

                    <Link
                        className = 'navbar-brand'
                        to = '/'>
                        Gena Karachentsev Test
                    </Link>

                    <div
                        className = 'collapse navbar-collapse'
                        id = 'navbarSupportedContent'>
                        <ul className = 'navbar-nav ml-auto'>
                            <li className = 'nav-item'>
                                <Link
                                    className = 'nav-link'
                                    to = { book.home }>
                                    Home
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

        );
    }
}
