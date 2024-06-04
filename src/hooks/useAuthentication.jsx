import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth"
import { useState } from "react"
import { auth, db } from "../firebase/config"
import { doc, serverTimestamp, setDoc } from "firebase/firestore"
import { useAuthContext } from "./useAuthContext"

export const useAuthentication = () => {
    const [error, setError] = useState(null)
    const [status, setStatus] = useState(false)


    const { dispatch } = useAuthContext();

    //signup--------------------------
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

    //signin-----------------------------
    const sigin = ({ email, password }) => {
        setError(null)
        setStatus(false)

        signInWithEmailAndPassword(auth, email, password)
            .then((credentials) => {
                const user = credentials.user
                console.log(user.uid)
                setStatus(true)
                dispatch({ type: 'LOGIN', payload: user })


            })
            .catch((error) => {
                console.log(error.message)
                setError(error.message)
            })
    }

    // logout------------------------------
    const logout = () => {
        signOut(auth)
            .then((response) => {
                console.log("Successfully logout")
                dispatch({ type: 'LOGOUT' })

            })
            .catch((error) => {
                console.log(error.message)
            })
    }

    return { signup, sigin, logout, error, status }
}