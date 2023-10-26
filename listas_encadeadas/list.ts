/* Basic generic list implementation in TypeScript
** 
** Author: Fabrício Galende M. de Carvalho DSc
*/


class MyNode<T>{
    value: T;
    next: MyNode<T>;
    constructor(v:T){
        this.value = v;
        this.next = {} as MyNode<T>;
    }
}

class List<T>{
    length: number;
    start: MyNode<T>;
    constructor(){
        this.start = {} as MyNode<T>;
        this.length = 0;
    }

    add(node:MyNode<T>){
        node.next = this.start;
        this.start = node;
        ++ this.length;
    }

    print(){
        let current_node = this.start;
        while(Object.keys(current_node).length != 0){ //Object is not empty
            console.log("Value: ", current_node.value);
            current_node = current_node.next;
        }
    }
}

export{
    MyNode, List
}