import requests, json, pprint, os, sys, random

def runAPI():
    urlPokemon = 'https://pokeapi.co/api/v2/pokemon/'
    randomNumber = random.randint(1, 386)
    urlPokemonById = urlPokemon + str(randomNumber)

    response = requests.get(urlPokemonById)
    pokeId = 'Pokedex entry > ' + str(response.json()['id'])
    pokeName = 'Pokemon name > ' + str(response.json()['name'])
    pokemonInfo = [pokeId, pokeName]
    for i in response.json()['types']:
        str(pokemonInfo.append('Pokemon type > ' + i['type']['name']))
    pokeSprite = str(response.json()['sprites']['front_default'])
    pokemonInfo.append('Pokemon sprite > ' + pokeSprite)
    for data in pokemonInfo:
        print (data)

    f=open("./data.txt","w")
    for data in pokemonInfo:
         f.write(data + "\n")
    f.close()
runAPI()