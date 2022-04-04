// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDpbT8b7WCtmui1ltmNzLQGkBvNEjeHNx4",
  authDomain: "oauthestudioluna.firebaseapp.com",
  projectId: "oauthestudioluna",
  storageBucket: "oauthestudioluna.appspot.com",
  messagingSenderId: "806464962105",
  appId: "1:806464962105:web:8c15065867e9fa8cc497e8",
  measurementId: "G-Q1R5W31XK5"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
