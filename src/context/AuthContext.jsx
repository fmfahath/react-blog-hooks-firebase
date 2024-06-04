import { createContext, useReducer } from "react";

export const AuthContext = createContext()

const userReducer = (state, action) => {
    switch (action.type) {
        case "LOGIN":
            return { ...state, user: action.payload }
        case "LOGOUT":
            return { ...state, user: null }
        default:
            return state
    }
}

export const AuthContextProvider = ({ childeren }) => {

    const [state, dispatch] = useReducer(userReducer, { user: null })

    return (
        <AuthContext.Provider value={{ ...state, dispatch }}>
            {childeren}
        </AuthContext.Provider >
    )
}