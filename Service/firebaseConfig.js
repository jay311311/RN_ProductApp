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
const analytics = getAnalytics(app);
// iOS
// 695753568954-92f7vc7rjacn8h312sfgnc604u1qg1ol.apps.googleusercontent.com
//anroid
// 695753568954-7rrdht9ec43mjnn4h5g2f9tui78osp1o.apps.googleusercontent.com
// web
// 695753568954-j8lcghq278m15pn3mfib4c2bcalfcven.apps.googleusercontent.com
export { app, analytics }