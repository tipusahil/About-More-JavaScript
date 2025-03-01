/* 
1.
*/

function one() {
    console.log('a ekdm 1st ta');
    two()
    console.log('one theke aa')
}

function two() {
    console.log('b from two theke');
    tree()
console.log('bb two theke ')
}

function tree() {
    console.log('d from tree theke');
    console.log('ddd from tree theke');
  

}
// one()


// event loop example 2:
function x(){
    console.log(' x1')
    y()
    console.log(' x2')
}

function y(){
    console.log(' y1')
    z()
    console.log(' y2')
}

function z(){
    console.log(' z1')
    console.log(' z2')
}




// 
fetch('https://jsonplaceholder.typicode.com/todos/1')
.then(res => res.json())
.then(json => console.log(json));


/* (fetch) ekane waiting (queue) er modde pore gece, ortat tar data jotokkonna server theke dicce totokkon take wait korte hoise, jar karone (one,x function) er age thakar porew sobar sesh e (fetch) er output dekaise
 ekane (one() function & x() function call howar agei (fetch) promise lika hoise) taw seta sobar pore load hoise ,karon fetch er late hocce bole (one,x function) wait koreni ba js wait koraini , ogulo jar deri hocce sei late e asbe ,sei hisebe, js age one,x funtion e run korai dise, & fetch age call/thakar porew sobar sesh e output e deka jacce., jodio ba (fetch) age chilo taw. */


one()
x()