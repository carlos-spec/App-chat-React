import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyA9S-gMWYJGJwS5-Zz6tPVvytIdMLGIUJA",
    authDomain: "chat-live-one.firebaseapp.com",
    projectId: "chat-live-one",
    storageBucket: "chat-live-one.appspot.com",
    messagingSenderId: "77026283216",
    appId: "1:77026283216:web:a7a2e792f80aa75fa7d8d5"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const db= firebase.firestore();
  const auth= firebase.auth();
  const provider= new firebase.auth.GoogleAuthProvider();

  export {db,auth,provider}