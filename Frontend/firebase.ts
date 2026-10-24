// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import "./firebase.ts";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCVtcYQY_lPGpoOf1sEneZXE19fjcwJmLg",
  authDomain: "krishisahi-ace9d.firebaseapp.com",
  projectId: "krishisahi-ace9d",
  storageBucket: "krishisahi-ace9d.firebasestorage.app",
  messagingSenderId: "360938729083",
  appId: "1:360938729083:web:7480732e405a7288c7bcde",
  measurementId: "G-XB4DFGTJN5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);