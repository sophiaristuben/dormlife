import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"; 


let db = false;

export const getDb = () => {
    if(!db){
        const firebaseConfig = {
            apiKey: "AIzaSyBpcx3FYONhEGRWfzOD6GqgWJ_CsLr4MEI",
            authDomain: "housingreviews-37094.firebaseapp.com",
            projectId: "housingreviews-37094",
            storageBucket: "housingreviews-37094.appspot.com",
            messagingSenderId: "636644892318",
            appId: "1:636644892318:web:9965261bfc4efe1db1a58f"
        }

        const app = initializeApp(firebaseConfig)

        db = getFirestore(app)
    }

    return db
}