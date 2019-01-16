// Core
import {ROOT_URL} from '../API';

export function parseUrl (url, page) {
    return parseInt(url.split(`${ROOT_URL}/${page}/`)[ 1 ]);
}

