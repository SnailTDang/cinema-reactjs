import { TOKEN_CYBER, USER_LOGIN, USER_SIGN_IN, USER_LOGIN_FAIL, USER_SIGNIN_FAIL } from "../../ulti/constants/Settings"
import { GET_TICKETS_USER_BOOK } from "../types/UserLoginType"



let userDefault = {}


if (localStorage.getItem(USER_LOGIN)) {
    userDefault = JSON.parse(localStorage.getItem(USER_LOGIN))
}

const initialState = {
    userLogin: userDefault,
    userInfo: {},
    loginfail: '',
    signinfail: '',
}

export const UserLoginReducer = (state = initialState, action) => {
    switch (action.type) {
        case USER_LOGIN:
            state.userLogin = action.value
            state.loginfail = ""
            localStorage.setItem(USER_LOGIN, JSON.stringify(action.value))
            localStorage.setItem(TOKEN_CYBER, JSON.stringify(action.value.accessToken))
            return { ...state }
        case USER_LOGIN_FAIL:
            state.loginfail = action.value
            return { ...state }
        case USER_SIGNIN_FAIL:
            state.signinfail = action.value
            return { ...state }
        case GET_TICKETS_USER_BOOK:
            state.userInfo = action.value
            return { ...state }
        default:
            return state
    }
}
