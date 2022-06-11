import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {
  getFirestore,
  collection,
  getDocs,
  addDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";
import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
    apiKey: "AIzaSyBzgiMBq2cDZtpHtqYNV1c8ycjxKl-eRuo",
    authDomain: "design---interior.firebaseapp.com",
    projectId: "design---interior",
    storageBucket: "design---interior.appspot.com",
    messagingSenderId: "961421628060",
    appId: "1:961421628060:web:59e4ea8f4988475d585359",
    measurementId: "G-TCD8024XDC"
};

// init firebase app
const app = initializeApp(firebaseConfig);

// init services
const db = getFirestore();
const auth = getAuth();
// collection ref
const colRef = collection(db, "services");
const colStaff = collection(db, "staff")
const colPortfolio = collection(db, "portfolio")
const colProject = collection(db, "project")

// storage
const storage = getStorage(app);

// get collection data
// getDocs(colRef).then((snapshot) => console.log(snapshot.docs));
export { db, getDocs, colRef, colStaff, colPortfolio, colProject, addDoc, deleteDoc, doc, storage };
