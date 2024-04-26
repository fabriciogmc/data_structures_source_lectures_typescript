
import {Quick} from './quick_sort'

let quick_sort = new Quick<number>();
let my_array:number[] = [7, 6, 5, 4, 3, 2, 1];
let my_array_avg:number[] = [7,6, 5, 4, 8, 9, 10, 3, 2, 1, 0]
let ordered_array = quick_sort.sort(my_array);
console.log("Ordered array: ");
console.log(...ordered_array);

console.log("Original array: [", ... my_array_avg, "]");
console.log("Quick sort detailed view: ");
ordered_array = quick_sort.sort_view(my_array_avg);
console.log("Final ordered array: [", ...ordered_array ,"]")

