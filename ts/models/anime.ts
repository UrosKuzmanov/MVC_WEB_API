import { XHRRequest_M } from "../XHRRequest";

export class Anime_info{

    private static instance:Anime_info
    
    private constructor(){}


    public static get(){
        if(Anime_info.instance==undefined||Anime_info.instance==null){
            Anime_info.instance=new Anime_info
        }
        return Anime_info.instance

    }
    public show_anime_info(anime_id:string,method:string,call_back_fun:any=[],template:string,callback_data:any={}){ //display anime info from todaylist
        const xhr=new XHRRequest_M(`https://api.jikan.moe/v3/anime/${anime_id}`,method,call_back_fun,template,callback_data).xhr_request()
    }
}