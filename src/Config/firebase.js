import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
   apiKey: "AIzaSyBnQQ7CDfx-EpNZ15RYlnRpuq1r8hBFISQ",
   authDomain: "chat-chat-66523.firebaseapp.com",
   projectId: "chat-chat-66523",
   storageBucket: "chat-chat-66523.appspot.com",
   messagingSenderId: "1028640408029",
   appId: "1:1028640408029:web:636083f40a3d0240ebb634",
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)

export const db = getFirestore(app)

// when already deploy
//! firebase deploy --only hosting:vaan-task-manager
