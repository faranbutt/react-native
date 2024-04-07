
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { initializeAuth,getAuth,getReactNativePersistence,ReactNativeAsyncStorage } from 'firebase/auth';
import {getFirestore} from 'firebase/firestore'
import {getStorage} from 'firebase/storage'


const firebaseConfig = {
  apiKey: "AIzaSyDLZ3AnrWHxWSmhPjgi1_I0tX4wiIT9R8s",
  authDomain: "namaztracker-69a96.firebaseapp.com",
  projectId: "namaztracker-69a96",
  storageBucket: "namaztracker-69a96.appspot.com",
  messagingSenderId: "477243212974",
  appId: "1:477243212974:web:c9e6cb4be77048b4d9d93f",
  measurementId: "G-2QEKT02F9P"
};


const app = initializeApp(firebaseConfig);
initializeAuth(app, {
    persistence: getReactNativePersistence(ReactNativeAsyncStorage)
  });

const auth = getAuth(app);
const firestoreConfig = getFirestore(app);
const storageConfig = getStorage(app);
export { auth, firestoreConfig, storageConfig };