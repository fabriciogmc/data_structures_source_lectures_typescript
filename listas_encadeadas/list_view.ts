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
my_list.print();
console.log("List length: ", my_list.length);

