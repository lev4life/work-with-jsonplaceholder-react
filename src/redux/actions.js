import { SELECT_USER, SET_USERS} from "./types";

export function selectUser(user) {
    return {
        type: SELECT_USER,
        payload: user
    }
}

export function setUsers(users) {
    return {
        type: SET_USERS,
        payload: users
    }
}