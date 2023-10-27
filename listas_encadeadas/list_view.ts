/* A simple list usage example
**
** Author: Fabrício Galende M. de Carvalho, DSc.
*/

import { MyNode, List } from "./list";

let my_list = new List<Number>();
let my_node = new MyNode<number>(10);
my_list.add(my_node);
my_node = new MyNode<number>(20);
my_list.add(my_node);
my_node = new MyNode<number>(-10);
my_list.add(my_node);
my_node = new MyNode<number>(50);
my_list.add(my_node);
my_list.print();
console.log("List length: ", my_list.length);
console.log("Removing -10: ")
my_list.remove(-10);
my_list.print();
console.log("List length: ", my_list.length);
console.log("Removing 10:");
my_list.remove(10);
my_list.print();
console.log("List length: ", my_list.length);
console.log("Removing 50: ");
my_list.remove(50);
my_list.print();
console.log("List length: ", my_list.length);
console.log("Removing 20: ");
my_list.remove(20);
my_list.print();
console.log("List length: ", my_list.length);
console.log("Trying to remove from an empty list: ")
my_list.remove(30);
my_list.print();
console.log("List length: ", my_list.length);


