// src/firebase.js
import { initializeApp } from 'firebase/app';
import { getFirestore, serverTimestamp } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDM7hCMssJoycQLBVFc8ir5AxPXlCVon40",
  authDomain: "capacita-95976.firebaseapp.com",
  projectId: "capacita-95976",
  storageBucket: "capacita-95976.firebasestorage.app",
  messagingSenderId: "90297999516",
  appId: "1:90297999516:web:f4b4d0dd1f6e2818d68d59"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db, serverTimestamp };