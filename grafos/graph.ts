/* A simple non directed graph implementation using adjacency matrix
**
** Author: Fabrício Galende M. de Carvalho, DSc
*/


class Graph{
    vertices: Set<string>;
    adj_matrix: number[][];
    vertice_2_index: any;
    index_2_vertice: any;
    

    constructor(vertices:string[]){
        
        this.adj_matrix = [];
        this.vertices = new Set<string>();

        this.index_2_vertice = {}
        this.vertice_2_index = {}

        for(let i=0; i < vertices.length; ++i){
            this.vertices.add(vertices[i]);
            this.adj_matrix.push([]);
            this.vertice_2_index[vertices[i]] = i;
            this.index_2_vertice[i] = vertices[i];            
            for(let j=0; j< vertices.length; ++ j){
                this.adj_matrix[i].push(0) 
            }
        }
    }
    get_connected_vertices(vertice: string):any{
        let connected_nodes:any = {};
        for(let i=0; i< this.vertices.size; ++i){
            if (this.adj_matrix[this.vertice_2_index[vertice]][i] != 0){
                connected_nodes[this.index_2_vertice[i]] = this.adj_matrix[this.vertice_2_index[vertice]][i];
                
            } 
        }
        return connected_nodes;
    }

    connect_vertices(v1:string, v2:string, edge: number){
        this.adj_matrix[this.vertice_2_index[v1]][this.vertice_2_index[v2]] = edge;
        this.adj_matrix[this.vertice_2_index[v2]][this.vertice_2_index[v1]] = edge;
    }

    disconnect_vertices(v1:string, v2: string){
        this.adj_matrix[this.vertice_2_index[v1]][this.vertice_2_index[v2]] = 0;
        this.adj_matrix[this.vertice_2_index[v2]][this.vertice_2_index[v1]] = 0;

    }

    get_edge(v1:string, v2: string){
        return this.adj_matrix[this.vertice_2_index[v1]][this.vertice_2_index[v2]];
    }

    print(){
        for(let i:number = 0; i<this.vertices.size; ++i){
            process.stdout.write("| \t");
            process.stdout.write(this.index_2_vertice[i]);            
        }
        process.stdout.write("\n");
        for(let i:number = 0; i<this.vertices.size; ++i){
            process.stdout.write(this.index_2_vertice[i]);
            process.stdout.write("\t");
            for(let j:number = 0; j<this.vertices.size; ++j){
                process.stdout.write(this.adj_matrix[i][j].toString());
                process.stdout.write("| \t");
            }
            process.stdout.write("\n");
        }


    }



}

export{
    Graph
}