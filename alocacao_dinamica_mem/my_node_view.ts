/* A simple list usage example
**
** Author: Fabrício Galende M. de Carvalho, DSc.
*/

import { MyNode} from "./my_node";


let my_node = new MyNode<number>(10); /*mem alloc*/
let my_node_2 = new MyNode<number>(20); /*mem alloc*/
my_node.next = my_node_2; /*reference link */
my_node_2 = new MyNode<number>(30); /*mem alloc*/
my_node.next.next = my_node_2; /* reference link*/
console.log(my_node.value);
console.log(my_node.next.value);
console.log(my_node.next.next.value);
my_node_2 = {} as MyNode<number>;
console.log(my_node.value);
console.log(my_node.next.value);
console.log(my_node.next.next.value);
