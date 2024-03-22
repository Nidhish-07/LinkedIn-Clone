// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth,GoogleAuthProvider} from "firebase/auth"
import {getFirestore} from "firebase/firestore"
const firebaseConfig = {
  apiKey: "AIzaSyDc1TcajB_g6Vc0ty78xkQgQiZAo_Na6Dg",
  authDomain: "linkedin-clone-2cd79.firebaseapp.com",
  projectId: "linkedin-clone-2cd79",
  storageBucket: "linkedin-clone-2cd79.appspot.com",
  messagingSenderId: "120032875051",
  appId: "1:120032875051:web:95160ba3debacb4226106e",
  measurementId: "G-FQ5N7BKVCH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth=getAuth(app)
export const googleAuthProvider=new GoogleAuthProvider(app)
export const database=getFirestore(app)