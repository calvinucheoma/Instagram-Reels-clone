import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";



const firebaseConfig = {
  apiKey: "AIzaSyCq72wp7qYF0VAfD33NhDeSXDzXkyC3lko",
  authDomain: "instagram-reels-clone-92e49.firebaseapp.com",
  projectId: "instagram-reels-clone-92e49",
  storageBucket: "instagram-reels-clone-92e49.appspot.com",
  messagingSenderId: "746221613917",
  appId: "1:746221613917:web:12304eedcb646e8ff86eb4"
};




const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export default db;