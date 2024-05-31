import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAoIYQt7TFpjif77VIoPwTxnzHLCCDVPbM",
    authDomain: "react-blog-hooks-firebase.firebaseapp.com",
    projectId: "react-blog-hooks-firebase",
    storageBucket: "react-blog-hooks-firebase.appspot.com",
    messagingSenderId: "501901311784",
    appId: "1:501901311784:web:e8b9dc1a36f94a3c3f1a1d"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app)

export { db, auth }