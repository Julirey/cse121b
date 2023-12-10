/* Project: Simple Pokemon Library */

// Create List
const pokemonsElement = document.querySelector("#pokemons");
const favoritesElement = document.querySelector("#favorites");
let pokemonList = [];

// Reset List
const reset = () => {
    pokemonsElement.innerHTML = "";
}

const resetFavorites = () => {
  favoritesElement.innerHTML = "";
}

// Display List
const displayPokemons = (pokemons) => {
  pokemons.forEach(pokemon => {
     
    let article = document.createElement("article");

    let h3 = document.createElement("h3");
    h3.textContent = `#0${pokemon.id}: ${Upper(pokemon.name)}`;
    
    let h5 = document.createElement("h5")
    h5.textContent = `Type: ${getTypes(pokemon)}`

    let img = document.createElement("img");
    img.src = (pokemon.sprites.front_default);
    img.alt = (pokemon.name);

    let div = document.createElement("div");

    let input = document.createElement("input");
    input.type = ("button");
    input.value = ("Go to wiki")
    input.addEventListener("click", function() {
      window.open(`https://bulbapedia.bulbagarden.net/wiki/${pokemon.name}`,'_blank');
    });

    let favorite = document.createElement("input");
    favorite.type = ("button");
    favorite.value = ("Add to list")
    favorite.addEventListener("click", function() {
      favoritesElement.appendChild(article);
    });

    article.appendChild(h3);
    article.appendChild(h5);
    article.appendChild(img);
    article.appendChild(div)
    div.appendChild(input)
    div.appendChild(favorite);

    pokemonsElement.appendChild(article);
});
}


// Fetch Pokemon List
const getPokemons = async () => {
    const response = await fetch("https://pokeapi.co/api/v2/generation/1/")
    if (response.ok) {
        let data = await response.json();
        getDetails(data.pokemon_species);
        displayPokemons(pokemonList);
    }
}


// Fetch the details of every pokemon 
const getDetails = (pokemons) => {
  pokemons.forEach(pokemon => {
  details(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`)
});
}

// Fetch the details of a single pokemon
const details = (url) => {
  try {
    fetch(url)
      .then(response => response.json())
      .then(pokemon => {
        pokemonList.push(pokemon);

        // Although this section could seem unnecessary
        // It looks as if displayPokemons() doesn't create the
        // elements while the page is loading and only shows
        // something once it has been reseted by the sorter
        // And I couldn't find a solution for it. 
        let article = document.createElement("article");

        let h3 = document.createElement("h3");
        h3.textContent = `#0${pokemon.id}: ${Upper(pokemon.name)}`;
        
        let h5 = document.createElement("h5")
        h5.textContent = `Type: ${getTypes(pokemon)}`

        let img = document.createElement("img");
        img.src = (pokemon.sprites.front_default);
        img.alt = (pokemon.name);

        let div = document.createElement("div");

        let input = document.createElement("input");
        input.type = ("button");
        input.value = ("Go to wiki")
        input.addEventListener("click", function() {
          window.open(`https://bulbapedia.bulbagarden.net/wiki/${pokemon.name}`,'_blank');
        });

        let favorite = document.createElement("input");
        favorite.type = ("button");
        favorite.value = ("Add to list")
        favorite.addEventListener("click", function() {
          favoritesElement.appendChild(article);
        });

        article.appendChild(h3);
        article.appendChild(h5);
        article.appendChild(img);
        article.appendChild(div)
        div.appendChild(input)
        div.appendChild(favorite);

        pokemonsElement.appendChild(article);
      })
      .catch(error => {
        console.error(error)
      })
  } catch (error) {
    console.error(error)
  }
}

// Sorter 
const sortBy = (pokemons) => {
    reset();
    const filter = document.getElementById("PsortBy").value;
    switch (filter) {
      case "a-z":
        displayPokemons(pokemons.sort((a, b) => a.name.localeCompare(b.name)));
        break;
      case "z-a":
        displayPokemons(pokemons.sort((a, b) => -1 * a.name.localeCompare(b.name)));
        break;
      case "id-asc":
        displayPokemons(pokemons.sort((pokeA, pokeB) => pokeA.id - pokeB.id));
        break;
      case "id-desc":
        displayPokemons(pokemons.sort((pokeA, pokeB) => pokeB.id - pokeA.id));
        break;
      default:
        console.log("Invalid filter");
    }
};

// Type Sorter
const sortByType = (pokemons) => {
  reset();
  const filter = document.getElementById("PsortByType").value;
  switch (filter) {
    case "normal":
      displayPokemons(pokemons.filter((pokemon) => getTypes(pokemon).includes("normal")));
      break;
    case "fighting":
      displayPokemons(pokemons.filter((pokemon) => getTypes(pokemon).includes("fighting")));
      break;
    case "flying":
      displayPokemons(pokemons.filter((pokemon) => getTypes(pokemon).includes("flying")));
      break;
    case "poison":
      displayPokemons(pokemons.filter((pokemon) => getTypes(pokemon).includes("poison")));
      break;
    case "ground":
      displayPokemons(pokemons.filter((pokemon) => getTypes(pokemon).includes("ground")));
      break;
    case "rock":
      displayPokemons(pokemons.filter((pokemon) => getTypes(pokemon).includes("rock")));
      break;
    case "bug":
      displayPokemons(pokemons.filter((pokemon) => getTypes(pokemon).includes("bug")));
      break;
    case "ghost":
      displayPokemons(pokemons.filter((pokemon) => getTypes(pokemon).includes("ghost")));
      break;
    case "steel":
      displayPokemons(pokemons.filter((pokemon) => getTypes(pokemon).includes("steel")));
      break;
    case "fire":
      displayPokemons(pokemons.filter((pokemon) => getTypes(pokemon).includes("fire")));
      break;
    case "water":
      displayPokemons(pokemons.filter((pokemon) => getTypes(pokemon).includes("water")));
      break;
    case "grass":
      displayPokemons(pokemons.filter((pokemon) => getTypes(pokemon).includes("grass")));
      break;
    case "electric":
      displayPokemons(pokemons.filter((pokemon) => getTypes(pokemon).includes("electric")));
      break;
    case "psychic":
      displayPokemons(pokemons.filter((pokemon) => getTypes(pokemon).includes("psychic")));
      break;
    case "ice":
      displayPokemons(pokemons.filter((pokemon) => getTypes(pokemon).includes("ice")));
      break;
    case "dragon":
      displayPokemons(pokemons.filter((pokemon) => getTypes(pokemon).includes("dragon")));
      break;
    case "dark":
      displayPokemons(pokemons.filter((pokemon) => getTypes(pokemon).includes("dark")));
      break;
    case "fairy":
      displayPokemons(pokemons.filter((pokemon) => getTypes(pokemon).includes("fairy")));
      break;
    default:
      console.log("Invalid filter");
  }
};

// To get an array of every type a pokemon has
const getTypes = (pokemon) => {
  let types = [];
  pokemon.types.forEach(t => {
  types.push(t.type.name)
  });
  return types;
}

// To convert the first letter of a string to Uppercase
function Upper(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

// Event Listener
document.querySelector("#PsortBy").addEventListener("change", () => {sortBy(pokemonList)});
document.querySelector("#PsortByType").addEventListener("change", () => {sortByType(pokemonList)});
document.querySelector("#clearList").addEventListener("click", () => resetFavorites());

getPokemons();

