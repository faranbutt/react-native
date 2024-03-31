import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/screens/home/home';
import Login from './src/screens/login/login';
const Stack = createNativeStackNavigator();


export default function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} options={{header: () => null}} />
      <Stack.Screen name="Login" component={Login} options={{header: () => null}} />
    </Stack.Navigator>
  </NavigationContainer>
  );
}

