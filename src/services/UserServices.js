import Axios from "axios";
import { API_TOKEN, DOMAIN_CYBER, TOKEN_CYBER } from "../ulti/constants/Settings";
import { BaseService } from "./BaseServices";

export class UserServices extends BaseService {
    constructor() {
        super()
    }

    postUserLogin = (user) => {
        return this.post(`api/QuanLyNguoiDung/DangNhap`, user)
    }

    postUserSignIn = (user) => {
        return this.post(`api/QuanLyNguoiDung/DangKy`, user)
    }

    checkTicketsUser = () => {
        return Axios({
            url: `${DOMAIN_CYBER}/api/QuanLyNguoiDung/ThongTinTaiKhoan`,
            method: 'POST',
            headers: {
                'Authorization': 'Bearer ' + JSON.parse(localStorage.getItem(TOKEN_CYBER)),
                'TokenCybersoft': localStorage.getItem(API_TOKEN)
            }
        })
    }
}

export const userServices = new UserServices()