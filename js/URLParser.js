"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.URLParser = void 0;
class URLParser {
    constructor(hash) {
        this.hash = hash;
    }
    extract() {
        const no_hash = this.hash.substring(1);
        if (no_hash.length == 0) {
            return [];
        }
        return no_hash.split("/");
    }
    parse() {
        const split_hash = this.extract();
        let controller = "home";
        let method = "default";
        let args = [];
        if (split_hash.length == 1) {
            controller = split_hash[0];
        }
        if (split_hash.length == 2) {
            controller = split_hash[0];
            method = split_hash[1];
        }
        if (split_hash.length > 2) {
            controller = split_hash.shift();
            method = split_hash.shift();
            args = split_hash;
        }
        return {
            "controller": controller,
            "method": method,
            "args": args
        };
    }
}
exports.URLParser = URLParser;
