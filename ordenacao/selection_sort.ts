/* Basic selection sort algorithm class */

class Selection<T>{
    sort(v:T[]){
        let pass: number = 0;
        while(pass < v.length){
            let current_smallest = v[pass]
            let current_smallest_pos = pass
            for(let i=pass+1; i< v.length; ++i){
                if (v[i] < v[current_smallest_pos]){
                    current_smallest_pos = i;
                }
            }
            v[pass] = v[current_smallest_pos];
            v[current_smallest_pos] = current_smallest;
            pass +=1;
        }
    }
    sort_view(v:T[]){
        let pass: number = 0;
        while(pass < v.length){
            console.log("pass: #", pass);
            console.log("Actual v: [", ...v, "]");
            
            let current_smallest = v[pass]
            let current_smallest_pos = pass
            for(let i=pass+1; i< v.length; ++i){
                if (v[i] < v[current_smallest_pos]){
                    current_smallest_pos = i;
                }
            }
            console.log("Swap positions: ", pass, "and ", current_smallest_pos);
            v[pass] = v[current_smallest_pos];
            v[current_smallest_pos] = current_smallest;
            pass += 1;
        }
    }

    
}

export{
    Selection
}