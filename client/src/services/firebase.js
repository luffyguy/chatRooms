import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAP3rtMB2kj9tqItw08lK-e_ihriTq3vdY",
  authDomain: "posist-harshtanwar.firebaseapp.com",
  projectId: "posist-harshtanwar",
  storageBucket: "posist-harshtanwar.appspot.com",
  messagingSenderId: "279879694262",
  appId: "1:279879694262:web:582219db85761d66e3f317",
};

// Initialize Firebase
const firebase = initializeApp(firebaseConfig);
export default firebase