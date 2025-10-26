
import { initializeApp , getApps , getApp , App , cert } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";



const servicekey = require("./service.json");



let app : App

app = getApps().length === 0 ? initializeApp({credential : cert(servicekey)}) : getApp();


const adminDb = getFirestore(app);


export { app as adminApp , adminDb};