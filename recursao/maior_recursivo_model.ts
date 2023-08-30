/* Algoritmo de determinação do maior elemento do array
** utilizando recursão
** Autor: Fabrício Galende Marques de Carvalho
** Obs: retirar o console.log (fins didáticos) para usar
** a função.
*/

function maior_r(a: number[]): number{
    if (a.length == 1){
        console.log("Caso base atingido!")
        return a[0];
    } else {
        console.log("Chamada recursiva!");
        console.log("Invocando maior_r( ", a.slice(1, a.length), ");");      
        let maior_restante = maior_r(a.slice(1, a.length))
        if (a[0] >= maior_restante){
            return a[0];
        }
        else{ 
            return maior_restante;
        }
    }
}

export{
    maior_r
}