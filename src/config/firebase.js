import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCpNLGqlBC9IsKwrATyfGegB7pM1_CfrkA",
  authDomain: "aulafirebase-bfef9.firebaseapp.com",
  projectId: "aulafirebase-bfef9",
  storageBucket: "aulafirebase-bfef9.appspot.com",
  messagingSenderId: "824026759461",
  appId: "1:824026759461:web:f11ac2a434ffbfd5e21acc"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export { app, auth };
