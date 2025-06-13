import AsyncStorage from '@react-native-async-storage/async-storage';

const FAVORITOS_KEY = '@favoritos_pokemons';

// Guardar un nuevo pokemon favorito
export const agregarAFavoritos = async (pokemon) => {
  try {
    const favoritosJSON = await AsyncStorage.getItem(FAVORITOS_KEY);
    let favoritos = favoritosJSON ? JSON.parse(favoritosJSON) : [];

    // Evitar duplicados
    if (!favoritos.find(p => p.name === pokemon.name)) {
      favoritos.push(pokemon);
      await AsyncStorage.setItem(FAVORITOS_KEY, JSON.stringify(favoritos));
    }
  } catch (error) {
    console.error('Error al agregar favorito:', error);
  }
};

// Obtener lista completa de favoritos
export const obtenerFavoritos = async () => {
  try {
    const favoritosJSON = await AsyncStorage.getItem(FAVORITOS_KEY);
    return favoritosJSON ? JSON.parse(favoritosJSON) : [];
  } catch (error) {
    console.error('Error al obtener favoritos:', error);
    return [];
  }
};

// Eliminar un pokemon favorito por nombre
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