// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAdMcNdq7UvwOQcOJIt6bO_KGJeyfXESes",
  authDomain: "foody-a4e35.firebaseapp.com",
  projectId: "foody-a4e35",
  storageBucket: "foody-a4e35.appspot.com",
  messagingSenderId: "657291886207",
  appId: "1:657291886207:web:58ca29225eae80f414c94a",
  measurementId: "G-1PZX5Q9BSB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);