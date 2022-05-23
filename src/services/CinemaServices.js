import { BaseService } from "./BaseServices";

export class CinemaServices extends BaseService {
    constructor() {
        super()
    }

    getListCinema = (maNhom) => {
        return this.get(`api/QuanLyRap/LayThongTinLichChieuHeThongRap?maNhom=${maNhom}`)
    }
    getShowtimeMovie = (filmID) => {
        return this.get(`api/QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${filmID}`)
    }
}

export const cinemaServices = new CinemaServices()