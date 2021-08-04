"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GenereController = void 0;
const Controller_1 = require("./Controller");
const Genere_1 = require("../models/Genere");
const Loader_1 = require("../models/Loader");
const marked_activ_nav_item_1 = require("../models/marked_activ_nav_item");
class GenereController extends Controller_1.Controller {
    default() {
        Loader_1.Loader.get().loader("off");
        marked_activ_nav_item_1.Marked_nav_item.get().marked("genere"); // for selected  header nav item (marcked nav item whit two lines  top and bottom )
        this.genere_list();
    }
    genere_list() {
        marked_activ_nav_item_1.Marked_nav_item.get().marked("genere");
        Genere_1.Genere.get().genere_list();
    }
    view(args) {
        marked_activ_nav_item_1.Marked_nav_item.get().marked("genere");
        Genere_1.Genere.get().display_genere_anime(args[0]);
    }
    anime(args) {
        marked_activ_nav_item_1.Marked_nav_item.get().marked("genere");
        Genere_1.Genere.get().show_genere_anime_info(args[1], args[0]);
    }
}
exports.GenereController = GenereController;
