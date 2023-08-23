import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC4BZ4Mg3zv-C4umThWTKHLO_cF2qA_vEM",
  authDomain: "fir-2f21e.firebaseapp.com",
  projectId: "fir-2f21e",
  storageBucket: "fir-2f21e.appspot.com",
  messagingSenderId: "557516416828",
  appId: "1:557516416828:web:cd3c6b2e2d08e465616039",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
