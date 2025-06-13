import { StyleSheet, Platform } from "react-native";

export const colors = {
    ColorFondo1: '#3868A6',
    ColorFondo2: '#FFCB05',
    ColorTxt: '#3868A6',
}

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        position: 'relative',
        backgroundColor: colors.ColorFondo1,
        paddingHorizontal: 15,
        marginTop: Platform.OS === 'android' ? 50 : 0
    },
    contenedorPokemons: {
        paddingTop: 10,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.ColorFondo2,
    },
    favoritos: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        backgroundColor: colors.ColorFondo2,
    },
    text: {
        fontSize: 16,
        color: colors.ColorTxt,
        fontWeight: "bold",
        margin: 10,
    },
    text2: {
        fontSize: 16,
        color: "black",
        fontWeight: "bold",
        margin: 10,
        alignItems: 'center',
    },
    input: {
        margin: 10,
        height: 40,
        width: "100%",
        borderColor: "#ccc",
        borderWidth: 1,
        borderRadius: 8,
        backgroundColor: "#fff",
        color: "#000",
    },
    scrollContainer: {
        paddingHorizontal: 10,
        paddingVertical: 10,
    },
    pokemonBox: {
        backgroundColor: '#eee',
        padding: 5,
        marginRight: 10,
        width: 120,
        height: 100,
        alignItems: 'center',
        borderColor: '#4CAF50',
    },
    poke: {
        marginBottom: 50,
        alignItems: "center",
    },
    scrollheigt: {
        height: 150
    },
    TouchableOpacity: {
        marginRight: 20,
        alignItems: "center"
    },
    imagen: {
        width: 100,
        height: 100,
    },
    imagen2: {
        width: 200,
        height: 200,
    },
    contbuscar: {
        width: "100%",
    }


});