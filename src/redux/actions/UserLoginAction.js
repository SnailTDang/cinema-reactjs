import { userServices } from '../../services/UserServices'
import { USER_LOGIN, USER_LOGIN_FAIL } from '../../ulti/constants/Settings'
import { history } from '../../App'



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