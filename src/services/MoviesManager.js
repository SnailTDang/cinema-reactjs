import { BaseService } from "./BaseServices";

export class MoviesManager extends BaseService {
    constructor() {
        super()
    }

    getListBanner = (maNhom) => {
        return this.get(`api/QuanLyPhim/LayDanhSachPhim?maNhom=${maNhom}`)
    }
    getListMovies = (maNhom) => {
        return this.get(`api/QuanLyPhim/LayDanhSachPhim?maNhom=${maNhom}`)
    }
}

export const moviesManager = new MoviesManager()