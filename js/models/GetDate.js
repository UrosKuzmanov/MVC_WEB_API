"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Get_date_string = void 0;
class Get_date_string {
    constructor() { }
    static get() {
        if (Get_date_string.instance == undefined || Get_date_string.instance == null) {
            Get_date_string.instance = new Get_date_string;
        }
        return Get_date_string.instance;
    }
    date_string() {
        const days = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];
        return days[new Date().getDay()];
    }
}
exports.Get_date_string = Get_date_string;
