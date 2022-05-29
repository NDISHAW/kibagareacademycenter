import firebase from "firebase/app";
import "firebase/auth";

// web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBRdqsPcekDWdLkbc6P_xUvB7mxqpl--Hw",
  authDomain: "newsauthentication-dev.firebaseapp.com",
  projectId: "newsauthentication-dev",
  storageBucket: "newsauthentication-dev.appspot.com",
  messagingSenderId: "1002814818581",
  appId: "1:1002814818581:web:a8169034d3f64529ba411c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = app.auth()
export default app

// FIREBASE SET UP
//SET UP CONFIDENTIAL INF IN THE .ENV FILE

// import { initializeApp } from "firebase/app";

// const firebaseConfig = {
//   apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
//   authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
//   databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
//   projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
//   storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
//   messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
//   appId: process.env.REACT_APP_FIREBASE_APP_ID,
// };

// const app = initializeApp(firebaseConfig);
