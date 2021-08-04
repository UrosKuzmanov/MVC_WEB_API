"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.XHRRequest_M = void 0;
const View_1 = require("../View");
class XHRRequest_M {
    constructor(url, method, calback_fun = [], template, callback_data = {}, data = "") {
        this.url = url;
        this.method = method;
        this.calback_fun = calback_fun;
        this.callback_data = callback_data;
        this.data = data;
        this.template = template;
        this.xhr = new XMLHttpRequest();
    }
    xhr_request() {
        window.scroll(0, 0);
        const loader = document.querySelector(".loader");
        loader.style.display = "initial";
        this.xhr.onload = () => {
            if (this.xhr.readyState == 4 && (this.xhr.status == 200 || this.xhr.status == 304)) {
                this.callback_data["json_data"] = JSON.parse(this.xhr.responseText);
                let data = {
                    "anime": this.callback_data["json_data"],
                    "call_b_data": this.callback_data["data"],
                };
                for (let call_back of this.calback_fun) {
                    data = call_back(this.callback_data);
                }
                console.log(data);
                View_1.View.get().render(this.template, data);
                setTimeout(() => {
                    const loader = document.querySelector(".loader");
                    loader.style.display = "none";
                }, 500);
            }
            else { }
        };
        this.xhr.open(this.method, this.url);
        this.xhr.send(this.data);
    }
}
exports.XHRRequest_M = XHRRequest_M;
