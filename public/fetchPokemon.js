async function fetchRandomPokemon() {
  let randomNumber = Math.floor(Math.random() * 493) + 1;
  const service = `https://pokeapi.co/api/v2/pokemon/${randomNumber}`;
  let response = await fetch(service);
  let data = await response.json();
  let { name, types, stats, sprites } = data;
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
  let pokeTypesString = pokeTypes.toString().replace(",", ", ");
  stats.forEach((element) => {
    pokeBaseStats.set(element.stat.name, element.base_stat);
    baseStatTotal += element.base_stat;
  });
  pokeBaseStats.set("baseStatTotal", baseStatTotal);
  document.querySelector("#name").textContent = pokeName;
  document.querySelector("#type").textContent = pokeTypesString;
  document.querySelector("#baseStatTotal").textContent = baseStatTotal;
  document.querySelector("#sprite1").src = pokeSprites[0];
}
