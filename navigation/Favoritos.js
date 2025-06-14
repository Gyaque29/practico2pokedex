import { View, Text,Button, FlatList, Image, Alert } from 'react-native';
import { styles } from '../style/styles';
import { useFocusEffect } from '@react-navigation/native';
import { useCallback, useState } from 'react';
import { obtenerFavoritos, eliminarFavorito } from '../storage/FavoritosStorage';
import { ImageBackground } from 'react-native';

export default function Favoritos() {
  const [favoritos, setFavoritos] = useState([]); //PARA MANEJAR FAVORITOS

  useFocusEffect( //EJECUTA CADA VES QUE EL USUARIO VUELVE A LA PANTALLA
    useCallback(() => { //MEJORA EL RENDIMIENTO
      const cargarFavoritos = async () => {
        const data = await obtenerFavoritos();
        setFavoritos(data);
      };
      cargarFavoritos();
    }, [])
  );

  const handleEliminar = async (nombre) => {
    await eliminarFavorito(nombre); //BORRA EL FAVORITO
    const data = await obtenerFavoritos(); //ACTUALIZA LA LISTA
    setFavoritos(data); //ACTUALIZA 
    Alert.alert('Eliminado', `${nombre} fue eliminado de favoritos`);
  };

  return (
    <View style={styles.favoritos}>

      <ImageBackground
        source={require('../img/pokeballwpp.jpeg')} //IMAGEN DE FONDO
        resizeMode="cover" 
        style={{ flex: 1, width: '100%' }}
      >

        <Text style={[styles.text, { textAlign: 'center' }]}>Tus Favoritos :</Text>

        {favoritos.length === 0 ? (
          <Text style={styles.text}>No tienes favoritos</Text>
        ) : (
          <FlatList
            data={favoritos}
            keyExtractor={(item) => item.name}
            renderItem={({ item }) => (
              <View style={{ marginBottom: 20, alignItems: 'center' }}>
                <Image
                  source={{ uri: item.image }}
                  style={{ width: 200, height: 200 }}
                  resizeMode="contain"
                />
                <Text style={styles.text}>{item.name.charAt(0).toUpperCase() + item.name.slice(1)}</Text>

                <Button
                  title="Eliminar"
                  onPress={() => handleEliminar(item.name)}
                  color="#f57c00"
                />
              </View>
            )}
          />
        )}
      </ImageBackground>
    </View>
  );
}