import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apyKey: process.env.NEXT_PUBLIC_APIKEY,
  authDomain: "git-empty.firebaseapp.com",
  projectId: "git-empty",
  storageBucket: "git-empty.appspot.com",
  messagingSenderId: "313487313606",
  appId: "1:313487313606:web:7a70cf560cfc09032be5c7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
