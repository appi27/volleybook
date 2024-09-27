import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDoac2g3-bAtk0lOG4PmdqhfBmPLg5nkFg",
  authDomain: "volleybook-5eba2.firebaseapp.com",
  projectId: "volleybook-5eba2",
  storageBucket: "volleybook-5eba2.appspot.com",
  messagingSenderId: "765645316245",
  appId: "1:765645316245:web:c2a792d99cde3525a6bb9c",
  measurementId: "G-HY93DN99R4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Inizializza l'autenticazione
const auth = getAuth(app);

export { auth };