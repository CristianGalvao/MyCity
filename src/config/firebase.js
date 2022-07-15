import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import AsyncStorage from '@react-native-async-storage/async-storage';



// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAgTzdVk7nddRWyqF8EU1-Ze4ZCIuu0iic",
    authDomain: "autenticationusers.firebaseapp.com",
    projectId: "autenticationusers",
    storageBucket: "autenticationusers.appspot.com",
    messagingSenderId: "335648575725",
    appId: "1:335648575725:web:9507a6fc0f97bc7ce1fce4"
  };

  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;