import { HomeController } from "./controllers/HomeController"
import { GenereController } from "./controllers/GenereController"
import { FiltersController } from "./controllers/FilterController"

export class Router{
    private static instance:Router
    private registry:any={}
    private constructor(){
        this.registry={
            "home": new HomeController,
            "genere": new GenereController,
            "filters": new FiltersController,
            
        }
    }

    public static get(){
        if(Router.instance==undefined||Router.instance==null){
            Router.instance=new Router
        }
        return Router.instance

    }
    /*public register(key:string,controller:any){
        this.registry[key]=controller
    
    }*/
    
    public call(call_data:any){
        if(!(call_data.controller in this.registry)){
            throw new Error("Error 404. Page Not Found")
        }
        const controller=this.registry[call_data.controller]

        if(call_data.args.length==0){
            controller[call_data.method]()
        }else{
            controller[call_data.method](call_data.args)
            
        }
        
    }

}