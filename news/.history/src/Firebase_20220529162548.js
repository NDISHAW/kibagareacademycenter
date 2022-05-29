import firebase from "firebase/app";
import "firebase/auth";

const app = firebase.initializeApp({
apiKey="AIzaSyBRdqsPcekDWdLkbc6P_xUvB7mxqpl--Hw"
authDomain="newsauthentication-dev.firebaseapp.com"
PROJECT_ID="newsauthentication-dev"
_STORAGE_BUCKET="newsauthentication-dev.appspot.com"
messegingSender=1"002814818581"
appId:"a8169034d3f64529ba411c"
});

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
