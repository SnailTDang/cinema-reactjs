import Axios from "axios"
import { DOMAIN_CYBER, TOKEN_CYBER, API_TOKEN } from "../ulti/constants/Settings"

export class BaseService {
    //put json về phía backend
    put = (url, model) => {
        return Axios({
            url: `${DOMAIN_CYBER}/${url}`,
            method: 'PUT',
            data: model,
            headers: {
                'Authorization': 'Bearer ',
                'TokenCybersoft': localStorage.getItem(API_TOKEN)
            }
        })
    }

    post = (url, model) => {
        return Axios({
            url: `${DOMAIN_CYBER}/${url}`,
            method: 'POST',
            data: model,
            headers: {
                'Authorization': 'Bearer ',
                'TokenCybersoft': localStorage.getItem(API_TOKEN)
            }
        })
    }


    get = (url) => {
        return Axios({
            url: `${DOMAIN_CYBER}/${url}`,
            method: 'GET',
            headers: {
                'Authorization': 'Bearer ',
                'TokenCybersoft': localStorage.getItem(API_TOKEN)
            }
        })
    }

    delete = (url) => {
        return Axios({
            url: `${DOMAIN_CYBER}/${url}`,
            method: 'DELETE',
            headers: {
                'Authorization': 'Bearer ',
                'TokenCybersoft': localStorage.getItem(API_TOKEN)
            }
        })
    }
}