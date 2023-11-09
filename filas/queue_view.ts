/* A simple queue usage example.
**
** Author: Fabrício Galende M. de Carvalho, DSc.
*/

import { MyNode, Queue } from "./queue";

let my_queue = new Queue<String>();
let people: string[] = ['fabricio', 'fabiola', 'thales', 'ronaldo'];
let my_node: MyNode<String>;
console.log("Filling the queue: ");
for(let i=0; i < people.length; ++i){
    console.log(people[i]);
    my_node = new MyNode<string>(people[i]);
    my_queue.add(my_node);
}
console.log("Current queue: ");
my_queue.print();
console.log("Queue length: ", my_queue.length.toString());
console.log("\n \n");
while(! my_queue.isEmpty()){
    my_node = my_queue.remove();
    console.log("Removing element from queue: ", my_node.value);
    console.log("Curent queue: ");
    my_queue.print();
}

console.log("\n \n Filling the queue: ");
let people_2: string[] = ['paulo', 'júlio', 'beatriz', 'lea'];
for(let i=0; i < people_2.length; ++i){
    console.log(people_2[i]);
    my_node = new MyNode<string>(people_2[i]);
    my_queue.add(my_node);
}
console.log("Current queue: ");
my_queue.print();
console.log("Queue length: ", my_queue.length.toString());



