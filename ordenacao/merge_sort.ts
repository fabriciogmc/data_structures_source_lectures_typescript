/* Basic merge sort algorithm implemented in TypeScript.
**
** Author: Fabrício G. M. de Carvalho, DSc
*/


class Merge<T>{
    
    interleave_view(v1:T[], v2:T[]):T[]{
        let v_i = new Array<T>();
        let p1:number = 0;
        let p2:number = 0;    
        while(p1<v1.length && p2 < v2.length){
            if( v1[p1] < v2[p2]){
                v_i.push(v1[p1]);
                ++ p1
            } else {
                v_i.push(v2[p2]);
                ++ p2;
            }
        }
        v_i = Array.prototype.concat(v_i, v1.slice(p1,v1.length));
        v_i = Array.prototype.concat(v_i, v2.slice(p2,v2.length));
        console.log("Interleaved array: ", ...v_i)
        return v_i;
    }

    sort_view(v:T[]): T[]{
        if(v.length<2){
            console.log("Base case reached.");
            return v;
        }
        let middle = Math.round(v.length/2)
        console.log("middle index: ", middle);
        console.log("Subarray 1: ", v.slice(0,middle) )
        console.log("Subarray 2: ", v.slice(middle, v.length))
        let v_l =this.sort_view(v.slice(0,middle));
        let v_r = this.sort_view(v.slice(middle, v.length));        
        return this.interleave_view(v_l, v_r);
    } 

    interleave(v1:T[], v2:T[]):T[]{
        let v_i = new Array<T>();
        let p1:number = 0;
        let p2:number = 0;    
        while(p1<v1.length && p2 < v2.length){
            if( v1[p1] < v2[p2]){
                v_i.push(v1[p1]);
                ++ p1
            } else {
                v_i.push(v2[p2]);
                ++ p2;
            }
        }
        v_i = Array.prototype.concat(v_i, v1.slice(p1,v1.length));
        v_i = Array.prototype.concat(v_i, v2.slice(p2,v2.length));
        return v_i;
    }

    sort(v:T[]): T[]{
        if(v.length<2){
            return v;
        }
        let meio = Math.round(v.length/2)
        let v_l =this.sort(v.slice(0,meio));
        let v_r = this.sort(v.slice(meio, v.length));
        return this.interleave(v_l, v_r);
    }    
}   
export{
    Merge
}