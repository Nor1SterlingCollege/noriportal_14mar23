// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBflUiZZV4c4UvDC-3tO3H7PO5fJxAJ1jA",
  authDomain: "norifirebase6mar2023.firebaseapp.com",
  projectId: "norifirebase6mar2023",
  storageBucket: "norifirebase6mar2023.appspot.com",
  messagingSenderId: "565520271711",
  appId: "1:565520271711:web:a77b3a504ef4091c08ceea",
  measurementId: "G-6H7LPK87R9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// 
export const db = getFirestore();