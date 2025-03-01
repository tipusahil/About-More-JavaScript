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


fetch('https://jsonplaceholder.typicode.com/todos/1')
.then(res = res.json())
.then(data = console.log(data))
.catch(error => console.log(error));

one()
x()