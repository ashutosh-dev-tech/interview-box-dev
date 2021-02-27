import firebase from "firebase";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA5uZJwdVNThdlImJEnGwAAQaOuuxoM0Go",
  authDomain: "interview--box.firebaseapp.com",
  projectId: "interview--box",
  storageBucket: "interview--box.appspot.com",
  messagingSenderId: "691462759527",
  appId: "1:691462759527:web:24e09f5e047c14dfbd20c2",
  measurementId: "G-WKEWDJ1C88"
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export { db };