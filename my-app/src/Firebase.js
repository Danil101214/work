import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBA_API_KEY,
  authDomain: process.env.REACT_APP_FIREBA_AUTH_DOMATIN,
  projectId: process.env.REACT_APP_FIREBA_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBA_STOREGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBA_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBA_APP_ID,
};

const app = initializeApp(firebaseConfig);