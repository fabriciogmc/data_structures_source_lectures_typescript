/* Measuring array operations performances 
** Author: Fabrício Galende M. de Carvalho
**
*/

/*Insertion at the end versus insertion at the beginning */

let array_1 = [];
let t_i = (Date.now() / 1000) ;
for(i=1; i <= 200000; ++ i){
    array_1.push(i);
}
let t_f = (Date.now() / 1000) ;
console.log(`Elapsed time after 200000 insertions at the end: ${(t_f-t_i)} `);

let array_2 = [];
t_i = (Date.now() / 1000) ;
for(i=1; i <= 200000; ++ i){
    array_2.splice(0,0,i);
}
t_f = (Date.now() / 1000) ;
console.log(`Elapsed time after 200000 insertions at the beginning: ${(t_f-t_i)} `);


/* Removal at the end versus removal at the beginning */
t_i = Date.now()/1000;
while(array_1.length > 0)
    array_1.pop();
t_f = Date.now()/1000;
console.log(`Elapsed time after 200000 removals at the end: ${t_f-t_i}`);

t_i = Date.now()/1000;
while(array_2.length > 0)
    array_2.splice(0,1);
t_f = Date.now()/1000;
console.log(`Elapsed time after 200000 removals at the beginning: ${t_f-t_i}`);