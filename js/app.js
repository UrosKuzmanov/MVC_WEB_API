"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Router_1 = require("./Router");
const View_1 = require("./View");
const URLParser_1 = require("./URLParser");
const Filters_1 = require("./models/Filters");
//select output div
View_1.View.set_app_element(".app_div");
//----------------------------------
//Controller register
/*Router.get().register("home", new HomeController)
Router.get().register("posts", new PostController)*/
//--------------------------------------------------------
//function load section
window.onload = main; //load main functiin to start app
document.body.onclick = global_click_listener; // load global click listener
//------------------------------------------------
//functions section
function main() {
    const hash = window.location.hash;
    const parser = new URLParser_1.URLParser(hash);
    Router_1.Router.get().call(parser.parse());
}
function global_click_listener(e) {
    console.log(e.target);
    if (e.target.tagName == "A" && e.target.getAttribute("href").startsWith("#")) { //click on navi link
        click_on_nav_link(e);
    }
    if (e.target.hasAttribute("genere_a")) { //for marck selected genere in white
        mark_selected_genere(e);
    }
    if (e.target.hasAttribute("search_icon")) { //search animes by click on search icon
        click_on_search_icon(e);
    }
    if (e.target.hasAttribute("filter_btn")) { //search anime by filters options
        filter_animes_by_filter_options(e);
    }
    if (e.target.hasAttribute("input_range")) { // limited range of thumb. Min thumb can't be > then max thumb and max can't be < then min thumb
        limited_range_of_range_thumb(e);
    }
}
function click_on_nav_link(e) {
    const hash = e.target.getAttribute("href");
    const parse = new URLParser_1.URLParser(hash).parse();
    Router_1.Router.get().call(parse);
}
function mark_selected_genere(e) {
    const unselect = document.querySelector(".selected_genere");
    const selected_id = e.target.getAttribute("id");
    const selected = document.getElementById(selected_id);
    if (unselect != null) {
        unselect.classList.remove("selected_genere");
    }
    selected.classList.add("selected_genere");
}
function click_on_search_icon(e) {
    const search_input = document.querySelector(".search_input");
    let search_txt = search_input.value;
    if (search_txt.length > 2) {
        let hash = `#filters/filtered_anima/search/${search_txt}`;
        const parse = new URLParser_1.URLParser(hash).parse();
        window.location.hash = `#filter/filtered_anima/search/${search_txt}`;
        search_input.value = "";
        Router_1.Router.get().call(parse);
    }
    else {
        alert("Please input minimum 3 letter");
    }
}
function filter_animes_by_filter_options(e) {
    const start_date = document.querySelector(".start_date");
    const start_date_value = start_date.value;
    const end_date = document.querySelector(".end_date");
    const end_date_value = end_date.value;
    const min_score = document.querySelector(".min_score");
    const min_score_value = min_score.value;
    const max_score = document.querySelector(".max_score");
    const max_score_value = max_score.value;
    const rated = document.querySelector("#rated");
    const rated_value = rated.value;
    let criteria = `&score=${min_score_value}-${max_score_value}&rated=${rated_value}`;
    if (start_date_value) {
        criteria += `&start_date=${start_date_value}`;
    }
    if (end_date_value) {
        criteria += `&end_date=${end_date_value}`;
    }
    Filters_1.Filters.get().show_filter_anime_list("more_filters", criteria);
}
//---------------------------------------------2 functions for one operation --------------------------------------------------------------
function limited_range_of_range_thumb(e) {
    const min_range = document.querySelector(".min_score");
    const max_range = document.querySelector(".max_score");
    const min_otp = document.querySelector("#out_min");
    const max_otp = document.querySelector("#out_max");
    min_range.onclick = () => {
        slide(min_range, max_range, "slide1", min_otp, max_otp);
    };
    max_range.onclick = () => {
        slide(min_range, max_range, "slide2", min_otp, max_otp);
    };
}
// 2/2 limited range of thumb. Min thumb can't be > then max thumb and max can't be < then min thumb logic function
function slide(slide1, slide2, criteria, min_otp, max_otp) {
    const score1 = Number(slide1.value);
    const score2 = Number(slide2.value);
    if ((score2 - score1) <= 0) {
        if (criteria == "slide1") {
            slide1.value = slide2.value;
        }
        else {
            slide2.value = slide1.value;
        }
    }
    if (criteria == "slide1") {
        min_otp.innerText = slide1.value;
    }
    else {
        max_otp.innerText = slide2.value;
    }
}
//-------------------------------------------------------------------------------------------------------------------------------
