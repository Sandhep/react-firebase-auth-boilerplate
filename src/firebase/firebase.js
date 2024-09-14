import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDJQykdNAjDDHMPxB6avAu9TxScDQU05Rc",
  authDomain: "auth-4b431.firebaseapp.com",
  projectId: "auth-4b431",
  storageBucket: "auth-4b431.appspot.com",
  messagingSenderId: "221850787508",
  appId: "1:221850787508:web:35ef7507cde55e0036c1e1",
  measurementId: "G-MFZW0K8PWT"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app)



export { app, auth };
