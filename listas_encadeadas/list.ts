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

    remove(v:T):boolean{
        let current_node = this.start;
        let previous_node = {} as MyNode<T>;
        let found = false;
        while( Object.keys(current_node).length!= 0 && !found){ 
            if( current_node.value == v){
                found = true;
                if(Object.keys(previous_node).length!= 0){
                    previous_node.next = current_node.next;                   
                } else {
                    this.start = current_node.next;
                }
                --this.length;
            } else {
                previous_node = current_node;
                current_node = current_node.next;
            }            
        }
        return found;
    }

    print(){
        let current_node = this.start;
        process.stdout.write("[");
        while(Object.keys(current_node).length != 0){ //Object is not empty
            process.stdout.write(String(current_node.value)+ ", ");
            current_node = current_node.next;
        }
        process.stdout.write("]");
        process.stdout.write("\n")
    }
}

export{
    MyNode, List
}