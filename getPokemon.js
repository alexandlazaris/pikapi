//put pokemom generation here
//also make separate module for Pokemon class

const axios = require("axios").default;
const service = "https://pokeapi.co/api/v2/pokemon/";
const Pokemon = require("./pokemon");

const allPokemonGens = 898;
const genOnePokemon = 151;
const genTwoPokemon = 251;
const genThreePokemon = 386;

function checkService() {
  const fullPath = service;
  const response = axios.get(service).then((response) => response.data);
  return response;
}

//below function returns a promise from axios
function getPokemonData(pokedexNumber) {
  const fullPath = service + pokedexNumber;
  //why is the final 'response' in the line below used?
  const response = axios.get(fullPath).then((response) => response.data);
  return response;
}

const getOnePokemon = async () => {
  let pokemon;
  await getPokemonData(1).then((response) => {
    pokemon = new Pokemon(response.name);
  });
  return pokemon;
};

async function getMultiplePokemon(partySize) {
  let pokemonMap = new Map();
  for (let index = 1; index < partySize + 1; index++) {
    let randomNumber = Math.floor(Math.random() * genThreePokemon) + 1;
    await getPokemonData(randomNumber).then((response) => {
      let { name, types, stats, sprites } = response;
      let pokeName = name;
      let pokeTypes = [];
      let pokeBaseStats = new Map();
      let baseStatTotal = 0;
      let spriteInGame = sprites.front_default;
      let spriteArtwork = sprites.other["official-artwork"].front_default;
      let pokeSprites = [spriteInGame, spriteArtwork];
      types.forEach((element) => {
        pokeTypes.push(element.type.name);
      });
      stats.forEach((element) => {
        pokeBaseStats.set(element.stat.name, element.base_stat);
        baseStatTotal += element.base_stat;
      });
      pokeBaseStats.set("baseStatTotal", baseStatTotal);
      let pokemon = new Pokemon(
        pokeName,
        pokeTypes,
        pokeBaseStats,
        pokeSprites
      );
      pokemonMap.set(index, pokemon);
    });
  }
  return pokemonMap;
}

// getOnePokemon()
//   .then((response) => {
//     console.log(pokemonList);
//   })

getMultiplePokemon(6).then((map) => {
  console.log(map.entries());
});
