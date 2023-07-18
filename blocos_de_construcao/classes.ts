/* Definindo classes 
**
** Autor: Fabrício G. M. de Carvalho
*/

class Cachorro{
    raca: string;
    constructor(raca: string){
        this.raca = raca;
    }
    latir(): string{        
        return "au au au";
    }
}

export { Cachorro}