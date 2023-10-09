/* String matching algorithms. Sequential and
** Boyer-Moore
**
** Author: Fabrício Galende M. de Carvalho, DSc
*/

class StringSearch{
    trivial(pattern: string, text: string):number[]{
        let shifts: number[] = []
        let l_diff = text.length - pattern.length;
        for(let i=0; i<= l_diff; ++i){
            let matched:boolean = true;
            for(let j=0; j<pattern.length; ++j){
                if(pattern.charAt(j) != text.charAt(j+i)){
                    matched = false; 
                    break;
                }
            }
            if (matched)
            shifts.push(i);
        }      
        return shifts;   
    }

    /* auxiliary function used to create 
    ** pattern mapping that is used to determine
    ** the jump step */
    build_char_map(pattern: string):any{
        let char_map:any = {}
        for(let i:number=0; i<pattern.length; ++i){
            char_map[pattern.charAt(i)] = i;
        }
        return char_map;        
    }


    boyer_moore(pattern: string, text: string):number[]{
        let diff = text.length - pattern.length;
        let char_map:any = this.build_char_map(pattern);
        let shifts:number[] = []
        let shift:number = 0; //pattern displacement
        while ( shift <= diff){
            let matched:boolean = true;
            let i = pattern.length-1;
            console.log("Position shift:....", shift);
            while(i>=0){
                if(pattern.charAt(i)!= text.charAt(i+shift)){ //char mismatch
                    matched = false;
                    break;
                }
                --i;
            }
            if(matched){
                shifts.push(shift)
                ++shift;
            } else {
                if(char_map[text.charAt(i+shift)]!= undefined){
                    (i-char_map[text.charAt(i+shift)]>1)?
                        shift= shift+(i-char_map[text.charAt(i+shift)]):
                        ++shift;
                } else 
                    shift += (i+1);                 
            }            
        }
        return shifts;        
    } 
}

export{
    StringSearch
}