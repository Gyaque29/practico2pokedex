import { View, Text, Image, Button } from "react-native";
import { styles } from "../style/styles";

export const PokemonDetalle = ({ pokemon, onAgregarFavorito }) => { //RECIBO EL POKEMON SELECCIONADO Y LA FUNCION DE AGREGAR A FAVORITO
    if (!pokemon) return null; //SI NO SE SELECCIONA POKEMON NO MUESTRA NADA

    return (
        <View style={styles.poke}>
            <Text style={styles.text}>{pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</Text>
            {pokemon.image && (
                <Image
                    source={{ uri: pokemon.image }}
                    style={styles.imagen2}
                    resizeMode="contain"
                />
            )}
            <Text style={styles.text}>
                <Text style={styles.text2}>Tipos: </Text>
                {pokemon.types.join(", ").charAt(0).toUpperCase() + pokemon.types.join(", ").slice(1)}
            </Text>
            <Text style={styles.text}>
                <Text style={styles.text2}>Habilidades: </Text>
                {pokemon.abilities.join(", ").charAt(0).toUpperCase() + pokemon.abilities.join(", ").slice(1)}
            </Text>
            <Text style={styles.text}>
                <Text style={styles.text2}>Peso: </Text>
                {pokemon.weight / 10} kg
            </Text>
            <Text style={styles.text}>
                <Text style={styles.text2}>Altura: </Text>
                {pokemon.height / 10} m
            </Text>

            <Button
                title="Agregar a Favoritos"
                onPress={() => onAgregarFavorito(pokemon)}
                color="#f57c00"
            />
        </View>
    );
};