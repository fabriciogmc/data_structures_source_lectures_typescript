import {Selection} from "./selection_sort"

let selection:Selection<number> = new Selection<number>();
let unordered_array:number[] = [7, 6, 5, 4, 3, 2, 1];

selection.sort_view(unordered_array);