/*
** Trivial and Boyer-Moore string matching algorithms usage
**
** Author: Fabrício Galende M. de Carvalho, DSc.
**
*/

import {StringSearch} from "./string_search"

let str_search = new StringSearch();

let pattern_1 = "fabricio";
let pattern_2 = "são";
let pattern_3 = "bra"
let text = "fabricio e fabricio são xaras"
//pos:      0          11

console.log(`Occurrence indices for ${pattern_1}: `, str_search.trivial(pattern_1,text));
console.log(`Occurrence indices for ${pattern_2}: `, str_search.trivial(pattern_2,text));
console.log(`Occurrence indices for ${pattern_3}: `, str_search.trivial(pattern_3,text));

console.log(str_search.build_char_map("fabricio"));
console.log(`Occurrence indices for ${pattern_1}: `, str_search.boyer_moore(pattern_1,text));
