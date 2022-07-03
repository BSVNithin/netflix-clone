import { initializeApp, getApp, getApps } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAmasXg--vlRKV2hLGHLwIekg79Efg5bc0",
  authDomain: "netflix-clone-da5c3.firebaseapp.com",
  projectId: "netflix-clone-da5c3",
  storageBucket: "netflix-clone-da5c3.appspot.com",
  messagingSenderId: "1059428236194",
  appId: "1:1059428236194:web:6db2f21973243d734990fb",
  measurementId: "G-LQXY9SVTHB"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore()
const auth = getAuth()

export default app
export { auth, db }