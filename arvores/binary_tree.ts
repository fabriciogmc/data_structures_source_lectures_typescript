/* A simple binary tree implementation that adds child_nodes
** to the left if it is smaller than the current node, otherwise
** it adds to the right.
**
** Author: Fabrício Galende M. de Carvalho, DSc
*/

class BinaryTree<T extends {}>{
    value:T;
    left_child: BinaryTree<T>;
    right_child: BinaryTree<T>;
    constructor(){
        this.left_child = {} as BinaryTree<T>;
        this.right_child = {} as BinaryTree<T>;
    }

    add_child(v: T){
        if (this.value == undefined){ //tree is empty      
            this.value = v;
            return;   
        } else if (this.value > v){ // add to left
            if(Object.keys(this.left_child).length == 0){ //left node is empty
                this.left_child = new BinaryTree();
            } 
                this.left_child.add_child(v);            
        } else { // add to right
            if(Object.keys(this.right_child).length == 0){ //right node is empty
                this.right_child = new BinaryTree();
            } 
                this.right_child.add_child(v);  
        } 
        return;     
    }

    left_root_right_traversal(nodes: any[]):any{
        if(this.value == undefined){
            return;
        } else {
            if(this.left_child.value != undefined){
                this.left_child.left_root_right_traversal(nodes);
            }            
            nodes.push(this.value);
            if(this.right_child.value != undefined){
                this.right_child.left_root_right_traversal(nodes);
            }               
        }        
    }
}

 

export{
   BinaryTree
}