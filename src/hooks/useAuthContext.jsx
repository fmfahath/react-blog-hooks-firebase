import { useContext } from "react"

export const useAuthContext = () => {
    const authContext = useContext(AuthContext);

    if (!authContext) {
        throw new Error('AuthContext is undefined');
    }

    return authContext;
}