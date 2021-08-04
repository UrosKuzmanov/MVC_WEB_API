import { Router } from "./Router";
import { View } from "./View";
import { URLParser } from "./URLParser";
import { Filters } from "./models/Filters";

//select output div
View.set_app_element(".app_div")
//----------------------------------


//Controller register
/*Router.get().register("home", new HomeController)
Router.get().register("posts", new PostController)*/
//--------------------------------------------------------


//function load section
window.onload = main        //load main functiin to start app
document.body.onclick = global_click_listener       // load global click listener
//------------------------------------------------



//functions section

function main() {       //main function to start app
    const hash = window.location.hash
    const parser = new URLParser(hash)
    Router.get().call(parser.parse())
}

function global_click_listener(e: any): void { //global click listener
    console.log(e.target)

    if (e.target.tagName == "A" && e.target.getAttribute("href").startsWith("#")) {     //click on navi link
        click_on_nav_link(e)     
    }
    if (e.target.hasAttribute("genere_a")) {        //for marck selected genere in white
        mark_selected_genere(e)   
    }
    if (e.target.hasAttribute("search_icon")) {     //search animes by click on search icon
        click_on_search_icon(e)           
    }
    if (e.target.hasAttribute("filter_btn")) {      //search anime by filters options
        filter_animes_by_filter_options(e) 
    }
    if (e.target.hasAttribute("input_range")) {     // limited range of thumb. Min thumb can't be > then max thumb and max can't be < then min thumb
        limited_range_of_range_thumb(e)   
    }
}



function click_on_nav_link(e:any): void{      //click on navi link
    const hash = e.target.getAttribute("href")
    const parse = new URLParser(hash).parse()

    Router.get().call(parse);
}


function mark_selected_genere(e:any): void{         //for marck selected genere in white
    const unselect = <HTMLElement>document.querySelector(".selected_genere")
    const selected_id = e.target.getAttribute("id")
    const selected = <HTMLElement>document.getElementById(selected_id)

    if (unselect != null) {
        unselect.classList.remove("selected_genere")
    }

    selected.classList.add("selected_genere")
}


function click_on_search_icon(e:any): void{//search animes by click on search icon
    const search_input = <HTMLInputElement>document.querySelector(".search_input")
    let search_txt = search_input.value

    if (search_txt.length > 2) {
        let hash = `#filters/filtered_anima/search/${search_txt}`

        const parse = new URLParser(hash).parse()
        window.location.hash = `#filter/filtered_anima/search/${search_txt}`
        search_input.value = ""

        Router.get().call(parse);

    } else {
        alert("Please input minimum 3 letter")
    }
}

function filter_animes_by_filter_options(e:any): void{ //search anime by filters options
    const start_date = <HTMLInputElement>document.querySelector(".start_date")
    const start_date_value: string = start_date.value
    const end_date = <HTMLInputElement>document.querySelector(".end_date")
    const end_date_value: string = end_date.value
    const min_score = <HTMLInputElement>document.querySelector(".min_score")
    const min_score_value: string = min_score.value
    const max_score = <HTMLInputElement>document.querySelector(".max_score")
    const max_score_value: string = max_score.value
    const rated = <HTMLInputElement>document.querySelector("#rated")
    const rated_value: string = rated.value
    let criteria = `&score=${min_score_value}-${max_score_value}&rated=${rated_value}`
   
    if (start_date_value) {
        criteria += `&start_date=${start_date_value}`
    }
    if (end_date_value) {
        criteria += `&end_date=${end_date_value}`
    }

    Filters.get().show_filter_anime_list("more_filters", criteria)
}

//---------------------------------------------2 functions for one operation --------------------------------------------------------------
function limited_range_of_range_thumb(e:any): void{// 1/2 limited range of thumb. Min thumb can't be > then max thumb and max can't be < then min thumb
    const min_range = <HTMLInputElement>document.querySelector(".min_score")
    const max_range = <HTMLInputElement>document.querySelector(".max_score")
    const min_otp = <HTMLInputElement>document.querySelector("#out_min")
    const max_otp = <HTMLInputElement>document.querySelector("#out_max")

    min_range.onclick = () => {
        slide(min_range, max_range, "slide1", min_otp, max_otp)
    }
    max_range.onclick = () => {
        slide(min_range, max_range, "slide2", min_otp, max_otp)
    }
}
// 2/2 limited range of thumb. Min thumb can't be > then max thumb and max can't be < then min thumb logic function
function slide(slide1: HTMLInputElement, slide2: HTMLInputElement, criteria: string, min_otp: HTMLInputElement, max_otp: HTMLInputElement): void {
    const score1 = Number(slide1.value)
    const score2 = Number(slide2.value)

    if ((score2 - score1) <= 0) {

        if (criteria == "slide1") {
            slide1.value = slide2.value
        } else {
            slide2.value = slide1.value
        }
    }

    if (criteria == "slide1") {
        min_otp.innerText = slide1.value
    } else {
        max_otp.innerText = slide2.value
    }
}
//-------------------------------------------------------------------------------------------------------------------------------

