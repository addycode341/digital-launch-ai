import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";

import { getFirestore } from "firebase/firestore";

import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyA0xHZo-r6dqsFkAq7jzq6CExrEtMdynH4",
  authDomain: "digitallaunch-ai.firebaseapp.com",
  projectId: "digitallaunch-ai",
  storageBucket: "digitallaunch-ai.firebasestorage.app",
  messagingSenderId: "49257465424",
  appId: "1:49257465424:web:fa008131a7bc66740bf355"
};

const app = initializeApp(firebaseConfig);

// Firebase Services
export const auth = getAuth(app);

export const db = getFirestore(app);

export const storage = getStorage(app);

export default app;