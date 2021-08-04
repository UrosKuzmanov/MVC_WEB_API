"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostController = void 0;
const Controller_1 = require("./Controller");
class PostController extends Controller_1.Controller {
    default() {
        console.log("default");
    }
    all() {
        console.log("call all");
    }
    view(args) {
        console.log("view" + args);
    }
}
exports.PostController = PostController;
