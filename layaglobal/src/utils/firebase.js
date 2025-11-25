// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA88FzWCpS6OnXqRChspDLAHGm-VVqM42w",
  authDomain: "laya-64b4c.firebaseapp.com",
  projectId: "laya-64b4c",
  storageBucket: "laya-64b4c.firebasestorage.app",
  messagingSenderId: "274394078056",
  appId: "1:274394078056:web:105f3ebe7a7fcdf900d4dd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();