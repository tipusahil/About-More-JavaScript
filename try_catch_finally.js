/* 

1.
2.
3.
4.
5.
6.
7.
8.

*/

const submit_btn = () => {
console.log('you clicked submit btn');

const input_field = document.getElementById('input_field');
const input_value = input_field.value;
const error_tag = document.getElementById('error_ui');

// console.log(`here is input field's value = ${input_value}`);
try{
// console.log(input_value)
// console.log(falseHolecatchEjabeERRORdibe);// document e nai emn kisu jodi try ee dwa hoi thle error dibe, jodi ota na thakee taile catch er vitoree giyei errror ta dibeee, jodi try e dewa data true na hoi/ na pai

const age = parseInt(input_value);
if(isNaN(age)){
    // console.log(`yes, it's not a number` , age, input_value );



    // caile (try) er vitor thekew (throw) diye error msg dewa jai, & sei (throw) er msg ta (catch) er peramitar e auto pass hoi so try er vitor theke kuno error msg (trhow) er maddome dile seta catch e pass hoi,& okan theke error msg ta jevabe icce show kroanu jai.jmn:
    // throw new Error("evabew erro msg ta (throw) keyword er maddome dekanu jai, & (new Error) keyword ta default structure hisebe ase");
    
    throw 'try theke error msg dilm (throw) keyword ta (return) keyword er moto use kore, & ei error msg ta (catch) er peramiar e auto pass hoi, so (catch) er peramitar ta console korle ei error msg(try)code block er vitor theke (throw) keyword er maddome jeta likalm seta show korbe. ekane ei error dibe hocce  jodi user er dewa input number na hoye string/letter jatio kisu hoi taile uporer ((isNaN)not a number? )  EI conditon e pore msg ta dekabe.';

}
else if(age <10){
    throw 'evbe abr caile try er vitore (if else,etc) condition calanu jai, & condtion er upor base kore (throw) error dewa jai.& multiple condtion dewa jai. & ekane ami liklam, user theke jei value ta newa hobe seta agei parseInt E converte koa hoise, so number jodi 10 er nise hoi thle ei error ta dibe, ar jodi user er dewa input number na hoye string/letter jatio kisu hoi taile uporer ((isNaN)not a number? )  EI conditon e pore msg ta dekabe.' ;
}


}
catch(error) {// error ta (error) maddome (catch) er cod block e dukbe.
    console.log(`error holo = ${error}`)//try er vitore (throw) diye lika error msg ta output dibe ei line theke

console.log('jei code/jinish ta error khete pare seta  (catch) er vitore rakte hobe.');
error_tag.innerText = error ;
// karon onk smy error kawar pore niser code gulo ar execute korena.jar karone error kabe. & error dibe  omon code hole seta  (try) er code block e rakte hobe jodi error hoi thle seta (catch) er peramitar e patai dibe, & sei error ta jevabe icce catch er code block theke /cosole e/ document e dekte parbo, ar jodi try er vitore dewa code ta error kabe omon na hoi thle seta try er code block thekei kaj korbe, & catch e patabena. but jodi error or try er vitore thaka codntion er sate match na kai tkn seta catch e patabe.


}

finally{

const must = 'jei code ta erorr kak ar na kak output hisebe dekai lagbe/ kaj korai lagbe sei code ta (finally) er code block er vitore rakte hbe.';
console.log(must)
}

}