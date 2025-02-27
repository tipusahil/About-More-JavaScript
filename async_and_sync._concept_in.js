/* 

1.normal function secuentially cole, kintu (fetch function & setTimeOut,setinterval secuentially colena.)
// function secuentially cole (ortat jkn call line dhroe 5jon thakle sei function joto number serial e ase sei serail onujai se jabe, but 
// 1.(fetch) & 
// 2.(settimeout) & 
// 3.(settimeinterval) ei 3ta serial ways colena, tader nijeder icce moto cole) , ortat serially cole ,
*/

console.log(1);
console.log(2);
// console.log(3);
func_secuenctiallyCole()// function secuentially cole (ortat jkn call line dhroe 5jon thakle sei function joto number serial e ase sei serail onujai se jabe, but 
// 1.(fetch) & 
// 2.(settimeout) & 
// 3.(settimeinterval) ei 3ta serial ways colena, tader nijeder icce moto cole) , ortat serially cole ,
console.log(4);

setTimeout(() =>{ console.log('(setTimeout) nijer icce moto 4 second pore output dekabe,') } , 4000);
setTimeout(() =>{ console.log('(setTimeinterval) nijer icce moto take jei time set kore dewa hoise sei time por por bar bar colte takbe.') } , 2000);

console.log(5);

function func_secuenctiallyCole()  {
    console.log(3)

}