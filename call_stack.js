/* 

*/

let globarScope_variable = 1;

function add(num1, num2) {
    const result = num1 + num2;

    console.log(globarScope_variable);//output: 1; ekane eta funciton er vitor thekew access kora jacce, karon eta globar scope variable.

    return result;

}
console.log(result);// output: result is not defined >koron? result variable ta FEC scpore varaible eta shudo function er vitor thekei access kora jabe, function baire theke access kora jabena, but jodi (globarScope_variable) k console kora hoto tkn output tiktak dito , karon global scopre (GEC) file er sob jaiga theke access kora jai, even jekuno function thekew access kora jabe, tobe (FEC) function er vitorer variable er value pete caile return kore pawa jabe, otherwise pawa jabena.