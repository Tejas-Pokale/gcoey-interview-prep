// Import the functions you need from the SDKs you need
import { initializeApp , getApp , getApps} from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAggoaRuqXB7ebppvonas7by-XObb6D33E",
  authDomain: "gcoey-interview-prep.firebaseapp.com",
  projectId: "gcoey-interview-prep",
  storageBucket: "gcoey-interview-prep.firebasestorage.app",
  messagingSenderId: "561233476010",
  appId: "1:561233476010:web:0f1d852dc681bf26a453d3"
};

// Initialize Firebase
const app = !getApps.length ?  initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);    