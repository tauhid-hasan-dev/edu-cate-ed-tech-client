// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAPR3c9oeCuqM2pzYHrVu-IT4fi44HzRBo",
    authDomain: "learning-platform-client-d552c.firebaseapp.com",
    projectId: "learning-platform-client-d552c",
    storageBucket: "learning-platform-client-d552c.appspot.com",
    messagingSenderId: "331271002804",
    appId: "1:331271002804:web:7e53b463683c45435655e1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;