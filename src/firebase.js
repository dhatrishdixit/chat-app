// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getStorage, ref } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC9hr4Nv04ro7SXGp9i_mUotDH8UYu-Iw8",
  authDomain: "chatnow-7dc3b.firebaseapp.com",
  projectId: "chatnow-7dc3b",
  storageBucket: "chatnow-7dc3b.appspot.com",
  messagingSenderId: "109817036844",
  appId: "1:109817036844:web:497118348f27fee9691189"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth =getAuth();
export const storage = getStorage();