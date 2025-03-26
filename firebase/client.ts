import { initializeApp,getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCBGRYe-xrri78bemna_rDyCzGe1bJl3wM",
  authDomain: "prepify-5b6e9.firebaseapp.com",
  projectId: "prepify-5b6e9",
  storageBucket: "prepify-5b6e9.firebasestorage.app",
  messagingSenderId: "523808603791",
  appId: "1:523808603791:web:5504cdef70d717e7957afa",
  measurementId: "G-6CRXYNQYN5",
};

const app =!getApps.length? initializeApp(firebaseConfig):getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);
