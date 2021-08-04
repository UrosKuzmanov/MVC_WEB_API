import { XHRRequest_M } from "../XHRRequest";

export class Anime_list{

    private static instance:Anime_list
    
    private constructor(){}


    public static get(){
        if(Anime_list.instance==undefined||Anime_list.instance==null){
            Anime_list.instance=new Anime_list
        }
        return Anime_list.instance

    }
    public show_anime_list(url:string,id:string,method:string,call_back_fun:any=[],template:string,callback_data:any={}){ //display anime info from todaylist
        const xhr=new XHRRequest_M(`${url}${id}`,method,call_back_fun,template,callback_data).xhr_request()
    }
}