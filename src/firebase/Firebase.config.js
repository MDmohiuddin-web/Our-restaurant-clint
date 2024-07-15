

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDKs9pSwJzu4daPp-Vb4P9yijRxlpsAW9k",
  authDomain: "restaurant-8b3b0.firebaseapp.com",
  projectId: "restaurant-8b3b0",
  storageBucket: "restaurant-8b3b0.appspot.com",
  messagingSenderId: "927788074486",
  appId: "1:927788074486:web:46a0aa07687bb73f5af3d7",


//   apiKey:import.meta.env.VITE_apiKey,
//   authDomain:import.meta.env.VITE_authDomain,
//   projectId:import.meta.env.VITE_projectId,
//   storageBucket:import.meta.env.VITE_storageBucket,
//   messagingSenderId:import.meta.env.VITE_messagingSenderId,
//   appId:import.meta.env.VITE_appId,
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);