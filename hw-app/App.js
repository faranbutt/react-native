import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Home from './src/screens/home';
export default function App() {
  return (
    <View style={styles.container}>
      <LinearGradient
      colors={['white','#87CEEB','white']}
      style={{ flex: 1 }}
      >
        <Home />
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
   
  },
});
