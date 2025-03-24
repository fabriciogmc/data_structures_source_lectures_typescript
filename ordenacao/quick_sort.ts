class Quick<T>{
        
    sort(v:T[]): T[]{
        if(v.length<2){
            return v;
        }
        let pivot = v[0];
        let left_array: T[] = new Array<T>();
        let right_array: T[] = new Array<T>();
        for(let i = 1; i <v.length; ++i){
            if (v[i]< pivot)
                left_array.push(v[i]);
            if (v[i]>=pivot)
                right_array.push(v[i]);
        }        
        return Array.prototype.concat(this.sort(left_array), 
                                      pivot, 
                                      this.sort(right_array));
        
    } 

    sort_b(v:T[]): T[]{
        if (v.length < 2){
            return v;
        } else {
            let pivot_position:number = 0;
            let comp_position:number = (v.length-1);
            while (pivot_position != comp_position){
                if (pivot_position < comp_position){ //pivot at left
                    if(v[pivot_position] < v[comp_position]){
                        comp_position -=1;
                    } else {
                        let swap_v = v[pivot_position];
                        v[pivot_position] = v[comp_position];
                        v[comp_position] = swap_v;
                        let i = pivot_position;
                        pivot_position = comp_position;
                        comp_position = i + 1;
                    }
                } else { //pivot at right
                    if( v[pivot_position] > v[comp_position]){
                        comp_position +=1;
                    } else {
                        let swap_v = v[pivot_position];
                        v[pivot_position] = v[comp_position];
                        v[comp_position] = swap_v;
                        let i = pivot_position;
                        pivot_position = comp_position;
                        comp_position = i - 1;
                    }
                }
            }

            return Array.prototype.concat( this.sort_b(v.slice(0, pivot_position)),
                                                 v[pivot_position],
                                          this.sort_b(v.slice(pivot_position+1, v.length)));
        }

    }


    sort_view(v:T[]): T[]{
        if(v.length<2){
            return v;
        }
        let pivot = v[0];
        let left_array: T[] = new Array<T>();
        let right_array: T[] = new Array<T>();
        for(let i = 1; i <v.length; ++i){
            if (v[i]< pivot)
                left_array.push(v[i]);
            if (v[i]>=pivot)
                right_array.push(v[i]);
        }   
        console.log("left_array: [", ...left_array, "], pivot: ", pivot,
                    " right_array: [", ...right_array, "]");         
        return Array.prototype.concat(this.sort_view(left_array), 
                                      pivot, 
                                      this.sort_view(right_array));
        
    } 



}

export {
    Quick
}