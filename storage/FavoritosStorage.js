import AsyncStorage from '@react-native-async-storage/async-storage';

const FAVORITOS_KEY = '@favoritos_pokemons'; //CLAVE PARA GUARDAR EL ARRAY

// GUARDAR UN NUEVO POKEMON FAVORITO
export const agregarAFavoritos = async (pokemon) => {
  try {
    const favoritosJSON = await AsyncStorage.getItem(FAVORITOS_KEY); //LEO LOS FAVORITOS
    let favoritos = favoritosJSON ? JSON.parse(favoritosJSON) : []; //SI AHI ALGO LO CONVIERTO EN JSON

    // EVITA DUPLICADOS
    if (!favoritos.find(p => p.name === pokemon.name)) {
      favoritos.push(pokemon);
      await AsyncStorage.setItem(FAVORITOS_KEY, JSON.stringify(favoritos));
    }
  } catch (error) {
    console.error('Error al agregar favorito:', error);
  }
};

// OBTENGO LISTA COMPLETA DE FAVORITOS
export const obtenerFavoritos = async () => {
  try {
    const favoritosJSON = await AsyncStorage.getItem(FAVORITOS_KEY);
    return favoritosJSON ? JSON.parse(favoritosJSON) : [];
  } catch (error) {
    console.error('Error al obtener favoritos:', error);
    return [];
  }
};

// ELIMINO DE FAVORITO POR EL NOMBRE
export const eliminarFavorito = async (nombrePokemon) => {
  try {
    const favoritosJSON = await AsyncStorage.getItem(FAVORITOS_KEY);
    let favoritos = favoritosJSON ? JSON.parse(favoritosJSON) : [];

    favoritos = favoritos.filter(p => p.name !== nombrePokemon);
    await AsyncStorage.setItem(FAVORITOS_KEY, JSON.stringify(favoritos));
  } catch (error) {
    console.error('Error al eliminar favorito:', error);
  }
};