/* 

@@1.// ((settimeout) / (setinterval)) egulor protom peramitar hisebe arrow function/anonymous function,kinba functionCallBack egulo protom peramitar hisebe beshi use hoi. 
& second peramitar hisebe time set kore dewa hoi koto (second,milisecond/hours) eshob tobe (settimeout) er ketre oi smy pore kaj ta ekbari hobe, kintu (setinterval) er ketre set kore dewa smy por por bar bar oi kaj/function ta kaj kortei thakbe. inifinity vabe, tobe settimeout / setinterval er kaj off korar ekta method ase

1.setTimeout((arrowFunctionErPera) => {
    
}, timeout);


2. setInterval(() => {
// (setinterval) er protom peramitar hisebe arrow function/anonymous function,kinba functionCallBack egulo protom peramitar hisebe beshi use hoi 
},(second peramitar = kotoSmyPorPorRepeatHobeSeiTimeTaJmn:3000 / interval));

*/

// 1. settimeout:
settimeout(() => {
    console.log('i am settimeout,jeta nirdisto smy pore ekbari execute hobe. & (2000) eta holo nirdisto smy, ortat 2second porei execute howar jonno (2000) dewa hoise.');
} , 2000);



let num =0;
// 2. setinterval :
setinterval(() => {
    console.log('i am (setinterval) jeta nirdisto smy por por bar bar run/execute hote thakbe, tobe ei bar bar run/execute howata off kora jai. (clearInterval()) ei metod er maddome ')
    num++;
    console.log(num);
} , 1000);

clearInterval()// eta setitmout & setinterval off korar jonno use hoi

