import firebase from "firebase/compat/app";
import 'firebase/compat/storage';
import 'firebase/compat/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDYP656o5m7XLZqsWkQ1xR0frmWemmMVJM",
  authDomain: "firegram-d1e58.firebaseapp.com",
  projectId: "firegram-d1e58",
  storageBucket: "firegram-d1e58.appspot.com",
  messagingSenderId: "17055847102",
  appId: "1:17055847102:web:7cfbd82f4bc740758dc4ef"
};

// Initialize Fire
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();

export { projectStorage, projectFirestore };