import { Filters } from "../models/Filters";
import { Loader } from "../models/Loader";
import { Marked_nav_item } from "../models/marked_activ_nav_item";
export class FiltersController{

    more_filters(){  // for display page whit more filter options
        Marked_nav_item.get().marked("filter") // for selected  header nav item (marcked nav item whit two lines  top and bottom )
        Loader.get().loader("off")
        Filters.get().show_more_filters()
    }
    
    filtered_anima(args:any){ //for display anemes list 
        Marked_nav_item.get().marked("filter")
        Filters.get().show_filter_anime_list(args[0],args[1])
    }

    anime(args:any):void{ //controler for displey anime info from result
        Marked_nav_item.get().marked("filter")
        Filters.get().show_anime_info(args[0],args[1],args[2])
    }

  
}