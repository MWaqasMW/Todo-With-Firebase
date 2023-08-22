import { initializeApp } from "https://www.gstatic.com/firebasejs/10.2.0/firebase-app.js";
import { getFirestore  } from "https://www.gstatic.com/firebasejs/10.2.0/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIzaSyA1YTTTVEdnmEO3WWU36X1udkt2FJNBdEk",
    authDomain: "todo-app-8b89c.firebaseapp.com",
    databaseURL: "https://todo-app-8b89c-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "todo-app-8b89c",
    storageBucket: "todo-app-8b89c.appspot.com",
    messagingSenderId: "1098369600703",
    appId: "1:1098369600703:web:9118782df681b455334a0a",
    measurementId: "G-P1H31B9CPK"
  };

  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);

export {app,db,firebaseConfig}


