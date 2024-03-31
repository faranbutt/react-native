import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View,Image } from 'react-native';
import { useState } from 'react';
import * as ImagePicker from 'expo-image-picker';
export default function App() {
  const [image,setImage] =  useState('')
  const OpenCamera =  () =>{
    ImagePicker.launchCameraAsync()
    .then((response)=>{
      if (response.canceled == false){
        setImage(response.assets[0].uri)
      }
    })
  }
  return (
    <View style={styles.container}>
      <Button title='take photo' onPress={OpenCamera} />
      {image ? (
        <Image source={{uri:image}} style={{height:200,width:200}} />
      ) : null }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
