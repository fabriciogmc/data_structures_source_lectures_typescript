/* Exemplificando equivalência de algoritmos
**
** Autor: Fabrício G. M. de Carvalho, DSc.
*/

/* Equivalência para execução condicional */ 

let x: number = 10;
if (x ==1)
    console.log("x é igual a 1");
else if (x==2)
        console.log("x é igual a 2");
     else
        console.log("x possui outro valor");

switch (x) {
    case 1:
        console.log("x é igual a 1"); break;
    case 2:
        console.log("x é igual a 2"); break;
    default:
        console.log("x possui outro valor");
}


/* Equivalência bloco/função */


let a,b,c,d,e: number;
a = 1;
b = 2;
c = a + b + b*a;
d = c + b + c*b;
e = d + c + d*c;
console.log("Resultado com declarações 'soltas'")
console.log(c);
console.log(d);
console.log(e);

function soma_prod(x: number, y:number):number{
    return x + y + x*y;
}
c = soma_prod(a,b);
d = soma_prod(c,b);
e = soma_prod(d,c);
console.log("Resultado usando função");
console.log(c);
console.log(d);
console.log(e);

