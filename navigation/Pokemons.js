import { View, Text, ScrollView } from 'react-native';
import { styles } from "../style/styles";
import { Buscador } from "../component/Buscador"
import { ListaPokemons } from "../component/ListaPokemons"

export default function Home() {
  return (
    <ScrollView>
      <View style={styles.contenedorPokemons}>
        <Buscador />
        <ListaPokemons />
      </View>
    </ScrollView>
  );
}
