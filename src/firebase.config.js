// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBBm0lPjOSxdRMDa6zaUYd_Xl39hqiPS5A",
  authDomain: "feedback-website-bae2b.firebaseapp.com",
  projectId: "feedback-website-bae2b",
  storageBucket: "feedback-website-bae2b.appspot.com",
  messagingSenderId: "705630808959",
  appId: "1:705630808959:web:aa855f713513ed3f3e484a",
  measurementId: "G-PLNCTJGBNH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export {auth};
export {db};