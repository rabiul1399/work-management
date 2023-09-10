// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDfQPm1oEdvf5bsh2JSxV5sOYDFZxrlTnM",
  authDomain: "work-management-4825b.firebaseapp.com",
  projectId: "work-management-4825b",
  storageBucket: "work-management-4825b.appspot.com",
  messagingSenderId: "629451444738",
  appId: "1:629451444738:web:cde5f85032dc38d58ecd1b",
  measurementId: "G-F40EH1831Y",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const auth = getAuth(app);

export default auth;
