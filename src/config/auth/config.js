// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyAeiPqZ0azPfU8yNo2hAThhio0ULoBecds",
  authDomain: "fir-authentication-5eaf9.firebaseapp.com",
  projectId: "fir-authentication-5eaf9",
  storageBucket: "fir-authentication-5eaf9.firebasestorage.app",
  messagingSenderId: "223102188461",
  appId: "1:223102188461:web:f512e4e185b8e0d9427f24"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { app , auth };