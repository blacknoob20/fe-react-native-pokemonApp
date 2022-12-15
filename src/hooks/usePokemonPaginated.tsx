import { useEffect, useRef, useState } from 'react';
import { pokemonApi } from '../api/pokemonApi';
import { PokemonPaginatedResponse, Result, SimplePokemon } from '../interfaces/pokemonInterfaces';

const url = `https://pokeapi.co/api/v2/pokemon?limit=40`;

export const usePokemonPaginated = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [simplePokemonList, setSimplePokemonList] = useState<SimplePokemon[]>([]);
    const nextPageUrl = useRef(url);

    const loadPokemons = async () => {
        try {
            const res = await pokemonApi.get<PokemonPaginatedResponse>(nextPageUrl.current);

            nextPageUrl.current = res.data.next;
            mapPokemonList(res.data.results);

        } catch (error) {
            console.log(error);

        }
    }

    const mapPokemonList = (pokemonList: Result[]) => {
        const newPokemonList: SimplePokemon[] = pokemonList.map(({ name, url }) => {
            const urlParts = url.split('/');
            const id = urlParts[urlParts.length - 2];
            const picture = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;

            return {
                id,
                url: picture,
                name,
            }
        });

        setSimplePokemonList([...simplePokemonList, ...newPokemonList]);
        setIsLoading(false);
    }

    useEffect(() => {
        loadPokemons();
    }, []);

    return {
        isLoading,
        simplePokemonList,
        loadPokemons,
    }
}
