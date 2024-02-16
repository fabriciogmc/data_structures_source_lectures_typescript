/* Basic node used to exemplify dynamic memory allocation concepts
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

export{
    MyNode
}