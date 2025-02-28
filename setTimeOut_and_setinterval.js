/* 
1. (setTimeout) ta nirdisto smy pore ekbar execute hobe .
2. (setInterval) ta nirdisto smy por por bar bar execute hobe, 
3. ( (setTimeout) & (setInterval) ) e 2ta peramitar thake protom peramitar hisebe arrow/normal function lika jaai,emne callback function o kora jai, 
& second peramitar hisebe (timeout,intervaltime) thake ortat koto smy pore execute hobe sei smy ta miliseconds hisebe set kora dewa hoi.
4. clearInterval(setIntervalVariable) dile nirdisto sonkok bar (setInterval) execute hoye off hoye jabe, condtion o use kora jai. & 
5. clearTimeout(clearTimeoutVariable) diyew (setTimeout) k off kora hoi, jeheto (setTimeout) (setInterval) er moto bar bar execute korena, nirdisto smy pore shudo ekbari execute kora tai (clearTimeout()) clear/off korar drkr porena


@@1.// ((setTimeout) / (setInterval)) egulor protom peramitar hisebe arrow function/anonymous function,kinba functionCallBack egulo protom peramitar hisebe beshi use hoi. 
& second peramitar hisebe time set kore dewa hoi koto (second,milisecond/hours) eshob tobe (setTimeout) er ketre oi smy pore kaj ta ekbari hobe, kintu (setInterval) er ketre set kore dewa smy por por bar bar oi kaj/function ta kaj kortei thakbe. inifinity vabe, tobe setTimeout / setInterval er kaj off korar ekta method ase

1.setTimeout((arrowFunctionErPera) => {
    
}, timeout);


2. setInterval(() => {
// (setInterval) er protom peramitar hisebe arrow function/anonymous function,kinba functionCallBack egulo protom peramitar hisebe beshi use hoi 
},(second peramitar = kotoSmyPorPorRepeatHobeSeiTimeTaJmn:3000 / interval));


@@2. (setInterval) ta ghorir katar moto coltei tahkbe, jotokkon off kora na hoi. & setInterval off korar ketre (setInterval) k ekta id dite hobe, sei id dhorei ( clearInterval(setIntervalID) ) setInterval ta off korbe. 
*/

// 1. setTimeout syntex:
// const clearTimeoutVariable = setTimeout(() => {
setTimeout(() => {
    console.log('i am (setTimeout)');
}, 3000);

// clearTimeout(clearTimeoutVariable)


/* 'i am setTimeout,jeta nirdisto smy pore ekbari execute hobe. & (2000) eta holo nirdisto smy, ortat 2second porei execute howar jonno (2000) dewa hoise.' */


let num =0;
// 2. setInterval :
 const setIntervalIDname = setInterval(() => {

    console.log('i am (setInterval) jeta nirdisto smy por por bar bar run/execute hote thakbe, tobe ei bar bar run/execute howata off kora jai. (clearInterval()) ei metod er maddome ');
    num++;
    console.log(num);
    clearInterval(setIntervalIDname)// eta setitmout & setInterval off korar jonno use hoi

} , 2000);



// conditon use kore (setInterval) k off korar syntex:
let num2 = 0;
const setIntervalIDname2 = setInterval(() => { 

num2++;
console.log(num2 , '(setInterval) colte colte 5 theke boro hoye gele tkn (clearInterval(setIntervalVariableNAME) ) er maddome off hoye jabe.')
if(num2 > 5){
  
  clearInterval(setIntervalIDname2);
}

} , 1000)

