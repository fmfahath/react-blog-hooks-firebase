import { createUserWithEmailAndPassword } from "firebase/auth"
import { useState } from "react"
import { auth } from "../firebase/config"

export const useSignup = () => {
    const [error, setError] = useState(null)
    const [status, setStatus] = useState(false)

    const signup = ({ fname, lname, email, password }) => {
        setError(null)
        setStatus(false)

        createUserWithEmailAndPassword(auth, email, password)
            .then((credentials) => {
                const user = credentials.user
                setStatus(true)
            })
            .catch((error) => {
                console.log(error.message)
                setError(error.message)
            })
    }

    return { signup, error, status }
}