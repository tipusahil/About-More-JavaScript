/* 
1. (fetch) function ta ek dhoronoer promise er moto kaj kore, hoi api theke data dibe,nahoi errror dibe.
(fetch) jeheto browser e cole tai kuno html file er sate linkup kore then fetch ta use korte hbe. nahoi kaj hobena.

*/

const myLoader = () =>{
    // return new Promise(resolved, rejected);
    return new Promise( ( resolve, rejected )=> {

        const success = Math.random();
        if(success <= 0.5){
            resolve('yes resolved or , small ase')
        }
        else{
            rejected('no, rejected, or 5thrkr boro')
        }

    });
}
myLoader()
.then(data => console.log('resolveed ' , data))
.catch(error => console.log('errror data' , error))

//1. normal fetch lika hoi jevabe:

fetch(('api_url'))
.then(response = response.json())
.then(data => console.log(data))
.catch(error => console.log(error));

 /* 
 2. normal function e fetch likar niom : normal function e  synchronous vabe (fetch) function likte hobe:
normal function e fetch lika jai but synchronous vabe ortat (single-threaded) vabe run hoi moto kore likte hobe. jate run hote age pore na hoye jai

##1. noraml function e (fetch)promise likte hole funciton keyword er age (async) keyword ta likte hbe, etar mane bujai eta ekta async function lika hocce, & vitore varialbe name er pore equal sign er pore (await) keyword likte hobe, jate data load howa obdi wait kore function ta, nahoi (single-threaded) way te sob ota load hote deri korle wait na kore baki gulor output diye dibe.
//  */

// normal function e (fetch) promise likar synteex:
 async function normalFunctionEfetch() {
    const res = await fetch('api_url');
    const data =await res.json();
    console.log(data);;
}
normalFunctionEfetch() 
// jei function ei (fetch) lika hokna keno oi function ta call korte hobe, nahoi kaj korbnea.



/* 
3. arrow function e (fetch) likar niom,& syntex:

*/

    // arrow function e fetch likar syntex:
const arrowFunctionEfetch = async () => {// arrow funtion e (fetch) likte caile peramitar er age (async) keyword ta likte hobe, & funciton er vitore varialbe er equal sign er pore (await) keyword taw likte hobe.


    // mone rakte hbe j (fetch) promise always async function holei tiktak kaj korbe,& settimeout,setinterval egulaw async niome run hobe.

    const res = await fetch('api_url') ;
    const data = await res.json();
    console.log(data);

}
arrowFunctionEfetch()