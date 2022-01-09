import firebase from "firebase/compat/app";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDWlrLiate-tddbjZr1SwpeIZClRcdRxaQ",
  authDomain: "todolist-dev-cd85b.firebaseapp.com",
  projectId: "todolist-dev-cd85b",
  storageBucket: "todolist-dev-cd85b.appspot.com",
  messagingSenderId: "37322280126",
  appId: "1:37322280126:web:288b433a53434a4cace2ef",
  measurementId: "G-SG5JDGGVNP"
};

const app = firebase.initializeApp(firebaseConfig);

const auth = app.auth();
export default auth;
