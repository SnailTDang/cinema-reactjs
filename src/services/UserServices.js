import { BaseService } from "./BaseServices";

export class UserServices extends BaseService {
    constructor() {
        super()
    }

    postUserLogin = (user) => {
        return this.post(`api/QuanLyNguoiDung/DangNhap`, user)
    }

    postUserSignIn = (user)=> {
        return this.post(`api/QuanLyNguoiDung/DangKy`, user)
    }

}

export const userServices = new UserServices()