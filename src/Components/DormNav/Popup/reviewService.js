import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "./firebase";

const collection_name = "reviews";

const q = query(collection(db, collection_name));

export async function getAllReviews(){
    try {
        const q = query(collection(db, collection_name));
        const querySnapshot = await getDocs(q);
        const reviews = [];
        querySnapshot.forEach((doc) => {
            reviews.push({ id: doc.id, ...doc.data() });
        });
        return reviews;
    } catch (error) {
        console.error("error getting reviews", error);
        return [];
    }
};


