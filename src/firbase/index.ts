// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAjomjayTwa9XfIVjSGksdzMZ-ZD5xD2Bw",
  authDomain: "shopping-cart-475a8.firebaseapp.com",
  projectId: "shopping-cart-475a8",
  storageBucket: "shopping-cart-475a8.appspot.com",
  messagingSenderId: "551949910279",
  appId: "1:551949910279:web:bd57600e82c6701916c5a2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)
const db = getFirestore(app)
const storage = getStorage(app)
// const functions = getFunctions(app)


export { auth, db, storage }