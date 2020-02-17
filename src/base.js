import firebase from 'firebase';
import 'firebase/firestore';

import { firebaseConfig } from '@/constants/config';

const firebaseApp = firebase.initializeApp(firebaseConfig);
const firestore = firebaseApp.firestore(firebaseApp);

export { firestore };
export default firebaseApp;