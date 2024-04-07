import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View,Pressable } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Signup from './src/screens/signup/signup';
import Login from './src/screens/login/login';
import Home from './src/screens/home/main';
import Splash from './src/screens/splash/splash';
import Profile from './src/components/home-comp/profile';
import ProfileScreen from './src/screens/profile/profile';

const Stack = createNativeStackNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Splash" component={Splash} options={{header: () => null}} />
        <Stack.Screen name="Signup" component={Signup} options={{header: () => null}} />
        <Stack.Screen name="Login" component={Login} options={{header: () => null}} />
        <Stack.Screen name="Home" component={Home} options={{ headerShown: true}} />
        <Stack.Screen name="Profile" component={ProfileScreen}  />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}

