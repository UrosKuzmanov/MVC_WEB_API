"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Anime_info = void 0;
const XHRRequest_1 = require("../XHRRequest");
class Anime_info {
    constructor() { }
    static get() {
        if (Anime_info.instance == undefined || Anime_info.instance == null) {
            Anime_info.instance = new Anime_info;
        }
        return Anime_info.instance;
    }
    show_anime_info(anime_id, method, call_back_fun = [], template, callback_data = {}) {
        const xhr = new XHRRequest_1.XHRRequest_M(`https://api.jikan.moe/v3/anime/${anime_id}`, method, call_back_fun, template, callback_data).xhr_request();
    }
}
exports.Anime_info = Anime_info;
