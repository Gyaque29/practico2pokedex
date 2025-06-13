import { api } from './axiosConfig';

const apiServices = {
    getAllPoke: async () => {
        try {
            const response = await api.get('/api/v2/pokemon?limit=50');

            const pokemons = response.data.results; // ← CORREGIDO

            const detailedPokemons = await Promise.all(
                pokemons.map(async (pokemon) => {
                    const detail = await api.get(pokemon.url);
                    return {
                        name: detail.data.name,
                        image: detail.data.sprites.other['official-artwork'].front_default,
                        types: detail.data.types.map(t => t.type.name),
                        abilities: detail.data.abilities.map(a => a.ability.name),
                        weight: detail.data.weight,
                        height: detail.data.height,
                    };
                })
            );

            return detailedPokemons;
        } catch (error) {
            throw error;
        }
    },

}

export default apiServices
