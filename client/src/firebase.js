// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-398dd.firebaseapp.com",
  projectId: "mern-estate-398dd",
  storageBucket: "mern-estate-398dd.appspot.com",
  messagingSenderId: "346610293034",
  appId: "1:346610293034:web:e190275f693c93b6262653"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);