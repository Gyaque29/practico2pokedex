import { View, Text, TextInput, Alert } from "react-native";
import { styles } from "../style/styles";

export const Buscador = ({ busqueda, setBusqueda, pokemons, onSeleccionarPokemon }) => {

    const buscarPokemon = () => {
        const p = pokemons.find(pokemon => pokemon.name.toLowerCase() === busqueda.toLowerCase());
        if (p) {
            onSeleccionarPokemon(p);
        } else {
            Alert.alert("No encontrado", `No se encontró el Pokémon "${busqueda}"`);
        }
    };

    return (
        <View style={styles.contbuscar}>
            <Text style={styles.text}>Buscar:</Text>

            <TextInput
                style={styles.input}
                placeholder="Ingrese un nombre"
                value={busqueda}
                onChangeText={setBusqueda}
                placeholderTextColor="#999"
                returnKeyType="search"
                onSubmitEditing={buscarPokemon}
            />
        </View>
    );
};