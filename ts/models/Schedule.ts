import { Get_date_string } from "./GetDate";
import { Anime_list } from "./anime_list";

export class Schedule{

    public constructor(){}
    
    public schedule_data(callback_data:any):any{
        const day_string=Get_date_string.get().date_string()

        return{
            "anime":callback_data["json_data"][day_string],
            "day": day_string
        }
    }

    public display_Schedule():any{
        const day_string=Get_date_string.get().date_string()
        const url="https://api.jikan.moe/v3/schedule/"
        Anime_list.get().show_anime_list(url,day_string,"GET",[this.schedule_data],"schedule.njk")
    }
}