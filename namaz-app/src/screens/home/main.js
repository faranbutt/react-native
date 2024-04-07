import { Pressable, Button, Text, View } from "react-native";
import { getUserUID, removeUserUID } from "../../services/session";
import { useState, useEffect } from "react";
import Profile from "../../components/home-comp/profile";
import { Ionicons } from '@expo/vector-icons';

export default function Home({navigation}){
   async function remove(){
    await removeUserUID();
    const faran =  await getUserUID();
    console.log(faran)
   }

   const onProfileIconPressed = () => {
    navigation.navigate('Profile')
   }
    useEffect(() => {
        navigation.setOptions({
          headerRight: () => (
            <Ionicons name="person-circle-outline" size={24} color="black" onPress={onProfileIconPressed} />
          ),
        });
  }, [navigation]);

    return (
        <View>
            <Button title="remove" onPress={remove} />
        </View>
    );
}