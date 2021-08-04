"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Router = void 0;
const HomeController_1 = require("./controllers/HomeController");
const GenereController_1 = require("./controllers/GenereController");
const FilterController_1 = require("./controllers/FilterController");
class Router {
    constructor() {
        this.registry = {};
        this.registry = {
            "home": new HomeController_1.HomeController,
            "genere": new GenereController_1.GenereController,
            "filters": new FilterController_1.FiltersController,
        };
    }
    static get() {
        if (Router.instance == undefined || Router.instance == null) {
            Router.instance = new Router;
        }
        return Router.instance;
    }
    /*public register(key:string,controller:any){
        this.registry[key]=controller
    
    }*/
    call(call_data) {
        if (!(call_data.controller in this.registry)) {
            throw new Error("Error 404. Page Not Found");
        }
        const controller = this.registry[call_data.controller];
        if (call_data.args.length == 0) {
            controller[call_data.method]();
        }
        else {
            controller[call_data.method](call_data.args);
        }
    }
}
exports.Router = Router;
