import firebase from './_configs/firebase';

const firebaseValues = firebase['firebase'];
export { firebaseValues as firebaseConfig };

const config = Object.assign({}, firebase);
export default config;