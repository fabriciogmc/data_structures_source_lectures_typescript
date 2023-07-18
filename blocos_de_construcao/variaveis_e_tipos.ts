/* Tipos básicos de dados utilizando anotações de tipo 
** Autor: Fabrício Galende M. de Carvalho. 
*/

/* número com anotação de tipo */
var numero_a: number;
numero_a = 10;
console.log(numero_a);
console.log(typeof(numero_a));
//numero_a = 'a'; //erro de checagem de tipo

/* número com tipo inferido */
var numero_b;
numero_b = 20;
console.log(numero_b);
console.log(typeof(numero_b));
/* Notar que para um tipo inferido não haverá
erro ao se tentar atribuir um outro tipo à variável */
numero_b = 'a';
console.log(numero_b);
console.log(typeof(numero_b));


/* Array de números */
var array_de_numeros: number [];
array_de_numeros = [];
array_de_numeros.push(1);
array_de_numeros.push(2);
console.log(array_de_numeros);

/* Array de tipos diversificados. */
var array_de_tipos_diversos;
array_de_tipos_diversos = [];
array_de_tipos_diversos.push(3);
array_de_tipos_diversos.push('a');
console.log(array_de_tipos_diversos);


/* Cadeias de caracteres */
var cadeia_caracteres: string;
cadeia_caracteres = 'abcd';
console.log(cadeia_caracteres);
console.log(typeof(cadeia_caracteres));


/* tipo lógico */
var logico: boolean;
logico = true;
console.log(logico);

/* definindo um novo tipo: */
type Cachorro = {
    raca: string;
    porte: string;
    pelagem: string;
}

var cachorro_1: Cachorro = {
    porte: "pequeno",
    pelagem: "longa",
    raca: "Shih-Tzu"
}
console.log(typeof(cachorro_1));
console.log(cachorro_1.raca);

/* Escopo de variáveis. Atentar para a diferença */
{
    var numero_global: number = 101;
    let numero_local: number = 202;
}
{
    console.log(numero_global);
    //console.log(numero_local);
}


