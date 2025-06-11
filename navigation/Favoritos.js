import { View, Text, StyleSheet } from 'react-native';
import { styles } from "../style/styles";

export default function Settings() {
  return (
    <View style={styles.favoritos}>
      <Text style={styles.text}>No tienes favoritos</Text>
    </View>
  );
}

