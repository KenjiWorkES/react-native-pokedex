import axios from 'axios';

const BASE_URL = 'https://pokeapi.co/api/v2/';

export const getAllPokemons = async (offset) => {
  const url = BASE_URL + `pokemon?limit=20&offset=${offset}`;
  const allPokemons = await axios.get(url);

  const pokemons = [];

  for (let pokemon of allPokemons.data.results) {
    const singlePokemon = await axios.get(pokemon.url);
    pokemons.push(singlePokemon);
  }

  return pokemons;
};
