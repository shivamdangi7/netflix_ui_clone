// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { FIREBASE } from "./constants";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  // apiKey: {FIREBASE},
  apiKey: "AIzaSyBWvXHrjcfiMaZiFpRyT3Eh71utWE3yCZk",
  authDomain: "netflix-ui-clone-66402.firebaseapp.com",
  projectId: "netflix-ui-clone-66402",
  storageBucket: "netflix-ui-clone-66402.firebasestorage.app",
  messagingSenderId: "476944484475",
  appId: "1:476944484475:web:7d8bea8ff379f15c003ade",
  measurementId: "G-EW9ME5ZH5H"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();