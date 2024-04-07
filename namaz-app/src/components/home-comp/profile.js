import { View, Text , Pressable} from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import React from 'react'


export default function Profile() {
  return (
    <View>
      <Pressable >
        <Ionicons name="person-circle-outline" size={24} color="black" />
      </Pressable>
    </View>
  )
}