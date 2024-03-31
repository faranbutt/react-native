// Import the functions you need from the SDKs you need
import { initializeApp, getApp } from "firebase/app";
import { initializeAuth, getReactNativePersistence } from "firebase/auth";
import { ReactNativeAsyncStorage } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCHgYsKdlvZnUa0sKP6OX6SHLnx8qC2yLM",
  authDomain: "fire-b1c74.firebaseapp.com",
  projectId: "fire-b1c74",
  storageBucket: "fire-b1c74.appspot.com",
  messagingSenderId: "1038754573286",
  appId: "1:1038754573286:web:898824b300c16357cf4427",
  measurementId: "G-QF9BN8Q7YR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
initializeAuth(app, {
    persistence: getReactNativePersistence(ReactNativeAsyncStorage)
  });
  
export { app };