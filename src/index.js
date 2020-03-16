import React from 'react';
import ReactDOM from 'react-dom';

import Router from 'components/router/router';

// Load fonts into bundle
import 'fonts/noto-sans/NotoSans-Regular.eot';
import 'fonts/noto-sans/NotoSans-Regular.ttf';
import 'fonts/noto-sans/NotoSans-Regular.woff';
import 'fonts/noto-sans/NotoSans-Regular.woff2';

import 'styles/main.scss';

import * as serviceWorker from './serviceWorker';
import initPreAppModule from 'modules/pre-app';

initPreAppModule();

ReactDOM.render(<Router />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();