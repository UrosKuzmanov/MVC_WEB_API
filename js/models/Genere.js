"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Genere = void 0;
const View_1 = require("../View");
const anime_1 = require("./anime");
const anime_list_1 = require("./anime_list");
class Genere {
    constructor() {
        this.generes = {
            "generes": [
                { "mal_id": 1, "name": "Action" },
                { "mal_id": 2, "name": "Adventure" },
                { "mal_id": 3, "name": "Cars" },
                { "mal_id": 4, "name": "Comedy" },
                { "mal_id": 5, "name": "Dementia" },
                { "mal_id": 6, "name": "Demons" },
                { "mal_id": 7, "name": "Mystery" },
                { "mal_id": 8, "name": "Drama" },
                { "mal_id": 9, "name": "Ecchi" },
                { "mal_id": 10, "name": "Fantasy" },
                { "mal_id": 11, "name": "Game" },
                { "mal_id": 12, "name": "Hentai" },
                { "mal_id": 13, "name": "Historical" },
                { "mal_id": 14, "name": "Horror" },
                { "mal_id": 15, "name": "Kids" },
                { "mal_id": 16, "name": "Magic" },
                { "mal_id": 17, "name": "Martial Arts" },
                { "mal_id": 18, "name": "Mecha" },
                { "mal_id": 19, "name": "Music" },
                { "mal_id": 20, "name": "Parody" },
                { "mal_id": 21, "name": "Samurai" },
                { "mal_id": 22, "name": "Romance" },
                { "mal_id": 23, "name": "School" },
                { "mal_id": 24, "name": "Sci Fi" },
                { "mal_id": 25, "name": "Shoujo" },
                { "mal_id": 26, "name": "Shoujo Ai" },
                { "mal_id": 27, "name": "Shounen" },
                { "mal_id": 28, "name": "Shounen Ai" },
                { "mal_id": 29, "name": "Space" },
                { "mal_id": 30, "name": "Sports" },
                { "mal_id": 31, "name": "Super Power" },
                { "mal_id": 32, "name": "Vampire" },
                { "mal_id": 33, "name": "Yaoi" },
                { "mal_id": 34, "name": "Yuri" },
                { "mal_id": 35, "name": "Harem" },
                { "mal_id": 36, "name": "Slice Of Life" },
                { "mal_id": 37, "name": "Supernatural" },
                { "mal_id": 38, "name": "Military" },
                { "mal_id": 39, "name": "Police" },
                { "mal_id": 40, "name": "Psychological" },
                { "mal_id": 41, "name": "Thriller" },
                { "mal_id": 42, "name": "Seinen" },
                { "mal_id": 43, "name": "Josei" }
            ]
        };
    }
    static get() {
        if (Genere.instance == undefined || Genere.instance == null) {
            Genere.instance = new Genere;
        }
        return Genere.instance;
    }
    genere_list() {
        View_1.View.get().render("anime_list.njk", this.generes);
    }
    genere_anime(callback_data) {
        return {
            "anime": callback_data["json_data"]["anime"],
            "generes": Genere.get().generes["generes"],
            "genere_id": callback_data["genere_id"]
        };
    }
    display_genere_anime(genere_id) {
        const url = "https://api.jikan.moe/v3/genre/anime/";
        anime_list_1.Anime_list.get().show_anime_list(url, genere_id, "GET", [this.genere_anime], "anime_list.njk", { "genere_id": genere_id });
    }
    show_genere_anime_info(anime_id, genere_id) {
        anime_1.Anime_info.get().show_anime_info(anime_id, "GET", "", "anime_info.njk", { "data": { "genere": genere_id } });
    }
}
exports.Genere = Genere;
