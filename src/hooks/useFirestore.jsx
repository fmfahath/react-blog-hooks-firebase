import { addDoc, collection, serverTimestamp } from "firebase/firestore"
import { useState } from "react"
import { db } from "../firebase/config"

export const useFirestore = (collectionName) => {

    const [document, setDocument] = useState(null)
    const [error, setError] = useState(null)

    const collectionRef = collection(db, collectionName)

    //create post   
    const addDocument = async (documentObject) => {

        try {
            const doc = await addDoc(collectionRef, { ...documentObject, createdAt: serverTimestamp() })
            setDocument(doc)

        } catch (error) {
            console.log("document add error: ", error)
            setError(error.message)
        }
    }

    return { addDocument, document, error }

}