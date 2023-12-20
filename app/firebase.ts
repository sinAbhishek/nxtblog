// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth,onAuthStateChanged } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCyTXbZm8dTFRAhNmyaacLx0tK2G-08Xj8",
  authDomain: "blog-5f829.firebaseapp.com",
  projectId: "blog-5f829",
  storageBucket: "blog-5f829.appspot.com",
  messagingSenderId: "134105675881",
  appId: "1:134105675881:web:14739425f18d5df1d7caf8",
  measurementId: "G-6HW41B46C5"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth();
