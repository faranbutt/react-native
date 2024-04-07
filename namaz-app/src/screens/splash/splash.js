import React from 'react';
import { Image, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useEffect, useState } from 'react';
import { getUserUID } from '../../services/session';


export default function Splash({ navigation }) {
    useEffect(() => {
        handleUserIdFlow()
      }, [])
      
      const handleUserIdFlow = async() => {

          try{
              const uid = await getUserUID();      
              console.log("UID IN SPLASH",uid)
              setTimeout(()=>{
                if (!uid){
                  navigation.replace('Login')
              }
              else{
                navigation.replace('Home')
              }
              },3000)
          }catch(error){
              console.log(error.message)
          }
      }  
    return (
        <LinearGradient
          colors={['#8A2BE2', '#800080']} // Purple colors
          style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
        >
          <View style={{ padding: 20, backgroundColor: '#fff', borderRadius: 999 }}>
            <Image
              source={require('../../../assets/Quran.png')}
              style={{ width: 100, height: 100, resizeMode: 'contain' }}
            />
          </View>
        </LinearGradient>
  );
}
