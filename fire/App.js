import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Pressable } from 'react-native';
import { useState } from 'react';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { app } from './firebaseConfig';

export default function App() {
  const auth = getAuth(app);
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('')
  const setEmailandPassword = async() => {
    console.log("Inside")
    await createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        console.log(user)
      
        // ...
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage)
        // ..
    });
  }
  return (
    <View style={styles.container}>
    <View>
      <Text>Email</Text>
      <TextInput style={{borderWidth:3,borderColor:'black',width:100}} onChangeText={(e)=>setEmail(e)} />
    </View>
    <View>
      <Text>Password</Text>
      <TextInput style={{borderWidth:3,borderColor:'black',width:100}} onChangeText={(e)=>setPassword(e)}/>
    </View>
    <View>
      <Pressable onPress={setEmailandPassword}  style={{backgroundColor:"black",width:100,justifyContent:'center',alignItems:'center',padding:4,borderWidth:3,borderColor:'gray',borderRadius:25}} >
        <Text style={{color:'white'}}>Login</Text>
      </Pressable>
    </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    gap:10
  },
});
