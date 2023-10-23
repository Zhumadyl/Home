// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDbyiMydjij_5pCAwkeL29jDpIjgwhxZRk",
  authDomain: "solid-home-f54e8.firebaseapp.com",
  projectId: "solid-home-f54e8",
  storageBucket: "solid-home-f54e8.appspot.com",
  messagingSenderId: "324117266870",
  appId: "1:324117266870:web:6aa6d8a8411b3d01d04117",
  measurementId: "G-04GH8EN0KS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);