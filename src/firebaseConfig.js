// src/firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyA9horvHnbRDz4DyuLgCHefKqhILPcYWHI",
    authDomain: "multiflix-f0379.firebaseapp.com",
    projectId: "multiflix-f0379",
    storageBucket: "multiflix-f0379.appspot.com",
    messagingSenderId: "604764098420",
    appId: "1:604764098420:web:0e4dc215dca3b2d962e621",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export const signInWithGoogle = async () => {
try {
    const result = await signInWithPopup(auth, provider);
    const user = result.user;
    return user;
} catch (error) {
    console.error("Error logging in with Google:", error);
}
};
