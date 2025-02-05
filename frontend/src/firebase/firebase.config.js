// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyALpXtuCc1bZTTuzlzYhlfXuW8uhfx6Ejo",
    authDomain: "book-store-mern-c5cf1.firebaseapp.com",
    projectId: "book-store-mern-c5cf1",
    storageBucket: "book-store-mern-c5cf1.firebasestorage.app",
    messagingSenderId: "92317464241",
    appId: "1:92317464241:web:28888ffd196abda2c41490"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);