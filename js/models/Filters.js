"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Filters = void 0;
const View_1 = require("../View");
const anime_1 = require("./anime");
const anime_list_1 = require("./anime_list");
class Filters {
    constructor() { }
    static get() {
        if (Filters.instance == undefined || Filters.instance == null) {
            Filters.instance = new Filters;
        }
        return Filters.instance;
    }
    show_more_filters() {
        View_1.View.get().render("more_filters.njk");
    }
    filter_data(callback_data) {
        return {
            "anime": callback_data["json_data"]["results"],
            "data": callback_data["data"]
        };
    }
    show_filter_anime_list(page, criteria) {
        const data = {
            "page": page,
            "criteria": criteria,
        };
        const url = "https://api.jikan.moe/v3/search/anime?q=";
        anime_list_1.Anime_list.get().show_anime_list(url, criteria, "GET", [this.filter_data], "anime_list.njk", { "data": data });
    }
    show_anime_info(id, criteria, page) {
        const data = {
            "id": id,
            "criteria": criteria,
            "page": page // name of page where go when clik on back arr.
        };
        anime_1.Anime_info.get().show_anime_info(id, "GET", [], "anime_info.njk", { "data": data });
    }
}
exports.Filters = Filters;
