import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database'


var firebaseConfig = {
    apiKey: "AIzaSyDoIS2MGEBOtaTPj6EmIA9Yd4iPgcxmZUw",
    authDomain: "olx-project-60ba3.firebaseapp.com",
    databaseURL: "https://olx-project-60ba3.firebaseio.com",
    projectId: "olx-project-60ba3",
    storageBucket: "olx-project-60ba3.appspot.com",
    messagingSenderId: "928445734109",
    appId: "1:928445734109:web:16ea68e150b2a49c330f34",
    measurementId: "G-DD9ZPZ8WMT"
  };
  
firebase.initializeApp(firebaseConfig);

export default firebase;



 
