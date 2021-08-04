import * as nunjcks from "nunjucks"

export class View{

    private static instance:View

    private app_element?:HTMLElement
    private constructor(){}

    public static set_app_element(selector:string):void{
        View.get().app_element=<HTMLElement>document.querySelector(selector)
    }

    public static get():View{
        if(View.instance==undefined || View.instance==null){
            nunjcks.configure("./../templates",{autoescape:false})
            View.instance=new View()
        }
        return View.instance
    }

    public render(template:string,data:any={}){
        if(this.app_element != undefined){

            this.app_element.innerHTML=nunjcks.render(template,data)
        }
    }
}