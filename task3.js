function tellJoke() {
    console.log(`why don't scienctists trust atoms? because they make up everthing.`);
}

// const jokInterval = setInterval(tellJoke, 2000);//2second por por (telljoke) function k call kora hobe,
//globar scope varaible howai sob jaiga theke access kora jabe eta

// setTimeout(() => {

//     clearInterval(jokInterval);// (clearInterval) method er maddome 2second por por (telljoke) function k call korto j jei (setInterval) set kora hoise seta off kora hoise.  sei variable name dhore stop kore dilm eta (11seconds) porei muloto eta gotbe.

// }, 11000);


// example 2:
let count = 0;

function timer() {
    count++;
    console.log('count er present value func theke = ',count);
}

const setTIMERinterval = setInterval(timer ,1000);// 1sec por por timer() call hbe.



    setTimeout(() => {


        clearInterval(setTIMERinterval);
        console.log('count er present value settimeout theke = ',count);

    },5050);// 5sec howar 50milisecond er vitore timer off hoye jabe.

