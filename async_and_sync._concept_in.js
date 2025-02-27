/* 
#1. jei function gulo js er single threated niom follow kore serial ways  cole segulo k bola hoi (synchronous)(ortat serially single threaded niom ta jara follow kore).jmn: function, ba kuno funcitoncall kora hole ,kuno varialbe console kora hole egul oserial maintain kore  output dibe, kintu (asynchronous) jegulo ase segulo serial maintain kore output dibena.
#2. ar jegulo js er single threaded niom follow na kore nijder smy mot cole  segulo k bola hoi (asynchronous) ( ortat jegulo js er single threaded follow na kore nijeder moto kore cole) . jmn: (fetch),(settimeout),(setinterval), egulo (asynchronous ortat serial/single_threated follow korena,) & egulo serial maintain kroena, nijder icce moto age pore jkn tader modde set kore dewa smy hoi tkni output dibe, & (fetch) output dibe ,tkni jkn se (api) theke promise kora kuno data pabe tkn
1.normal function secuentially cole, kintu (fetch function & setTimeOut,setinterval secuentially colena.)
// function secuentially cole (ortat jkn call line dhroe 5jon thakle sei function joto number serial e ase sei serail onujai se jabe, but 
// 1.(fetch) & 
// 2.(settimeout) & 
// 3.(setInterval) ei 3ta serial ways colena, tader nijeder icce moto cole) , ortat serially cole ,
*/

console.log(1);// (synchronous/single_threated) niom follow kore serial wys output dibe.
console.log(2);
// console.log(3);

func_secuenctiallyCole()// function secuentially cole (ortat jkn call line dhroe 5jon thakle sei function joto number serial e ase sei serail onujai se jabe, but 
// 1.(fetch) & 
// 2.(settimeout) & 
// 3.(setInterval) ei 3ta serial ways colena, tader nijeder icce moto cole) , ortat serially cole ,
console.log(4);// (synchronous/single_threated) niom follow kore serial wys output dibe.

setTimeout(() =>{ console.log('(setTimeout) nijer icce moto 4 second pore output dekabe,') } , 4000);

setInterval(() =>{ console.log('(setInterval) nijer icce moto take jei time set kore dewa hoise sei time por por bar bar colte takbe.') } , 2000);//eta 2 second proe ouptut dibe karon eta ( asynchronous/single_threated follow kroena )ekane (setinterval) 2nd peramitar hisebe set kora dewa smy por por coltei thakbe, continously so 2tai off korar (settimeout & setinterval) off korar ekta way ase seta holo 


console.log(5);// (synchronous/single_threated) niom follow kore serial wys output dibe.

function func_secuenctiallyCole()  {
    console.log(3)

}