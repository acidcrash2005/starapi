//Core
import React, {Component} from 'react';
import {Link} from 'react-router-dom';

export default class Pagination extends Component {
    render() {
        return (
            <nav aria-label = 'Page navigation example'>
                <ul className = 'pagination'>
                    <li className = 'page-item'>
                        <Link
                            className = 'page-link'
                            to = '/page/1'>1
                        </Link>
                    </li>
                    <li className = 'page-item'>
                        <Link
                            className = 'page-link'
                            to = '/page/2'>2
                        </Link>
                    </li>
                    <li className = 'page-item'>
                        <Link
                            className = 'page-link'
                            to = '/page/3'>3
                        </Link>
                    </li>
                </ul>
            </nav>
        );
    }
}
