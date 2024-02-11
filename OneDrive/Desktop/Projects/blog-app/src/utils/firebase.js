// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: "bloggie-2de6a.firebaseapp.com",
  projectId: "bloggie-2de6a",
  storageBucket: "bloggie-2de6a.appspot.com",
  messagingSenderId: "191066444263",
  appId: "1:191066444263:web:5775e6405bd69e97ea6d42"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);