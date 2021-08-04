"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Marked_nav_item = void 0;
class Marked_nav_item {
    constructor() { }
    static get() {
        if (Marked_nav_item.instance == undefined || Marked_nav_item.instance == null) {
            Marked_nav_item.instance = new Marked_nav_item;
        }
        return Marked_nav_item.instance;
    }
    marked(nav_item) {
        const selected_cursor = document.querySelector(".selected");
        let selected_id_item = "nav_item_1";
        if (nav_item == "genere") {
            selected_id_item = "nav_item_2";
        }
        else if (nav_item == "filter") {
            selected_id_item = "nav_item_3";
        }
        const selected_item = document.getElementById(selected_id_item);
        selected_cursor.style.width = selected_item.offsetWidth + "px";
        selected_cursor.style.left = selected_item.offsetLeft + "px";
    }
}
exports.Marked_nav_item = Marked_nav_item;
