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

    /*auxiliary function that is used to determine
    ** the jump step */
    bad_char(c: string):any{
        let char_map:any = {}
        for(let i:number=0; i<c.length; ++i){
            char_map[c.charAt(i)] = i;
        }
        return char_map;
    }

    boyer_moore(pattern: string, text: string):number[]{
        let diff = text.length - pattern.length;
        let char_map:any = this.bad_char(pattern);
        let shifts:number[] = []
        let pos = 0;
        while (pos <= diff){
            let matched:boolean = true;
            let i = pattern.length-1;
            console.log("Position shift:....", pos);
            while(i>=0){
                if(pattern.charAt(i)!= text.charAt(i+pos)){ //char mismatch
                    matched = false;
                    break;
                }
                --i;
            }
            if(matched){
                shifts.push(pos)
                ++pos;
            } else {
                if(char_map[text.charAt(i+pos)]!= undefined){
                    (i-char_map[text.charAt(i+pos)]>1)?
                        pos= pos+(i-char_map[text.charAt(i+pos)]):
                        ++pos;
                } else 
                    pos = pos+pattern.length;                 
            }            
        }
        return shifts;        
    } 
}

export{
    StringSearch
}