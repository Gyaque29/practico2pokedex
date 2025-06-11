import { View, Text, ScrollView } from "react-native"
import { styles } from "../style/styles";
import apiServices from "../axios/apiServices";
import { useEffect, useState } from "react";

export const ListaPokemons = () => {

    useEffect(() => {
        const fetchPoke = async () => {
            const data = await apiServices.getAllPoke();
            console.log(data)
            setPokemons(data.results)
        };

        fetchPoke();
    }, []);

    const [pokemons, setPokemons] = useState([]); //ACA GUARDARE LOS RESULTADOS

    return (
        <View>

            <Text style={styles.text}>Pokemons:</Text>
            <ScrollView horizontal style={styles.scrollContainer} showsHorizontalScrollIndicator={false}>

                {pokemons.map((pokemon) => (
                    <View key={pokemon.name} style={styles.pokemonBox}>
                        <Text style={styles.pokemonName}>{pokemon.name}</Text>
                    </View>
                ))}
            </ScrollView>
        </View>
    )
}
