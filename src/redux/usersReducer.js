import { SELECT_USER } from "./types"

const initialState = {
users: [1,2,3,214]
}

export const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case SELECT_USER:
            return {...state, users: state.users.concat([action.payload])}
            // return {...state, users: [...state.users, action.payload]}
        default: return state
    }
    
}