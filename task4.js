
async function jokeBOLO(jokesID) {
    const url = `https://v2.jokeapi.dev/joke/Programming?id=${jokesID}`;
    const res = await fetch(url);
    const data = await res.json();

    let jokes_joke = data.setup;

    const id = data.id;
    console.log(data)
if( jokes_joke === undefined ){
 jokes_joke = data.joke ;

}


    console.log(id , jokes_joke);

    seeNewJoke(id , jokes_joke)
}



const seeNewJoke = (id , joke) => {

    document.getElementById('joke_box').innerHTML =`id: ${id}   <br> 
    joke: ${joke}`;
    

  
}

document.getElementById('new_joke_btn').addEventListener('click' , () => {
    jokeBOLO()
});



