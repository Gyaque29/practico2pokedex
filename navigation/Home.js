import { View, Text } from 'react-native';
import { styles } from "../src/styles";

export default function Home() {
  return (
    <View style={styles.home}>
      <Text style={styles.text}>
        Bienvenido a la pantalla de Inicio
        Aqui estara la lista de pokemons y un buscador
      </Text>
    </View>
  );
}
