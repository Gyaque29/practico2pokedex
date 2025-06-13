import {
    View,
    Text,
    ScrollView,
    Image,
    TouchableOpacity,
} from "react-native"
import { styles } from "../style/styles";
import apiServices from "../axios/apiServices";
import { useEffect, useState } from "react";
import { PokemonDetalle } from "./PokemonDetalle";
import { Buscador } from "./Buscador";


export const ListaPokemons = () => {

    const [pokemons, setPokemons] = useState([]); //ACA GUARDARE LOS RESULTADOS
    const [selectedPokemon, setSelectedPokemon] = useState(null); //POKEMON SELECCIONADO
    const [busqueda, setBusqueda] = useState("");

    useEffect(() => {
        const fetchPoke = async () => {
            try {
                const data = await apiServices.getAllPoke();
                setPokemons(data);  // Aquí guardamos el array directamente
                if (data.length > 0) {
                    setSelectedPokemon(data[0]);
                }
            } catch (error) {
                console.error(error);
            }
        };
        fetchPoke();
    }, []);

    // Función para agregar a favoritos
    const agregarAFavoritos = (pokemon) => {
        console.log("Agregado a favoritos:", pokemon.name);

    };

    return (
        <View>

            <Buscador
                busqueda={busqueda}
                setBusqueda={setBusqueda}
                pokemons={pokemons}
                onSeleccionarPokemon={setSelectedPokemon}
            />

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
                <PokemonDetalle
                    pokemon={selectedPokemon}
                    onAgregarFavorito={agregarAFavoritos}
                />
            )}
        </View>
    )
}
