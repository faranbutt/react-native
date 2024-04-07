import { View,Text, TextInput, Pressable, Touchable, TouchableOpacity, Image } from "react-native"
import {loginfields} from '../../helpers/constants'
import { useState } from "react"
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import { Fontisto } from '@expo/vector-icons';
import {formatDate} from '../../helpers/dateparse';
import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';

export default function LoginMid({setEmail, setPassword}){

    const setters = {
        'Email': setEmail,
        'Password': setPassword,
    };

    const Setter = (field,value) => {
        const setter = setters[field.value]
        if (setter){
            setter(value)
        }
    }

    return(
        <View className='bg-purple-400 w-full h-2/3 rounded-lg shadow-2xl' style={{shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 9,
        },
        shadowOpacity: 0.50,
        shadowRadius: 12.35,
        
        elevation: 19,}}>
            <View className='flex-1 flex-col p-2'>
                <View className='flex-1 justify-center'>
                    {loginfields.map(field=>(
                        <View key={field.id} className='bg-white m-1 rounded-full px-2 py-1 mb-2'>
                            <TextInput placeholder={field.value} onChangeText={(value)=>Setter(field,value)}/>                        
                        </View>
                    ))}
                </View>
            </View>
        </View>
    )
}