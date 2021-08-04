"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HomeController = void 0;
const Controller_1 = require("./Controller");
const Schedule_1 = require("../models/Schedule");
const anime_1 = require("../models/anime");
const marked_activ_nav_item_1 = require("../models/marked_activ_nav_item");
class HomeController extends Controller_1.Controller {
    default() {
        marked_activ_nav_item_1.Marked_nav_item.get().marked("home"); // for selected  header nav item (marcked nav item whit two lines  top and bottom )
        this.schedule();
    }
    schedule() {
        marked_activ_nav_item_1.Marked_nav_item.get().marked("home");
        const schedule = new Schedule_1.Schedule;
        schedule.display_Schedule();
    }
    anime(args) {
        marked_activ_nav_item_1.Marked_nav_item.get().marked("home");
        anime_1.Anime_info.get().show_anime_info(args[0], "GET", "", "anime_info.njk");
    }
}
exports.HomeController = HomeController;
