import { View, Text } from 'react-native';
import { styles } from "../style/styles";
import { Buscador } from "../component/Buscador"
import { ListaPokemons } from "../component/ListaPokemons"

export default function Home() {
  return (
    <View style={styles.contenedorPokemons}>
      <Text style={styles.text}>
        <Buscador />
        
        <ListaPokemons />
      </Text>
    </View>
  );
}
