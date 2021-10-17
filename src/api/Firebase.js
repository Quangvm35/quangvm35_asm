import { initializeApp } from "firebase/app";
import { getAuth } from "@firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyBplmx3740GbCGAZH3p8F_gYcge2l-kFr4",
  authDomain: "react-c25e2.firebaseapp.com",
  projectId: "react-c25e2",
  storageBucket: "react-c25e2.appspot.com",
  messagingSenderId: "927887656307",
  appId: "1:927887656307:web:3eb5a10185bdbfeab3f106",
  measurementId: "G-5VSSF4RFGJ"
};
initializeApp(firebaseConfig);
const auth = getAuth();
export default auth;
