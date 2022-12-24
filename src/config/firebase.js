import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import 'firebase/compat/auth';
import { getFirestore } from "@firebase/firestore";
import { getAuth } from "@firebase/auth";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCBThSt84NoC3BKZX3k3WIaXc-1lscrCkU",
  authDomain: "mycityjandira.firebaseapp.com",
  databaseURL: "https://mycityjandira-default-rtdb.firebaseio.com",
  projectId: "mycityjandira",
  storageBucket: "mycityjandira.appspot.com",
  messagingSenderId: "755994611357",
  appId: "1:755994611357:web:06bf46e35977ce7e2e0e74"
};

export default !firebase.apps.length 
  ? firebase.initializeApp(firebaseConfig).firestore()
  : firebase.app().firestore();

