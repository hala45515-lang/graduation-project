// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAgDnQdIztexr5JfQyy2aDsFsFtd4UW0zk",
  authDomain: "ecommerce-website-805f9.firebaseapp.com",
  projectId: "ecommerce-website-805f9",
  storageBucket: "ecommerce-website-805f9.firebasestorage.app",
  messagingSenderId: "598914603883",
  appId: "1:598914603883:web:897c2d4fe02066bdf78a2e",
  measurementId: "G-RHXSCNQH8H"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app