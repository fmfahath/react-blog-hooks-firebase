import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { useEffect, useState } from "react"
import { db } from "../firebase/config";

export const useFetchCollection = (collectionName) => {

    const [documents, setDocuments] = useState(null);

    useEffect(() => {

        let collectionRef = collection(db, collectionName)

        //filter query
        let queryRef = query(collectionRef, orderBy("createdAt", "desc"))

        // const unsub = onSnapshot(collectionRef, (snapshot) => {
        const unsub = onSnapshot(queryRef, (snapshot) => {
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

