import {Graph } from './dijkstra_search'

let graph_data: any = {};
graph_data['a'] = {b:5, c:2}
graph_data['b'] = {d:4, e:2}
graph_data['c'] = {b:8, e:7}
graph_data['d'] = {f:3, e:6}
graph_data['e'] = {f:1}
graph_data['f'] = {}

let my_graph = new Graph(graph_data);
let path = my_graph.dijkstra_searh('a','f');
console.log(path);
console.log(my_graph.costs);
console.log(my_graph.parents);


