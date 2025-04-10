/* Basic Dijkstra algorithm implementation */

class Graph{

    graph: any = {};
    parents: any = {};
    costs: any = {}

    constructor(graph: any){
        this.graph = graph;
    }

    private build_cost_table(){
        for (let vertex in this.graph ){
            this.costs[vertex] = Number.POSITIVE_INFINITY;
        }
    }
    
    private build_parent_table(){
        for (let vertex in this.graph ){
            this.parents[vertex] = {}
        }
    }
    
    select_minimum_cost(searched: string[]){
        let minimum_cost: number = Number.POSITIVE_INFINITY;
        let vertex:string = '';
        for(let v in this.costs){
            if (this.costs[v] < minimum_cost && !searched.includes(v)){
                vertex = v;
                minimum_cost = this.costs[v];
            }
        }
        return vertex;
    }
    
    dijkstra_searh(start:string, destination:string){
        this.build_parent_table();
        this.build_cost_table();
        let searched_vertices:string []= [];
        this.costs[start] = 0;
        let current_node = this.select_minimum_cost(searched_vertices);
        while (current_node!=''){
            for(let child in this.graph[current_node]){
                if(this.costs[child] > this.costs[current_node]+this.graph[current_node][child]) {
                    this.costs[child] = this.costs[current_node] + this.graph[current_node][child]
                    this.parents[child] = current_node;
                }
            }
            searched_vertices.push(current_node);
            current_node = this.select_minimum_cost(searched_vertices);
        }
        // now we make the entire path
        let p: string = destination;
        let path: string [] = [];
        while (Object.keys(this.parents[p]).length != 0){
            path.push(p)
            p = this.parents[p];
        }
        path.push(p);
        return path;
        
    }

}

export {Graph}