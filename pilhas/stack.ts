/* Basic generic Stack implementation in TypeScript
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

class Stack<T>{
    length: number;
    top: MyNode<T>;
    constructor(){
        this.top = {} as MyNode<T>;
        this.length = 0;
    }

    is_empty(){
        return (this.length == 0);
    }

    push(node: MyNode<T>){
        node.next = this.top;
        this.top = node;
        ++ this.length;
    }

    pop():MyNode<T>{    
        let node = {} as MyNode<T>;
        if(! this.is_empty()){
            node = this.top;
            this.top = this.top.next;
            -- this.length;
        }
        return node;
    }

    print(){
        let current_node = this.top;
        console.log("vvvv Top ")
        while(Object.keys(current_node).length != 0){
            console.log(current_node.value);
            current_node = current_node.next;
        }
        console.log("^^^^ Base ");    
    }
}

export{
    MyNode, Stack
}