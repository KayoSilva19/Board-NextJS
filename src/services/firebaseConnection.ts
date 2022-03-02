import firebase from "firebase/app";
import 'firebase/firestore';

let firebaseConfig = {
    apiKey: "AIzaSyCe1h3p1tmUSjk6ymflaseWwc7Am8ygNUM",
    authDomain: "boardapp-26a0d.firebaseapp.com",
    projectId: "boardapp-26a0d",
    storageBucket: "boardapp-26a0d.appspot.com",
    messagingSenderId: "235202752061",
    appId: "1:235202752061:web:845e895efab441057d0454",
    measurementId: "G-1J1Q99RCLC"
  };
  
  // Initialize Firebase
  if(!firebase.apps.length) {
     firebase.initializeApp(firebaseConfig);

  }

  export default firebase;