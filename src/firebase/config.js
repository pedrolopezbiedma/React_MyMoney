import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBD_7UaDl6_tZgEVIoy0kLZSVkCvTZ3IbY",
  authDomain: "react-my-money-59a73.firebaseapp.com",
  projectId: "react-my-money-59a73",
  storageBucket: "react-my-money-59a73.appspot.com",
  messagingSenderId: "221448545677",
  appId: "1:221448545677:web:52bdb967bb6211aa13c9c4",
};

// init firebase
firebase.initializeApp(firebaseConfig);

// init services
const projectAuthentication = firebase.auth();
const projectFirestore = firebase.firestore();

// exports
export { projectAuthentication, projectFirestore };
