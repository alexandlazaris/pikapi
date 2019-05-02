import requests, json, pprint, os, sys, random, os.path

def runAPI(total):
    count = 0
    while count < total:
        urlPokemon = 'https://pokeapi.co/api/v2/pokemon/'
        randomNumber = random.randint(1, 386)
        urlPokemonById = urlPokemon + str(randomNumber)
        response = requests.get(urlPokemonById)
        pokeId = str(response.json()['id'])
        pokeName = str(response.json()['name'])
        pokemonInfo = [pokeId, pokeName]
        types = [0]
        for i in response.json()['types']:
            str(pokemonInfo.append(i['type']['name']))
            str(types.append(i['type']['name']))
        pokeSprite = str(response.json()['sprites']['front_default'])
        pokeSpriteShiny = str(response.json()['sprites']['front_shiny'])
        pokemonInfo.append(pokeSprite)
        types.remove(0)
        with open("index.html", "a") as myfile:
            myfile.write('<div style="border:1px solid black;text-align:center">')
            myfile.write('<img src=' + pokeSprite + ' width=200px height=200px alt=' + pokeName + '>')
            myfile.write('<img src=' + pokeSpriteShiny + ' width=200px height=200px alt=' + pokeName + '-shiny' + '>')
            myfile.write('<h2>' + pokeName + ' - '+ pokeId + '</h2>')
            for t in types:
                myfile.write('<h2>' + str(t) + '</h2>')
            myfile.write('</div>')
        count+=1

numberofPokemonToFind = int(sys.argv[1])
runAPI(numberofPokemonToFind)