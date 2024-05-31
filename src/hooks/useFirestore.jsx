import { addDoc, collection, deleteDoc, doc, serverTimestamp } from "firebase/firestore"
import { useState } from "react"
import { db } from "../firebase/config"

export const useFirestore = (collectionName) => {

    const [document, setDocument] = useState(null)
    const [error, setError] = useState(null)
    const [status, setStatus] = useState(false)

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


    //delete post
    const deleteDocument = async (id) => {
        const documentRef = doc(db, collectionName, id)

        try {
            const res = await deleteDoc(documentRef);
            setStatus(true)
        } catch (error) {
            console.log("document delete error: ", error)
            setError(error.message)
        }
    }

    return { addDocument, document, error, deleteDocument, status }

}