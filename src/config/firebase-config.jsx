// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth, GoogleAuthProvider} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAqSsHz12ncfjRTlX1RkgQl0pFVs_3FBvk",
  authDomain: "fir-demo-1ae1d.firebaseapp.com",
  projectId: "fir-demo-1ae1d",
  storageBucket: "fir-demo-1ae1d.appspot.com",
  messagingSenderId: "313910355123",
  appId: "1:313910355123:web:4ac43e2f9442ab0f913cc6",
  measurementId: "G-V9VW5RDJ69"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();