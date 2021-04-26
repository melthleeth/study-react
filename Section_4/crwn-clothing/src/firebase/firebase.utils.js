import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyAYeqVMPx-YBUD4DzTxjw0y4LXc9JWiDDg",
    authDomain: "crwn-demo.firebaseapp.com",
    projectId: "crwn-demo",
    storageBucket: "crwn-demo.appspot.com",
    messagingSenderId: "27844278240",
    appId: "1:27844278240:web:def611df22db4516d79d85",
    measurementId: "G-G8HLHW1PV7"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt: 'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;