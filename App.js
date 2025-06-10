import { styles } from "./style/styles";
import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import Navigation from './navigation/Navigation';

export default function App() {
  return (
    <View style={styles.container}>
      <Navigation />
      <StatusBar style="dark" />
    </View>
  );
}
