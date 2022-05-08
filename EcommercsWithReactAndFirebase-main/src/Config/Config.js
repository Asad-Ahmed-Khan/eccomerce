import * as firebase from 'firebase'

import 'firebase/storage';
import 'firebase/firestore';
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyD3K3T_5am9MWYMNsEWBiPC9uwIbVs_PAk",
    authDomain: "auth-development-9c81c.firebaseapp.com",
    projectId: "auth-development-9c81c",
    storageBucket: "auth-development-9c81c.appspot.com",
    messagingSenderId: "845222367362",
    appId: "1:845222367362:web:c42d2de94f8a660835249b"
  };
//   const app = initializeApp(firebaseConfig);
 firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();
const storage = firebase.storage();

export { auth, db, storage }