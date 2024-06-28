import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBH1HW2V0J7SSY5Zs4QTNWgpVDebRLvz6E",
  authDomain: "rn-productsapp.firebaseapp.com",
  projectId: "rn-productsapp",
  storageBucket: "rn-productsapp.appspot.com",
  messagingSenderId: "695753568954",
  appId: "1:695753568954:web:79054e436c8f74d8b84883",
  measurementId: "G-M8G9P804JM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export { app }