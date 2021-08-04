import { XHRRequest_M } from "../XHRRequest";
import { View } from "../View";
import { Anime_info } from "./anime";
import { Anime_list } from "./anime_list";

export class Filters {

    private static instance:Filters
    private constructor(){}

    public static get(){
        if(Filters.instance==undefined||Filters.instance==null){
            Filters.instance=new Filters
        }
        return Filters.instance

    }

    public show_more_filters() {
        View.get().render("more_filters.njk")

    }

    public filter_data(callback_data: any) {

        return {
            "anime": callback_data["json_data"]["results"],
            "data": callback_data["data"]

        }
    }

    public show_filter_anime_list(page:string,criteria:string) {
        const data={
            "page":page,
            "criteria":criteria,
        }
        const url="https://api.jikan.moe/v3/search/anime?q="

        Anime_list.get().show_anime_list(url,criteria,"GET",[this.filter_data],"anime_list.njk",{"data":data })
    }

    public show_anime_info(id:string,criteria:string,page:string) {
        const data = {
            "id":id,//id of anime
            "criteria": criteria, //filter criteria important becouse cambeck page,
            "page": page // name of page where go when clik on back arr.
        }
        Anime_info.get().show_anime_info(id, "GET", [], "anime_info.njk", { "data": data })

    }

}