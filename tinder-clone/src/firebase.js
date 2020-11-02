// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase"

const firebaseConfig = {
    apiKey: "AIzaSyBnEDyjJBg5CXJDXU4LgS_OkffIgiNLxwQ",
    authDomain: "tinder-clone-cd4aa.firebaseapp.com",
    databaseURL: "https://tinder-clone-cd4aa.firebaseio.com",
    projectId: "tinder-clone-cd4aa",
    storageBucket: "tinder-clone-cd4aa.appspot.com",
    messagingSenderId: "993893224553",
    appId: "1:993893224553:web:0669e5f612a3589c3292f8",
    measurementId: "G-Y1BF92V133"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig)
  const database = firebaseApp.firestore()

  export default database;