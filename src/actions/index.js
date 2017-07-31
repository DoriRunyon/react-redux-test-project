import axios from 'axios';

const ROOT_URL = `http://pokeapi.co/api/v2/pokemon/`;

export const FETCH_POKEMON = 'FETCH_POKEMON';

export function fetchPokemon(name) {
    const url = `${ROOT_URL}${name}`;
    const request = axios.get(url);

    return {
        type: FETCH_POKEMON,
        payload: request
    };
}