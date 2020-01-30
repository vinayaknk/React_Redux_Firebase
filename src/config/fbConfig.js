import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyBGjzDuiA31eRgN3CT0CB-Q50N-ICIv1iw",
  authDomain: "vk-ninja-8a45e.firebaseapp.com",
  databaseURL: "https://vk-ninja-8a45e.firebaseio.com",
  projectId: "vk-ninja-8a45e",
  storageBucket: "vk-ninja-8a45e.appspot.com",
  messagingSenderId: "1039485252333",
  appId: "1:1039485252333:web:5dd63df665aba3b00f52e4",
  measurementId: "G-FVY2JDYMYX"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// firebase.analytics();
// firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;
