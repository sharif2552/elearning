// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDlDMsjL1vv4bSRQx55tGJ5wDcNW-Pmkew",
  authDomain: "elearning-ad086.firebaseapp.com",
  projectId: "elearning-ad086",
  storageBucket: "elearning-ad086.appspot.com",
  messagingSenderId: "589498136867",
  appId: "1:589498136867:web:760bccb1ad92f16bd1b496",
  measurementId: "G-0ZKMWCVWQX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);