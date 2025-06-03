// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
import { getAuth} from "firebase/auth"
const firebaseConfig = {
  apiKey: "AIzaSyCTNgIfELlw4uDoFxrKncxxGvgsbRuTng8",
  authDomain: "shoppixel-authentication.firebaseapp.com",
  projectId: "shoppixel-authentication",
  storageBucket: "shoppixel-authentication.firebasestorage.app",
  messagingSenderId: "197560076384",
  appId: "1:197560076384:web:9a6954520030fbaa8d5b05"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth
