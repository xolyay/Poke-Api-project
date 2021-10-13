//contenedor para meter pokemon con una clase
const display = document.getElementById("content");
let pokeLook=[];


const pokeImp = async () => {
  const pokeFetch = []
  for (let i = 1; i <= 151; i++) {
    let pokeAll = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`);
    let pokeResult = await pokeAll.json();

    pokeFetch.push(pokeResult);
  }
   pokeLook = pokeFetch.map((element) => ({

    id: element.id,
    name: element.name,
    image: element.sprites.other["official-artwork"]["front_default"],
  }));

  injectPoke(pokeLook);
}

/* const injectPoke = (buscadorDePoke) => {
  const pokePag = buscadorDePoke
    .map(
      (pokemon) =>
        `<li class="display__element" onclick="changeUrl(event)">
          <h2>${pokemon.name}</h2>
          <img class="${pokemon.name}"  id="img" src="${pokemon.image}" alt="${pokemon.name}"/>
          <p class="numpoke">NÚMERO ${pokemon.id}</p>
          </li>`
    ).join("");

  display.innerHTML = pokePag;
}; */

const injectPoke = (buscadorDePoke) => {
  const pokePag = buscadorDePoke
    .map(
      (pokemon) =>
        `<li class="card__element" onclick="changeUrl(event)">
          <h2>${pokemon.name}</h2>
          <img class="${pokemon.name}"  id="img" src="https://areajugones.sport.es/wp-content/uploads/2021/03/resumen-anime-de-pokemon-1080x600.jpeg" alt="${pokemon.name}"/>
          
          </li>`
    ).join("");

  display.innerHTML = pokePag;
};
pokeImp();


/* function changeUrl(event) {
  let pokemonClass = event.target.alt;
  let pokemonImg = document.getElementsByClassName(pokemonClass).img;
  pokemonImg.src = "https://areajugones.sport.es/wp-content/uploads/2021/03/resumen-anime-de-pokemon-1080x600.jpeg";

} */

function changeUrl(event) {
  let pokemonClass = event.target.alt;
  let pokemonImg = document.getElementsByClassName(pokemonClass).img;
  let imgNew = pokeLook.filter(poke=>poke.name==pokemonClass);
  
  if(imgNew.length>0){
    imgNew=imgNew[0].image;

  }
  pokemonImg.src=imgNew;
  

}





