/* A basic binary sort tree example
**
** Author: Fabrício Galende M. de Carvalho, DSc
*/

import { BinaryTree } from "./binary_tree";

let bt = new BinaryTree<number>();

let array: number[] = [-3, -4, 5, 8, 2, -15, - 100, 10, -3, -8, 0, 50, -1];

console.log(bt);

for(let i=0; i<array.length; ++i){ 
    bt.add_child(array[i]);   
}

console.log(bt);
let ordered_numbers: number[] = [];
bt.left_root_right_traversal(ordered_numbers);
console.log(ordered_numbers)

