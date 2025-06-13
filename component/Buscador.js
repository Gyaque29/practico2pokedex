import { View, Text, TextInput, Alert } from "react-native";
import { styles } from "../style/styles";

export const Buscador = ({ busqueda, setBusqueda, pokemons, onSeleccionarPokemon }) => {

    //BUSQUEDA ES LO QUE ESTA ESCRIBIENDO EL USUARIO

    //SET BUSQUEDA FUNCION QUE ACTUALIZA EL TEXTO

    //POKEMONS ES LA LISTA

    //ONSELECCIONAR FUNCION QUE SE LLAMA CUANDO SE ENCUENTRA Y SE SELECCIONA UNO
    
    const buscarPokemon = () => {
        //.FIND PARA BUSCAR UN POKEMON CUYO NOMBRE COINCIDA CON EL TEXTO INGRESADO, EXACTAMENTE IGUAL DEBE SER
        const p = pokemons.find(pokemon => pokemon.name.toLowerCase() === busqueda.toLowerCase());
        if (p) {
            onSeleccionarPokemon(p); //SI LO ENCUENTRA EJECUTA ESTA FUNCION
        } else {
            Alert.alert("No encontrado", `No se encontró el Pokémon "${busqueda}"`); //SI NO LO ENCUENTRA ALERTA
        }
    };

    return (
        <View style={styles.contbuscar}>
            <Text style={styles.text}>Buscar:</Text>

            <TextInput
                style={styles.input}
                placeholder="Ingrese un nombre"
                value={busqueda}
                onChangeText={setBusqueda} //SE ACTUALIZA MIENTRAS EL USUARIO ESCRIBE
                placeholderTextColor="#999"
                returnKeyType="search" //ICONO DE BOTON ENTER POR LUPA 
                onSubmitEditing={buscarPokemon} //EJECUTA EL BUSCAR POKEMON
            />
        </View>
    );
};