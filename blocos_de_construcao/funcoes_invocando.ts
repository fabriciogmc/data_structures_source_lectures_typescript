/* Invocando uma função definida em outro módulo
** 
** Autor: Fabrício G. M. de Carvalho
*/

import {somar} from "./funcoes"

var x: number = 1;
var y: number = 2;
var z: number;
z = somar(x,y);
console.log("z vale: ", z);