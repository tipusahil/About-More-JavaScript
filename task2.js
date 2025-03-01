const delayedGreeting = (name, delayTime) => {
console.log(`name holo ${name} & delayTime holo ${delayTime}`);
};

// setTimeout(delayedGreeting('say allah', '3000'), 3000);

setTimeout( () =>{

    console.log('ekni (delayedGreeting function call hobe. 3second pore hobe');

    delayedGreeting('say allah' , 3000);
    // evabe setTimeout er function er code block theke onno fnction k call kore argument pass kora jai,  3second pore settimeout ta run hobe ti tokoni oi function k call korbe.
}, 3000 );


// 
/* 
setTimeout er maddome kuno function e argument pass korar way 2:
*/

setTimeout(delayedGreeting.bind( null, 'bind_er_maddome_argu1' , 'argu2'), 2000);
// ekane (settimeout) er protom peramitar e oi function (jake argument pass korte hobe) sei functionname.bind() dewa hoise & bind er pore 1st bracket er vitoe oi function er jonno 2ta peramitar pass kora hoise tobe, peramitar age (null) ta dwa hoise karon (this) er bisoy ta eranor jonno (null) use kora hoise.

// setTimeout(delayedGreeting.bind( null, 'bind_er_maddome_argu1' , 'argu2'), 2000); ekane  keno (null) use kora hoise? eta chatgpt korlei details pai jabo