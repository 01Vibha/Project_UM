  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-analytics.js";
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-firestore.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyB8jE9Q47gkgrYDaKSbSzSq6vU38THmZkE",
    authDomain: "bridge-232be.firebaseapp.com",
    projectId: "bridge-232be",
    storageBucket: "bridge-232be.firebasestorage.app",
    messagingSenderId: "5176725591",
    appId: "1:5176725591:web:5af9e728e0c224ad995312",
    measurementId: "G-SJMR36X4C0"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const db = getFirestore(app);