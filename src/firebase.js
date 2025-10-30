// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyA0AOrw4zp9u64tCdP3dShQWPcdBfZXF_c",
  authDomain: "al-hujjat.firebaseapp.com",
  databaseURL: "https://al-hujjat-default-rtdb.firebaseio.com",
  projectId: "al-hujjat",
  storageBucket: "al-hujjat.firebasestorage.app",
  messagingSenderId: "111985590614",
  appId: "1:111985590614:web:de397c7726c2ce53ac16f7",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const db = getFirestore(app);
export const storage = getStorage(app);
export default app;
