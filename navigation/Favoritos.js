import { View, Text, FlatList, Image, TouchableOpacity, Alert } from 'react-native';
import { styles } from '../style/styles';
import { useFocusEffect } from '@react-navigation/native';
import { useCallback, useState } from 'react';
import { obtenerFavoritos, eliminarFavorito } from '../storage/FavoritosStorage';

export default function Favoritos() {
  const [favoritos, setFavoritos] = useState([]);

  useFocusEffect(
    useCallback(() => {
      const cargarFavoritos = async () => {
        const data = await obtenerFavoritos();
        setFavoritos(data);
      };

      cargarFavoritos();
    }, [])
  );

  const handleEliminar = async (nombre) => {
    await eliminarFavorito(nombre);
    const data = await obtenerFavoritos();
    setFavoritos(data);
    Alert.alert('Eliminado', `${nombre} fue eliminado de favoritos`);
  };

  return (
    <View style={styles.favoritos}>
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
                style={{ width: 100, height: 100 }}
                resizeMode="contain"
              />
              <Text style={styles.text}>{item.name}</Text>
              <TouchableOpacity onPress={() => handleEliminar(item.name)}>
                <Text style={{ color: 'red', marginTop: 5 }}>Eliminar</Text>
              </TouchableOpacity>
            </View>
          )}
        />
      )}
    </View>
  );
}