export class Loader{

    private static instance:Loader
 
    
    private constructor(){}


    public static get(){
        if(Loader.instance==undefined||Loader.instance==null){
            Loader.instance=new Loader
        }
        return Loader.instance

    }
    public loader(status:string){ 
        if(status=="off"){
            const loader = <HTMLElement>document.querySelector(".loader")
            loader.style.display = "none"
        }
        if(status=="on"){
            const loader = <HTMLElement>document.querySelector(".loader")
            loader.style.display = "initial"
        }
        
    }
}