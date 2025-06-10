import { View, Text,TextInput } from "react-native"
import { styles } from "../style/styles";
import { useState } from "react";

export const Buscador = () => {
    const [busqueda, setBusqueda] = useState("");
    return (
        <View style={styles.contbuscar}>
            <Text style={styles.text}>Buscar:</Text>

            <TextInput
                style={styles.input}
                placeholder="Ingrese un nombre"
                //value={busqueda}
                //onChangeText={setBusqueda}
                placeholderTextColor="#999"
            />
        </View>
    )
}
