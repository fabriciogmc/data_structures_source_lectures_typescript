
import {Sort} from './bubble_sort'

let sort = new Sort<number>();

let my_array:number[] = [1, 2, 3, 4, 5, 10, 9, 8, 7, 6];
let my_array_1:number[] = [1, 2, 3, 4, 5, 10, 9, 8, 7, 6];
let my_array_2:number[] = [1, 2, 3, 4, 5, 10, 9, 8, 7, 6];

console.log("Naive bubble sort: ");
sort.bubble_naive_view(my_array);
console.log("\n\n");
console.log("Bubble sort:");
sort.bubble_view(my_array_1);
console.log("\n\n");
console.log("Bubble sort optimized: ");
sort.bubble_opt_view(my_array_2);
