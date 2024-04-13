import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCt8Z5Pvaem_zAMqh9lv21tHjjJ0GK__0I",
  authDomain: "newchat-ec261.firebaseapp.com",
  projectId: "newchat-ec261",
  storageBucket: "newchat-ec261.appspot.com",
  messagingSenderId: "267101995029",
  appId: "1:267101995029:web:846d631d6a9be36fc40e1c"
};

const app = firebase.initializeApp(firebaseConfig);

const db = app.firestore();
const auth = app.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };