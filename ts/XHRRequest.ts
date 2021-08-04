import { View } from "./View"
import { Loader } from "./models/Loader"

export class XHRRequest_M {
    private url: string
    private method: string
    private calback_fun: any
    private callback_data: any
    private data: string
    private xhr: any
    public data_a: any
    private template: string

    constructor(url: string, method: string, calback_fun: any = [], template: string, callback_data: any = {}, data: string = "") {
        this.url = url
        this.method = method
        this.calback_fun = calback_fun
        this.callback_data = callback_data
        this.data = data
        this.template = template
        this.xhr = new XMLHttpRequest()
    }
    public xhr_request() {
        window.scroll(0, 0) 
        Loader.get().loader("on")//start loader 

        this.xhr.onload = () => {
            if (this.xhr.readyState == 4 && (this.xhr.status == 200 || this.xhr.status == 304)) {

                this.callback_data["json_data"] = JSON.parse(this.xhr.responseText)
                let data = {
                    "anime": this.callback_data["json_data"],
                    "call_b_data": this.callback_data["data"],
                }

                for (let call_back of this.calback_fun) {
                    data = call_back(this.callback_data)

                }

                View.get().render(this.template, data)

                setTimeout(() => {
                    Loader.get().loader("off") //end of loader
                }, 500)
            } else {
                const data=JSON.parse(this.xhr.responseText)
               
                View.get().render("err.njk",data)
                Loader.get().loader("off")

            }

        }

        this.xhr.open(this.method, this.url)
        this.xhr.send(this.data)

    }


}