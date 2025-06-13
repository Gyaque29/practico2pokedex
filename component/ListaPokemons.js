import {
    View,
    Text,
    ScrollView,
    Image,
    TouchableOpacity,
} from "react-native";
import { styles } from "../style/styles";
import apiServices from "../axios/apiServices"; //SERVICIOS DE LA API
import { useEffect, useState } from "react"; //PARA GUARDAR DATOS DE ESTADO, Y MOSTRAR COSAS AL CARGAR
import { PokemonDetalle } from "./PokemonDetalle"; //COMPONENTE DE POKEMON INDIVIDUAL CON DETALLES
import { Buscador } from "./Buscador"; //COMPONENTE DEL BUSCADOR POR NOMBRE
import { agregarAFavoritos } from '../storage/FavoritosStorage'; //FUNCION PARA GUARDAR POKEMON A FAVORITOS USANDO AsyncStorage


export const ListaPokemons = () => {

    const [pokemons, setPokemons] = useState([]); //ACA GUARDO LOS RESULTADOS DE LOS POKEMONS
    const [selectedPokemon, setSelectedPokemon] = useState(null); //POKEMON SELECCIONADO ACTUAL
    const [busqueda, setBusqueda] = useState(""); //GUARDO LO QUE INGRESA EL USUARIO EN BUSCADOR

    useEffect(() => {
        const fetchPoke = async () => {
            try {
                const data = await apiServices.getAllPoke(); //LLAMO AL API SERVICE PARA OBTENER TODOS LOS POKEMONS
                setPokemons(data);  // GUARDO EL ARRAY OBTENIDO 
                if (data.length > 0) {
                    setSelectedPokemon(data[0]); //SELECCIONO EL PRIMERO PARA MOSTRARLO DE ENTRADA CON SU DETALLE
                }
            } catch (error) {
                console.error(error); //ERROR SI ALGO FALLA
            }
        };
        fetchPoke();
    }, []);

    return (
        <View> 

            <Buscador //LLAMO AL COMPONENTE BUSCADOR
                busqueda={busqueda} //LE PASO POR PROPS LO QUE INGRESA EL USUARIO
                setBusqueda={setBusqueda} //ACTUALIZO EL TEXTO
                pokemons={pokemons} //LA LISTA COMPLETA 
                onSeleccionarPokemon={setSelectedPokemon} //SE LLAMA CUANDO ELIGO UNO
            />

            <Text style={styles.text}>Pokemons:</Text>

            <ScrollView horizontal style={styles.scrollheigt} showsHorizontalScrollIndicator={true}>

                {pokemons.map((pokemon) => (
                    <TouchableOpacity
                        key={pokemon.name}
                        onPress={() => setSelectedPokemon(pokemon)}
                        style={styles.TouchableOpacity}
                    >
                        {pokemon.image ? (
                            <Image
                                source={{ uri: pokemon.image }}
                                style={styles.imagen}
                                resizeMode="contain"
                            />
                        ) : (
                            <Text style={styles.text}>Sin imagen</Text>
                        )}
                        <Text style={styles.text}> {pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</Text>
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
