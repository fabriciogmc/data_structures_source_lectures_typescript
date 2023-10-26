/* Basic insertion sort algorithm implemented in TS
**
** Author: Fabrício G. M. de Carvalho, DSc
*/


class Insertion<T>{
    sort(v:T[]){
        for(let i=0; i<v.length; ++i){
            let pos = i;
            let element = v[pos];
            while(pos>0 && element < v[pos-1]){
                v[pos] = v[pos-1]
                --pos;
            }            
            v[pos] = element;            
        }
    }
    sort_view(v:T[]){
        for(let i=0; i<v.length; ++i){
            let pos = i;
            let element = v[pos];
            //console.log("Current position: #", pos);
            while(pos>0 && element < v[pos-1]){
                v[pos] = v[pos-1]
                //console.log("Element ", element," moved to position  ", pos-1);
                --pos;
            }            
            v[pos] = element;
            console.log("Array after #", i+1," iteration:", ...v);            
        }
    }

}    

export{
    Insertion
}