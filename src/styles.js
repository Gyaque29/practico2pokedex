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
    home: {
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
        fontSize: 20,
        color: colors.ColorTxt,
        fontWeight: "bold",
        margin: 10,
    },
    titlePokedex: {
        fontSize: 25,
        color: colors.ColorTxt,
        fontWeight: "bold",
        margin: 10,
        textAlign: "center",
    }
});