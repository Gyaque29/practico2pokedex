import { api } from '.axios/axiosConfig';

const apiServices = {
    getAllPoke: async () => {
        try{
            const response = await api.get('https://pokeapi.co/api/v2/pokemon?limit=30');
            return response.data
        }catch (error){
            throw error;
        }
    },
    getAnPoke: async (nombre) => {
        try{
            const response = await api.get(`https://pokeapi.co/api/v2/pokemon/${nombre}`)
            return response.data;
        }catch(error){
            throw error;
        }
    },

}

export default apiServices
