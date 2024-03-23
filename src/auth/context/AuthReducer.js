import { types } from "../types/types";

const initialState = {
    logged: true,
    name: 'Alexander'
}

export const AuthReducer = (state = {}, action) => {
    switch(action.type){
        case types.login:
            return{
                ...state, 
                logged:true,
                user: action.payload,     
            }
            case types.logout:
                return {
                    logged: false,
                    name: null
                };  
        default:
            return state;
    }

}