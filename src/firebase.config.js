import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDQyic_vXtdwUaiTp561HZSaoNPEM3EGME",
  authDomain: "maltimart-83bed.firebaseapp.com",
  projectId: "maltimart-83bed",
  storageBucket: "maltimart-83bed.appspot.com",
  messagingSenderId: "212784556367",
  appId: "1:212784556367:web:a610f8549d6d5ee691bd3a",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

export default app;
