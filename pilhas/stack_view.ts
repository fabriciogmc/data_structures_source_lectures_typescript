/* A simple list usage example
**
** Author: Fabrício Galende M. de Carvalho, DSc.
*/

import { MyNode, Stack } from "./stack";

let my_stack = new Stack<String>();
console.log("Initial Stack: ")
my_stack.print;
let my_node = new MyNode<String>("A");
my_stack.push(my_node);
my_node = new MyNode<String>("B");
my_stack.push(my_node);
my_node = new MyNode<String>("C");
my_stack.push(my_node);
my_node = new MyNode<String>("D");
my_stack.push(my_node);
my_stack.print();
console.log("Stack after two successive removals: ")
console.log("Removed elements: ", my_stack.pop().value, ", ", my_stack.pop().value, ": ")
my_stack.print();
console.log("Stack after three successive removals: ")
console.log("Removed elements: ", my_stack.pop().value, ", ", my_stack.pop().value, ", ", 
            my_stack.pop()," : ");
my_stack.print();
console.log("Stack length: ", my_stack.length);