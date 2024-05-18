// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAuth } from 'firebase/auth';
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC1vmHKNSjVkzdwgoCvjx_3ZxldsC96ZVg",
  authDomain: "movietrailer-b0951.firebaseapp.com",
  projectId: "movietrailer-b0951",
  storageBucket: "movietrailer-b0951.appspot.com",
  messagingSenderId: "943783153898",
  appId: "1:943783153898:web:a19e4913d0bb475f79c793"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
// export const auth = getAuth();
export const auth = getAuth()
export default app