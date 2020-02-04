import React from 'react';
import ReactDOM from 'react-dom';
import './styles/main.scss';
import App from './app';
import * as serviceWorker from './serviceWorker';
import { firebaseConfig } from '@/constants/config';

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

const firebase = require("firebase/app");
require('firebase/firestore');

firebase.initializeApp(firebaseConfig);

/* var db = firebase.firestore();
db.collection('music').get().then(
    (querySnapshot) => {
        const results = querySnapshot.docs.map(item => item.data());
        return results;
    }
); */