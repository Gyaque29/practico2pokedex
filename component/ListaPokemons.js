import { View, Text, ScrollView, Image, TouchableOpacity } from "react-native"
import { styles } from "../style/styles";
import apiServices from "../axios/apiServices";
import { useEffect, useState } from "react";

export const ListaPokemons = () => {

    const [pokemons, setPokemons] = useState([]); //ACA GUARDARE LOS RESULTADOS

    const [selectedPokemon, setSelectedPokemon] = useState(null); //POKEMON SELECCIONADO

    useEffect(() => {
        const fetchPoke = async () => {
            try {
                const data = await apiServices.getAllPoke();
                console.log("Pokemons con imágenes:", data);
                setPokemons(data);  // Aquí guardamos el array directamente
            } catch (error) {
                console.error(error);
            }
        };

        fetchPoke();
    }, []);

    return (
        <View style={{ padding: 10 }}>
            <Text style={styles.text}>Pokemons:</Text>

            <ScrollView horizontal style={{ height: 150 }} showsHorizontalScrollIndicator={false}>
                {pokemons.map((pokemon) => (
                    <TouchableOpacity
                        key={pokemon.name}
                        onPress={() => setSelectedPokemon(pokemon)}
                        style={{ marginRight: 20, alignItems: "center" }}
                    >
                        {pokemon.image ? (
                            <Image
                                source={{ uri: pokemon.image }}
                                style={{ width: 100, height: 100 }}
                                resizeMode="contain"
                            />
                        ) : (
                            <Text>Sin imagen</Text>
                        )}
                        <Text style={styles.text}>{pokemon.name}</Text>
                    </TouchableOpacity>
                ))}
            </ScrollView>

            {selectedPokemon && (
                <View style={styles.poke}>
                    <Text style={styles.text}>{selectedPokemon.name}</Text>
                    {selectedPokemon.image && (
                        <Image
                            source={{ uri: selectedPokemon.image }}
                            style={{ width: 200, height: 200 }}
                            resizeMode="contain"
                        />
                    )}
                    <Text style={styles.text}> 
                         <Text style={styles.text2}>Tipos: </Text>{selectedPokemon.types.join(', ')}
                    </Text>
                    <Text style={styles.text}>
                        <Text style={styles.text2}>Habilidades: </Text>{selectedPokemon.abilities.join(', ')}
                    </Text>
                    <Text style={styles.text}>
                        <Text style={styles.text2}>Peso: </Text>{selectedPokemon.weight / 10} kg
                    </Text>
                    <Text style={styles.text}>
                         <Text style={styles.text2}>Altura: </Text>{selectedPokemon.height / 10} m
                    </Text>
                </View>
            )}
        </View>
    )
}
