/* Basic sorting algorithms implemented in TS
**
** Author: Fabrício G. M. de Carvalho, DSc
*/


class Sort<T>{

    bubble_naive(v:T[]){
        for(let i=0; i<v.length; ++i){
            for(let j=0; j<(v.length-1); ++j){
                if(v[j] > v[j+1]){
                    let aux = v[j];
                    v[j] = v[j+1];
                    v[j+1] = aux;
                }                 
            }
        }
    }

    bubble_naive_view(v:T[]){
        let array_pass_count = 0;
        for(let i=0; i<v.length; ++i){
            for(let j=0; j<(v.length-1); ++j){
                if(v[j] > v[j+1]){
                    let aux = v[j];
                    v[j] = v[j+1];
                    v[j+1] = aux;
                }                 
            }
            ++ array_pass_count;
            console.log("Array after pass # ", array_pass_count,": ", ...v);
        }
    }

    
    bubble(v: T[]){
        let is_ordered = false;
        let last_swap_position = v.length-1;
        while(! is_ordered){
            is_ordered = true;
            let j = 0;
            while(j < last_swap_position){
                if (v[j] > v[j+1]){
                    let aux = v[j];
                    v[j] = v[j+1];
                    v[j+1] = aux;
                    is_ordered = false;
                }
                ++j
            } 
            last_swap_position -=1;      
        }
    }

    bubble_view(v: T[]){
        let is_ordered = false;
        let last_swap_position = v.length-1;
        let array_pass_count = 0;
        console.log("Original array: ", ...v);
        while(! is_ordered){
            is_ordered = true;
            let j = 0;
            while(j < last_swap_position){
                if (v[j] > v[j+1]){
                    let aux = v[j];
                    v[j] = v[j+1];
                    v[j+1] = aux;
                    is_ordered = false;
                }
                ++j
            } 
            last_swap_position -=1;
            ++ array_pass_count;
            console.log("Array after pass # ", array_pass_count,": ", ...v);
            console.log("Last swap position: ", last_swap_position);
        }
    }

    bubble_opt(v:T[]){
        let last_arr_position = v.length - 1;
        let last_swap_position = last_arr_position - 1;
        let swap_pos = 0;
        while(swap_pos >=0){      
            swap_pos = -1;   
            let j = 0;      
            while(j<= last_swap_position ){
                if( v[j] > v[j+1]){
                    let aux = v[j];
                    v[j] = v[j+1];
                    v[j+1] = aux;                
                    swap_pos = j;
                }
                ++ j;
            }
            last_swap_position = swap_pos;
        }

    }

    bubble_opt_view(v:T[]){
        let last_arr_position = v.length - 1;
        let last_swap_position = last_arr_position - 1;
        let swap_pos = 0;
        let array_pass_count = 0;
        console.log("Original array: ", ...v);
        while(swap_pos >=0){      
            swap_pos = -1;   
            let j = 0;  
            ++ array_pass_count;      
            while(j<= last_swap_position ){
                if( v[j] > v[j+1]){
                    let aux = v[j];
                    v[j] = v[j+1];
                    v[j+1] = aux;                
                    swap_pos = j;
                }
                ++ j;
            }
            last_swap_position = swap_pos;
            console.log("Array after pass # ", array_pass_count,": ", ...v);
            console.log("Last swap position: ", swap_pos);
        }

    }
}

export{
    Sort
}