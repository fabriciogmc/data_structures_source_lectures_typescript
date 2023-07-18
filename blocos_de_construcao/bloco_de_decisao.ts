/* Blocos de decisão/execução condicional
** Autor: Fabrício Galende Marques de Carvalho
*/

/* bloco if-else */
let a: number;
let b: number = 1;
if (b > 0 ){
    a = 1;
} else {
    a = 0;
}
console.log(a);

/* bloco switch-case */
let c: number = 10;
switch (c) {
    case 10:
        console.log("c é igual a 10");
        break;
    case 11:
        console.log("c é igual a 11");
        break;
    default:
        console.log("c possui outro valor");
}


/* Usado para definir esse arquivo como um módulo
cujo escopo das variáveis é restrito a ele */

export {}