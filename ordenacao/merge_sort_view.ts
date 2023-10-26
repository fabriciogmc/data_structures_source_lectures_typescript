
import {Merge} from './merge_sort'

let merge_sort = new Merge<number>();
let my_array:number[] = [7, 6, 5, 4, 3, 2, 1];

console.log(...merge_sort.interleave([2,4,6],[1, 3, 5, 7]));
console.log(...merge_sort.sort_view(my_array));

