import { Controller } from "./Controller";
import { Genere } from "../models/Genere";
import { Loader } from "../models/Loader";
import { Marked_nav_item } from "../models/marked_activ_nav_item";
export class GenereController extends Controller{
    default(): void {
        Loader.get().loader("off")
        Marked_nav_item.get().marked("genere")// for selected  header nav item (marcked nav item whit two lines  top and bottom )
        this.genere_list()
    }
    genere_list():void{//display page whit generes list
        Marked_nav_item.get().marked("genere")
        Genere.get().genere_list()
    }
    view(args:string[]):void{ //display animes list of selected genere
        Marked_nav_item.get().marked("genere")
        Genere.get().display_genere_anime(args[0])
    }
    anime(args:string[]):void{ //display anime info from list
        Marked_nav_item.get().marked("genere")
        Genere.get().show_genere_anime_info(args[1],args[0])
    }
    
}