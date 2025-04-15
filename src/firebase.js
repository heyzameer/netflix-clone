// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { toast } from "react-toastify";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCT9RTHHoBDb-rkvU2VvCTGY1tVDLos1rg",
  authDomain: "netflix-fb1ac.firebaseapp.com",
  projectId: "netflix-fb1ac",
  storageBucket: "netflix-fb1ac.firebasestorage.app",
  messagingSenderId: "174052358562",
  appId: "1:174052358562:web:4823fe96f815f827561afb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const db = getFirestore(app)

const signup = async (name, email, password) => {
    try {
        const res = await createUserWithEmailAndPassword(auth, email, password)
        const user = res.user
        await addDoc(collection(db, "user"), {
            uid: user.uid,
            name,
            authProvider: "Local",
            email,
        })
    } catch (e) {
        console.log(e);
        toast.error(e.code.split('/')[1].split('-').join(" "));

    }
}

const signin = async (email, password) => {
    try {
        await signInWithEmailAndPassword(auth,email,password)
    } catch (e) {
        console.log(e);
        toast.error(e.code.split('/')[1].split('-').join(" "));
        
    }
}

const logOut =  ()=>{
     signOut(auth)
}

export {
    signin,
    signup,
    logOut,
    auth,
    db,
}