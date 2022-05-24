import { userServices } from '../../services/UserServices'
import { history } from '../../App'
import { USER_LOGIN, USER_LOGIN_FAIL } from '../../ulti/constants/Settings'
import { GET_TICKETS_USER_BOOK } from '../types/UserLoginType'



export const UserLoginAction = (user) => {
    return dispatch => {
        let promise = userServices.postUserLogin(user)
        promise.then(result => {
            if (result.data.statusCode === 200) {

                let action = {
                    type: USER_LOGIN,
                    value: result.data.content
                }
                dispatch(action)
                history.goBack()
            }
        })
        promise.catch(error => {
            if (error.response.data.statusCode === 404) {
                let action = {
                    type: USER_LOGIN_FAIL,
                    value: error.response.data.content
                }
                console.log(action)
                dispatch(action)
            }
        })
    }
}

export const GetTicketsUserAction = (token) => {
    return dispatch => {
        let promise = userServices.checkTicketsUser(token)
        promise.then(result => {
            let action = {
                type: GET_TICKETS_USER_BOOK,
                value: result.data.content
            }
            dispatch(action)
            console.log(result.data.message)
        })
        promise.catch(error => {
            console.log(error)
        })
    }
}