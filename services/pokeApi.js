import axios from 'axios';

const BASE_URL = 'https://pokeapi.co/api/v2/';

export const getAllPokemons = async () => {
  const url = BASE_URL + 'pokemon?limit=1154';

  const pokemons = await axios.get(url);

  return pokemons.data.results;
};
