import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import {YOUR_API_KEY_HERE, YOUR_AUTH_DOMAIN_HERE, YOUR_PROJECT_ID_HERE, YOUR_STORAGE_BUCKET_HERE, YOUR_MESSAGING_SENDER_ID_HERE, YOUR_APP_ID_HERE} from '@env';
 
const firebaseConfig = {
  apiKey: YOUR_API_KEY_HERE,
  authDomain: YOUR_AUTH_DOMAIN_HERE,
  projectId: YOUR_PROJECT_ID_HERE,
  storageBucket: YOUR_STORAGE_BUCKET_HERE,
  messagingSenderId: YOUR_MESSAGING_SENDER_ID_HERE,
  appId: YOUR_APP_ID_HERE
};
 
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}
 
export const database = firebase.firestore();
export const auth = firebase.auth();