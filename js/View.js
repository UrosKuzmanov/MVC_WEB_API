"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.View = void 0;
const nunjcks = __importStar(require("nunjucks"));
class View {
    constructor() { }
    static set_app_element(selector) {
        View.get().app_element = document.querySelector(selector);
    }
    static get() {
        if (View.instance == undefined || View.instance == null) {
            nunjcks.configure("./../templates", { autoescape: false });
            View.instance = new View();
        }
        return View.instance;
    }
    render(template, data = {}) {
        if (this.app_element != undefined) {
            this.app_element.innerHTML = nunjcks.render(template, data);
        }
    }
}
exports.View = View;
