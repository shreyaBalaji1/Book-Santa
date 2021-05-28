import firebase from "firebase";
require("@firebase/firestore");

 // Your web app's Firebase configuration
 var firebaseConfig = {
  apiKey: "AIzaSyBlSlHUDNofnmcuBEguEPjETt7VKLG-ZCI",
  authDomain: "booksanta-93237.firebaseapp.com",
  projectId: "booksanta-93237",
  storageBucket: "booksanta-93237.appspot.com",
  messagingSenderId: "522882045633",
  appId: "1:522882045633:web:f168ebf85113b0f973e640"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
