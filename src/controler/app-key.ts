// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyC2mBusyO_XBJ4703rEML3gzDjqHGFWgq4",
  authDomain: "cotroler-master.firebaseapp.com",
  projectId: "cotroler-master",
  databaseURL: "https://cotroler-master-default-rtdb.firebaseio.com",
  storageBucket: "cotroler-master.appspot.com",
  messagingSenderId: "850929693705",
  appId: "1:850929693705:web:a1017aab3ad462d61834d8"
};

const app = initializeApp(firebaseConfig);

export default app
