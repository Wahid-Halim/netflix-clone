// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  // don't use it bro i was lazy putting it in .env file just don't touch it
  apiKey: "AIzaSyB3nadtjq81ewd2EbrF0rPGNkk5D5gV4Tc",
  authDomain: "netflix-clone-7606e.firebaseapp.com",
  projectId: "netflix-clone-7606e",
  storageBucket: "netflix-clone-7606e.firebasestorage.app",
  messagingSenderId: "191476694809",
  appId: "1:191476694809:web:3d4833c804f564b8580f88",
  measurementId: "G-K2FP91ER8L",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
