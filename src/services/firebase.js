import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

/* const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_APP_ID,
}; */

const firebaseConfig = {
  apiKey: "AIzaSyAXyOGxStI3pWJtIvPc6misGTqrc8PdvCc",
  authDomain: "chat-network-b842d.firebaseapp.com",
  projectId: "chat-network-b842d",
  storageBucket: "chat-network-b842d.firebasestorage.app",
  messagingSenderId: "39286035575",
  appId: "1:39286035575:web:c5c997743f46cdd304e272"
};

const app = firebase.initializeApp(firebaseConfig);

const db = app.firestore();
const auth = app.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
