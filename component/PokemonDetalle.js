import { View, Text, Image, Button } from "react-native";
import { styles } from "../style/styles";

export const PokemonDetalle = ({ pokemon, onAgregarFavorito }) => {
    if (!pokemon) return null;

    return (
        <View style={styles.poke}>
            <Text style={styles.text}>{pokemon.name}</Text>
            {pokemon.image && (
                <Image
                    source={{ uri: pokemon.image }}
                    style={{ width: 200, height: 200 }}
                    resizeMode="contain"
                />
            )}
            <Text style={styles.text}>
                <Text style={styles.text2}>Tipos: </Text>
                {pokemon.types.join(", ")}
            </Text>
            <Text style={styles.text}>
                <Text style={styles.text2}>Habilidades: </Text>
                {pokemon.abilities.join(", ")}
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