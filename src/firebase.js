// src/firebase.js
import { initializeApp } from "firebase/app";
import { getDatabase, ref, set, push, onValue } from "firebase/database"; // 추가된 코드

const firebaseConfig = {
  apiKey: "AIzaSyBy6Du5vXn5sbK93Sqe__xKLaYL59lODXw",
  authDomain: "uisun-s-portfolio.firebaseapp.com",
  projectId: "uisun-s-portfolio",
  storageBucket: "uisun-s-portfolio.appspot.com",
  messagingSenderId: "750271347532",
  appId: "1:750271347532:web:c1d275b60c3696ffe02de9",
  measurementId: "G-MHC9PTGCFD"
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export { database, ref, set, push, onValue }; // Realtime Database를 위한 함수들 export
