/* Graph breadth-first search
**
** Fabrício Galende M. de Carvalho, D.Sc.
**
*/


let graph: any = {};

graph['a'] = [['b',1], ['c', 2], ['d',3]];
graph['b'] = [ ['e',8] , ['f',15]];
graph['d'] = [ ['g',30] ];
graph['c'] = [ ['f',3] ];


console.log("Original graph: ", graph);
console.log("------");

function breadth_first_search(g:any,start:string,destination:string):any{
    let searched: string [] = [];
    //let found: any [] = [];
    let search_list: any [] = [[start, 0, []]]; //node, cost, path
    while (search_list.length != 0){
        console.log("Searched list: [", ...searched, "]");
        console.log("Current search list: [", ...search_list,  "]");
        //console.log("Found list: [", ...found,  "]");
        let actual_node = search_list.shift();
        console.log("Actual node: ", actual_node);
        console.log("------");
        if (!(searched.includes(actual_node[0]))){
            searched.push(actual_node[0])
            if (actual_node[0] == destination){
                return actual_node
            } else {
                if (g[actual_node[0]]!= undefined){ //node has children
                    for(let child of g[actual_node[0]]){
                        search_list.push( [child[0], child[1] + actual_node[1] ,
                                           Array.prototype.concat (actual_node[2], [actual_node[0]]) ])
                    }
                }
            }
        }

    }
    return [];

}

let found = breadth_first_search(graph,'a','f');
console.log(found);

