import { collection, onSnapshot } from "firebase/firestore";
import { useEffect, useState } from "react"
import { db } from "../firebase/config";

export const useFetchCollection = (collectionName) => {

    const [documents, setDocuments] = useState(null);

    useEffect(() => {
        let collectionRef = collection(db, collectionName)
        const unsub = onSnapshot(collectionRef, (snapshot) => {
            let result = []

            snapshot.docs.forEach((doc) => {
                result.push({ ...doc.data(), id: doc.id })
            })

            setDocuments(result)
        })

        return () => unsub()

    }, [collectionName])

    // console.log("useFetch data: ", documents)
    return { documents };
}

