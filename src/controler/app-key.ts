// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDDbJ8P_UhML0cISJB4Mhb4hVhbjDiBNT8",
  authDomain: "app-masters-a50f0.firebaseapp.com",
  databaseURL: "https://app-masters-a50f0-default-rtdb.firebaseio.com",
  projectId: "app-masters-a50f0",
  storageBucket: "app-masters-a50f0.appspot.com",
  messagingSenderId: "717121555092",
  appId: "1:717121555092:web:7b04ac94e51cb2b5aa8281",
  measurementId: "G-LFYH3EHL6S"
};

// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);

export default app
