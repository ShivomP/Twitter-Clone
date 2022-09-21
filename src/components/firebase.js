import firebase from "firebase/compat/app"
import 'firebase/compat/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyDPZcMYKs1eu_hWhyVeRI-ZS-hRCnF5vJA",
    authDomain: "twitter-clone-788b2.firebaseapp.com",
    projectId: "twitter-clone-788b2",
    storageBucket: "twitter-clone-788b2.appspot.com",
    messagingSenderId: "429448863038",
    appId: "1:429448863038:web:dcc79df0cb1ca84b76606f"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore()

  export default db