import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "reventsbyrezha.firebaseapp.com",
  projectId: "reventsbyrezha",
  storageBucket: "reventsbyrezha.appspot.com",
  messagingSenderId: "153818992359",
  appId: "1:153818992359:web:ffa9bb2c4e27e2bbb01c42",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
