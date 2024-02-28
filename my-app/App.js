import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Home from './src/screens/home';
import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from "@react-navigation/native-stack"
import Support from './src/screens/Support';
import ConfettiCannon from 'react-native-confetti-cannon'
// import HomeScreen from './src/screens/homeScreen';

const Stack = createNativeStackNavigator()

function HomeScreen({navigation}) {
  const exploison = React.useRef()  
  return (
    <View style={styles.container}>
      <LinearGradient
      colors={['white','#87CEEB','white']}
      style={{ flex: 1 }}
      >
        <ConfettiCannon 
        count={200} 
        origin={{x: -10, y: 0}}
        ref={exploison}
        fadeOut={true}

        />
        <Home navigation={navigation} exploison={exploison} />
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
   
  },
});

export default function App(){
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} options={{header: () => null}} />
        <Stack.Screen name="Support" component={Support} options={{header: () => null}} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}



