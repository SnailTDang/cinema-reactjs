import { userServices } from '../../services/UserServices'
import { USER_SIGN_IN, USER_SIGNIN_FAIL } from '../../ulti/constants/Settings'
import { history } from '../../App'



export const UserSignInAction = (user) => {
    return dispatch => {
        let promise = userServices.postUserSignIn(user)
        promise.then(result => {
            if (result.data.statusCode === 200) {
                let action = {
                    type: USER_SIGN_IN,
                    value: result.data.content
                }
                dispatch(action)
                history.go("/login")
            }
        })
        promise.catch(error => {
            if (error.response.data.statusCode !== 200) {
                let action = {
                    type: USER_SIGNIN_FAIL,
                    value: error.response.data.content
                }
                dispatch(action)
            }
        })
    }
}