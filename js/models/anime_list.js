"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Anime_list = void 0;
const XHRRequest_1 = require("../XHRRequest");
class Anime_list {
    constructor() { }
    static get() {
        if (Anime_list.instance == undefined || Anime_list.instance == null) {
            Anime_list.instance = new Anime_list;
        }
        return Anime_list.instance;
    }
    show_anime_list(url, id, method, call_back_fun = [], template, callback_data = {}) {
        const xhr = new XHRRequest_1.XHRRequest_M(`${url}${id}`, method, call_back_fun, template, callback_data).xhr_request();
    }
}
exports.Anime_list = Anime_list;
