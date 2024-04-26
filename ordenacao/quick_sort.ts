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