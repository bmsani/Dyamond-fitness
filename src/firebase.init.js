// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBXM76mnAkqF6Ky6PkcfdxC59jGH3OuaYc",
  authDomain: "assingment-10-a59fb.firebaseapp.com",
  projectId: "assingment-10-a59fb",
  storageBucket: "assingment-10-a59fb.appspot.com",
  messagingSenderId: "76535495522",
  appId: "1:76535495522:web:226a9db44a9af012dcca3b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
