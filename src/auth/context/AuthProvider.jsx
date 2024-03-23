import { useReducer } from "react"
import { AuthContext } from "./AuthContext"
import { AuthReducer } from "./AuthReducer"
import { types } from "../types/types";

const init = () => {
    const user = JSON.parse( localStorage.getItem( 'user' ) );

    return {
        logged: !!user,
        user,
    }
}

export const AuthProvider = ({ children }) => {
    const [authState, dispatch] = useReducer( AuthReducer, {}, init );

    const login = ( name ='' ) => {

        const user = { id: '123456', name: name, }
        const action = { type: types.login, payload: user, }

        localStorage.setItem( 'user', JSON.stringify( user ));

        dispatch(action);
    }

    const logout = ()  => {
        const action = { type: types.logout };
        localStorage.removeItem('user');
        dispatch(action)
        }

    return (
        <AuthContext.Provider value={{ 
            ...authState,
            login: login,
            logout: logout
         }}>
            {children}
        </AuthContext.Provider>
    )
}
