import { Controller } from "./Controller";
import { Schedule } from "../models/Schedule";
import { Anime_info } from "../models/anime";
import { Marked_nav_item } from "../models/marked_activ_nav_item";

export class HomeController extends Controller{
    default(): void {
        Marked_nav_item.get().marked("home")// for selected  header nav item (marcked nav item whit two lines  top and bottom )
        this.schedule()
    }
    schedule():void{ //display animes list for today
        Marked_nav_item.get().marked("home")
        const schedule=new Schedule
        schedule.display_Schedule()  
    }
    anime(args:string[]):void{ //display anime info from today list
        Marked_nav_item.get().marked("home")
        Anime_info.get().show_anime_info(args[0],"GET","","anime_info.njk")

    }
    
    
}
