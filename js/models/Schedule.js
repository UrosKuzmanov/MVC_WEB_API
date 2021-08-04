"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Schedule = void 0;
const GetDate_1 = require("./GetDate");
const anime_list_1 = require("./anime_list");
class Schedule {
    constructor() { }
    schedule_data(callback_data) {
        const day_string = GetDate_1.Get_date_string.get().date_string();
        return {
            "anime": callback_data["json_data"][day_string],
            "day": day_string
        };
    }
    display_Schedule() {
        const day_string = GetDate_1.Get_date_string.get().date_string();
        const url = "https://api.jikan.moe/v3/schedule/";
        anime_list_1.Anime_list.get().show_anime_list(url, day_string, "GET", [this.schedule_data], "schedule.njk");
    }
}
exports.Schedule = Schedule;
