"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Loader = void 0;
class Loader {
    constructor() { }
    static get() {
        if (Loader.instance == undefined || Loader.instance == null) {
            Loader.instance = new Loader;
        }
        return Loader.instance;
    }
    loader(status) {
        if (status == "off") {
            const loader = document.querySelector(".loader");
            loader.style.display = "none";
        }
        if (status == "on") {
            const loader = document.querySelector(".loader");
            loader.style.display = "initial";
        }
    }
}
exports.Loader = Loader;
