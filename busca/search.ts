/* Basic sequential and binary search
** algorithms implemented in TypeScript
**
** Author: Fabrício Galende M. de Carvalho, DSc
*/

class Search<T>{
    sequential(e:T, v:T[]):number{
        let pos: number = -1;
        for(let i:number =0; i< v.length; ++i){
            if(e == v[i])
                return i;
        }
        return pos;
    }

    sequential_w(e:T, v:T[]):number{
        let pos:number = 0;
        while(pos <v.length && v[pos]!= e)
            ++pos;
        if(pos == v.length)
            return -1;
        else 
            return pos;        
    }

    /* sequential with sentinel */
    sequential_ws(e:T, v:T[]):number{
        let pos:number = 0;
        v.push(e);
        while(v[pos]!= e)
            ++pos;
        if(pos == (v.length-1)){
            v.pop();
            return -1;
        } else{
            v.pop();
            return pos;
        }                     
    }
        
    binary(e:T, v:T[]):number{
        let start = 0;
        let end = v.length-1;
        let middle = Math.floor((start + end)/2);        
        while( start <= end ){
            //console.log("middle: ", middle);
            if (v[middle] == e){
                return middle
            } else if(v[middle]>e){
                        end = middle-1;
                   } else {
                        start = middle+1;
                   }
            middle = Math.floor((start+end)/2);
        }
        return -1;
    }

    binary_r(e:T, v:T[], start:number, end:number):number{ 
        let middle = Math.floor((start+end)/2);   
        if (start > end){    
            return -1;
        } else if (v[middle] >e ){
                return this.binary_r(e, v, start, middle-1);
        } else if (v[middle] <e ){                           
                return this.binary_r(e,v, middle+1, end);
        } else {
                return middle;
        }
    }



}

export{
    Search
}