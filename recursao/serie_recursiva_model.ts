/* Exemplo de série aritmética recursiva 
** Uma série é caracterizada por uma soma 
** de termos em uma sequência.
**
** Autor: Fabrício G. M. De carvalho, DSc*/


class SerieNumericaFinita{
    a0:number;
    dif: number;
    cache: any;
    constructor(a0:number, dif:number){
        this.a0 = a0;
        this.dif = dif;
        this.cache = {};
    }
    termo_sequencia(n:number):number{
            if (n==1)
                return this.a0;
            else
                return this.dif + this.termo_sequencia(n-1);
    }
    termo_sequencia_c(n:number):number{
        if(this.cache[n]!= undefined){
            return this.cache[n];
        } else {
            if (n==1){
                this.cache[n] = this.a0;
                return this.a0;
            }
            else{
                this.cache[n] = this.dif + this.termo_sequencia_c(n-1); 
                return this.cache[n];
            }              

        }
        
    }

    serie(n:number):number{
        if (n ==1){
            return this.a0;
        } else {
            return this.termo_sequencia(n) + this.serie(n-1);
        }
    }
    serie_c(n:number):number{
        if (n ==1){
            return this.a0;
        } else {
            return this.termo_sequencia_c(n) + this.serie(n-1);
        }
    }


}

export {
    SerieNumericaFinita
}

