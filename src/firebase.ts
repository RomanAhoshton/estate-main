import { initializeApp } from 'firebase/app';

const FIREBASE_API_KEY = "AIzaSyCGfq7ylrjwWJlb_FmjjMLP6kuWNN5Ndi8";
const FIREBASE_AUTH_DOMAIN = "estate-c678c.firebaseapp.com";
const FIREBASE_PROJECT_ID = "xxestate-c678cxx";
const FIREBASE_STORAGE_BUCKET = "estate-c678c.appspot.com";
const FIREBASE_MESSAGING_SENDER_ID = "114466400425";
const FIREBASE_APP_ID = "1:114466400425:web:e7391ebc037234939561b8";
const FIREBASE_MEASUREMENT_ID = "G-9F9CFLHPXK";


export const firebaseConfig = {
  apiKey: FIREBASE_API_KEY,
  authDomain: FIREBASE_AUTH_DOMAIN,
  projectId: FIREBASE_PROJECT_ID,
  storageBucket: FIREBASE_STORAGE_BUCKET,
  messagingSenderId: FIREBASE_MESSAGING_SENDER_ID,
  appId: FIREBASE_APP_ID,
  measurementId:FIREBASE_MEASUREMENT_ID,
};
const firebaseApp = initializeApp(firebaseConfig);
