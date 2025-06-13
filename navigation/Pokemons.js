import { View, ScrollView } from 'react-native';
import { styles } from "../style/styles";
import { ListaPokemons } from "../component/ListaPokemons"
import { ImageBackground } from 'react-native';

export default function Home() {
  return (
    <ScrollView>
      <View>
        <ImageBackground
          source={require('../img/pokeballwpp.jpeg')} // Asegurate que exista esta imagen
          style={styles.contenedorPokemons}
          resizeMode="cover" // o "contain", "stretch", etc.
        >
          <ListaPokemons />
        </ImageBackground>

      </View>
    </ScrollView>
  );
}
