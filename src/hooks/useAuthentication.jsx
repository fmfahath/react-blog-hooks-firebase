import { createUserWithEmailAndPassword } from "firebase/auth"
import { useState } from "react"
import { auth, db } from "../firebase/config"
import { doc, serverTimestamp, setDoc } from "firebase/firestore"

export const useAuthentication = () => {
    const [error, setError] = useState(null)
    const [status, setStatus] = useState(false)

    const signup = ({ fname, lname, email, password }) => {
        setError(null)
        setStatus(false)

        createUserWithEmailAndPassword(auth, email, password)
            .then((credentials) => {
                const user = credentials.user
                setStatus(true)

                // create new collection "users" using user ID
                const docRef = doc(db, "users", user.uid)
                setDoc(docRef, { fname, lname, createdAt: serverTimestamp() })
            })
            .catch((error) => {
                console.log(error.message)
                setError(error.message)
            })
    }

    return { signup, error, status }
}