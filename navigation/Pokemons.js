import { View, ScrollView } from 'react-native';
import { ListaPokemons } from "../component/ListaPokemons"
import { ImageBackground } from 'react-native';

export default function Home() {
  return (
    <ScrollView>
      <View>
        <ImageBackground
          source={require('../img/pokeballwpp.jpeg')} // IMAGEN DE FONDO
          resizeMode="cover" 
        >
          <ListaPokemons />
        </ImageBackground>

      </View>
    </ScrollView>
  );
}
