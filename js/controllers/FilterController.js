"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FiltersController = void 0;
const Filters_1 = require("../models/Filters");
const Loader_1 = require("../models/Loader");
const marked_activ_nav_item_1 = require("../models/marked_activ_nav_item");
class FiltersController {
    more_filters() {
        marked_activ_nav_item_1.Marked_nav_item.get().marked("filter"); // for selected  header nav item (marcked nav item whit two lines  top and bottom )
        Loader_1.Loader.get().loader("off");
        Filters_1.Filters.get().show_more_filters();
    }
    filtered_anima(args) {
        marked_activ_nav_item_1.Marked_nav_item.get().marked("filter");
        Filters_1.Filters.get().show_filter_anime_list(args[0], args[1]);
    }
    anime(args) {
        marked_activ_nav_item_1.Marked_nav_item.get().marked("filter");
        Filters_1.Filters.get().show_anime_info(args[0], args[1], args[2]);
    }
}
exports.FiltersController = FiltersController;
