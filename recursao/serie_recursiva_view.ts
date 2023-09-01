/*
** Autor: Fabríco Galende M. de Carvalho, DSc 
*/
import { SerieNumericaFinita } from "./serie_recursiva_model";

let sn = new SerieNumericaFinita(1,1);
let n = 1000;
let termo:number = sn.termo_sequencia(n);
let serie_finita:number = sn.serie(n);
let sep:string = "\n****************\n";
console.log(sep);
console.log(`${n} Termo da sequencia: ${termo}`);
console.log(`Valor da série finita com ${n} termos ${serie_finita}`);
console.log(sep);
console.log("Avaliando o desempenho: ")
let instante_inicial:number = Date.now();
for(let i:number=1; i<1000000; ++i){
    //sn.termo_sequencia(n);
    sn.termo_sequencia_c(n);
}
let instante_final:number = Date.now();
console.log("Tempo decorrido: ", (instante_final-instante_inicial)/1000);
