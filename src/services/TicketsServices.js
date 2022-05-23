import { TicketInfo } from "../core/models/BookTicketsInfo";
import { BaseService } from "./BaseServices";

export class TicketsServices extends BaseService {
    constructor() {
        super()
    }

    getTicketCinema = (id) => {
        return this.get(`api/QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=${id}`)
    }

    postTicketMovie = (ticketInfo = new TicketInfo()) => {
        return this.post(`api/QuanLyDatVe/DatVe`, ticketInfo)
    }

}

export const ticketsServices = new TicketsServices()