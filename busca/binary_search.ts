/* Basic binary search implementations
**
** Author: Fabrício G. M. de Carvalho, Ph.D.
*/

/* this functions returns an index greater than or equal to zero
whenever the element e is found in the vector v
*/
function recursive_binary_search_f(e, v){
    let array_length = v.length;
    middle = Math.floor((array_length-1)/2);   
    if (middle < 0){    
        return -1;
    } else if (e > v[middle]){
            v_upper = v.slice(middle+1, array_length);              
            return recursive_binary_search_f(e, v_upper);
    } else if (e < v[middle]){
            v_lower = v.slice(0, middle);            
            return recursive_binary_search_f(e,v_lower);
    } else {
            return middle;
    }
}


/* This function returns an element index if it is found or
returns -1 otherwise.
*/
function recursive_binary_search(e, v, start, end){ 
    middle = Math.floor((start+end)/2);   
    if (start > end){    
        return -1;
    } else if (e > v[middle]){
            return recursive_binary_search(e, v, middle+1, end);
    } else if (e < v[middle]){                           
            return recursive_binary_search(e,v, start, middle-1);
    } else {
            return middle;
    }
}

v = [2, 4, 6, 8, 10, 12, 14, 16, 18];


console.log(recursive_binary_search_f(2,v));
console.log(recursive_binary_search_f(18,v));
console.log(recursive_binary_search_f(14,v));
console.log(recursive_binary_search_f(11,v));


console.log(recursive_binary_search(2,v,0,v.length-1));
console.log(recursive_binary_search(18,v,0, v.length-1));
console.log(recursive_binary_search(14,v, 0, v.length-1));
console.log(recursive_binary_search(11,v, 0, v.length-1));