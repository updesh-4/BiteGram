// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey:import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "vingo-food-delivery.firebaseapp.com",
  projectId: "vingo-food-delivery",
  storageBucket: "vingo-food-delivery.firebasestorage.app",
  messagingSenderId: "693314883513",
  appId: "1:693314883513:web:4840c943ecf3fb61a33068"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app)
export {app,auth}
// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey:import.meta.env.VITE_FIREBASE_APIKEY,
//   authDomain: "vingo-food-delivery-41764.firebaseapp.com",
//   projectId: "vingo-food-delivery-41764",
//   storageBucket: "vingo-food-delivery-41764.firebasestorage.app",
//   messagingSenderId: "868032757967",
//   appId: "1:868032757967:web:64669d2b2cadf3307ab7ba",
//   measurementId: "G-LWZ5YCWHKZ"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);