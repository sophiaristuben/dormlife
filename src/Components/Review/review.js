import { addDoc, getDocs, collection } from "firebase/firestore"; 
import { getDb } from "./connect.js"

const collection_name = "reviews"

export const findAll = async () => {
    const doc_refs = await getDocs(collection(getDb(), collection_name))

    const res = []

    doc_refs.forEach(review => {
        res.push({
            id: review.id, 
            ...review.data()
        })
    })

    return res
}
export const create = args => addDoc(collection(getDb(), collection_name), args)
