document.getElementById('button').addEventListener('click',fetchPokemonData)

function fetchPokemonData(){
    var xhr= new XMLHttpRequest();
    xhr.open('GET','https://pokeapi.co/api/v2/pokemon?limit=151',true);
    xhr.onload = function(){
        if(this.status==200){
            let pokedata= JSON.parse(this.responseText);
            const random = Math.floor(Math.random() * (151 - 1)) + 1;
           
            let out='';

            out+=`<img src="${"https://source.unsplash.com/random/200x200?sig=1"}">
            <ul> <li> ${pokedata.results[random].name} </li> </ul>`

            document.getElementById("poke").innerHTML=out;
        }
    }
    xhr.send();
}