// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBwH7r8fCDkwSdE1igqKnPF5U4nrbObES8",
  authDomain: "text-index-counter.firebaseapp.com",
  projectId: "text-index-counter",
  storageBucket: "text-index-counter.appspot.com",
  messagingSenderId: "925147387245",
  appId: "1:925147387245:web:8e5e2ef7b3551cc53bf664",
  measurementId: "G-MXEB8WXGQP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
