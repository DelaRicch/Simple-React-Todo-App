// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

const firebase = require("firebase");
require("firebase/firestore");


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAf8G0AvC6YZXeY6ZvecKFVaT6SKEBbtdE",
  authDomain: "react-todo-app-with-tailwind.firebaseapp.com",
  projectId: "react-todo-app-with-tailwind",
  storageBucket: "react-todo-app-with-tailwind.appspot.com",
  messagingSenderId: "924272422696",
  appId: "1:924272422696:web:fabf9775f189e14c9eaa1d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = firebase(app);
