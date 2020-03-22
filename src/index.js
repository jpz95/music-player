import React from 'react';
import ReactDOM from 'react-dom';

import Router from 'components/router/router';

// Load fonts into bundle
// TODO move into 'font-loader' module
import 'fonts/noto-sans/noto-sans-regular.eot';
import 'fonts/noto-sans/noto-sans-regular.ttf';
import 'fonts/noto-sans/noto-sans-regular.woff';
import 'fonts/noto-sans/noto-sans-regular.woff2';
import 'fonts/noto-sans/noto-sans-italic.eot';
import 'fonts/noto-sans/noto-sans-italic.ttf';
import 'fonts/noto-sans/noto-sans-italic.woff';
import 'fonts/noto-sans/noto-sans-italic.woff2';
import 'fonts/noto-sans/noto-sans-bold.eot';
import 'fonts/noto-sans/noto-sans-bold.ttf';
import 'fonts/noto-sans/noto-sans-bold.woff';
import 'fonts/noto-sans/noto-sans-bold.woff2';
import 'fonts/noto-sans/noto-sans-bold-italic.eot';
import 'fonts/noto-sans/noto-sans-bold-italic.ttf';
import 'fonts/noto-sans/noto-sans-bold-italic.woff';
import 'fonts/noto-sans/noto-sans-bold-italic.woff2';

import * as serviceWorker from './serviceWorker';
import initPreAppModule from 'modules/pre-app';

initPreAppModule();

ReactDOM.render(<Router />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();