import { api } from './axiosConfig';

const apiServices = {
    getAllPoke: async () => {
        try{
            const response = await api.get('/api/v2/pokemon?limit=20');
            return response.data
        }catch (error){
            throw error;
        }
    },
    getAnPoke: async (nombre) => {
        try{
            const response = await api.get(`/api/v2/pokemon/${nombre}`)
            return response.data;
        }catch(error){
            throw error;
        }
    },

}

export default apiServices
