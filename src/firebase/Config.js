import firebase from "firebase/compat/app";
import 'firebase/compat/storage';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAfa2dZzmUU6jtBVg4X5Au-2pZn0r1uR28",
  authDomain: "firegram-6b78e.firebaseapp.com",
  projectId: "firegram-6b78e",
  storageBucket: "firegram-6b78e.appspot.com",
  messagingSenderId: "42386814648",
  appId: "1:42386814648:web:ae423aea824eaddd62e64d"
};

firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };