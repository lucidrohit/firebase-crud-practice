import { initializeApp } from "firebase/app"
import {getFirestore} from "@firebase/firestore"

const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: "fir-55575.firebaseapp.com",
  databaseURL: "https://fir-55575-default-rtdb.firebaseio.com",
  projectId: "fir-55575",
  storageBucket: "fir-55575.appspot.com",
  messagingSenderId: "572870918229",
  appId: process.env.APP_ID
}


const app = initializeApp(firebaseConfig)

export const db = getFirestore(app)


