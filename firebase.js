// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCPXYDtglJiqi2QkHdsjJZsjzFDsf_C9og",
  authDomain: "smartrecycling-9adc3.firebaseapp.com",
  projectId: "smartrecycling-9adc3",
  storageBucket: "smartrecycling-9adc3.appspot.com",
  messagingSenderId: "390834435866",
  appId: "1:390834435866:web:bc9d8e4a090da979371ea3",
  measurementId: "G-2TE4QJ97WD",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
