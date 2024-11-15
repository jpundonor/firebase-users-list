// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import "firebase/firestore";
// import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDaQ53jLFsEINA4Bm0cxH4lClABcD6z3rQ",
  authDomain: "crud-usuarios-ec763.firebaseapp.com",
  projectId: "crud-usuarios-ec763",
  storageBucket: "crud-usuarios-ec763.firebasestorage.app",
  messagingSenderId: "927606262783",
  appId: "1:927606262783:web:bade7f575bb69cb8aeb5ca"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const db = firebaseApp.firestore();
// const db = getFirestore(firebaseApp);

// export { db };

export default app;