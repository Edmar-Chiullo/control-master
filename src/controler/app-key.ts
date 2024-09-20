// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyC2mBusyO_XBJ4703rEML3gzDjqHGFWgq4",
  authDomain: "cotroler-master.firebaseapp.com",
  projectId: "cotroler-master",
  databaseURL: "https://cotroler-master-default-rtdb.firebaseio.com",
  //databaseURL: "http://127.0.0.1:9000/?ns=cotroler-master-default-rtdb",
  storageBucket: "cotroler-master.appspot.com",
  messagingSenderId: "850929693705",
  appId: "1:850929693705:web:a1017aab3ad462d61834d8"
};
// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);

export default app
