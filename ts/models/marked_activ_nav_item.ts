export class Marked_nav_item{

    private static instance:Marked_nav_item
    
    private constructor(){}


    public static get(){
        if(Marked_nav_item.instance==undefined||Marked_nav_item.instance==null){
            Marked_nav_item.instance=new Marked_nav_item
        }
        return Marked_nav_item.instance

    }
    public marked(nav_item:string){
        const selected_cursor = <HTMLElement>document.querySelector(".selected")

        let selected_id_item="nav_item_1"
        if(nav_item=="genere"){
             selected_id_item="nav_item_2"
        }else if(nav_item=="filter"){
            selected_id_item="nav_item_3"
        }
        
        const selected_item = <HTMLElement>document.getElementById(selected_id_item)
        
        selected_cursor.style.width = selected_item.offsetWidth + "px"
        selected_cursor.style.left = selected_item.offsetLeft + "px"

    }
}