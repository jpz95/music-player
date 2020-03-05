import app from './_configs/app-config';
import firebase from './_configs/firebase-config';

const config = Object.assign({}, firebase, app);
export default config;

const appValues = app['app'];
export { appValues as appConfig };

const firebaseValues = firebase['firebase'];
export { firebaseValues as firebaseConfig };