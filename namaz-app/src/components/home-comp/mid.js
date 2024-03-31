import { View,Text, TextInput, Pressable, Touchable, TouchableOpacity, } from "react-native"
import {fields} from '../../helpers/constants'
import { useState } from "react"
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import { Fontisto } from '@expo/vector-icons';
import {formatDate} from '../../helpers/dateparse';
import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function HomeMid({setFirstName  ,setLastName, setEmail, setPassword, setConfirmPassword, setGender, setDateofBirth, Gender}){

   
    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
    const [formatedDate,setformatedDate] = useState('')
    const setters = {
        'First Name': setFirstName,
        'Last Name': setLastName,
        'Email': setEmail,
        'Password': setPassword,
        'Confirm Password': setConfirmPassword,
        'date of Bith': setDateofBirth,
        'Gender': setGender,
    };

    const showDatePicker = () => {
        setDatePickerVisibility(true);
      };
    
      const hideDatePicker = () => {
        setDatePickerVisibility(false);
      };
    
      const handleConfirm = (date) => {
        console.warn("A date has been picked: ", date);
        hideDatePicker();
        setDateofBirth(date.toString())
        let fDate = formatDate(date)
        setformatedDate(fDate)
      };
    const Setter = (field,value) => {
        const setter = setters[field.value]
        if (setter){
            setter(value)
        }
    }

    return(
        <View className='bg-purple-400 w-full h-full rounded-lg shadow-2xl' style={{shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 9,
        },
        shadowOpacity: 0.50,
        shadowRadius: 12.35,
        
        elevation: 19,}}>
            <View className='flex-1 flex-col p-2'>
                <View className=' flex h-20 justify-center items-center rounded-t-lg'>
                    <View className='bg-white w-20 h-20  rounded-full justify-center items-center'>
                        <MaterialCommunityIcons name="face-recognition" size={24} color="purple" />
                    </View>
                </View>
                <View className='flex-1 justify-center'>
                    {fields.map(field=>(
                     field.value == 'Date of Birth' ? (
                        <View key={field.id} className='bg-white m-1 rounded-full px-2 py-1 mb-2 flex flex-row justify-between'>
                           <TextInput placeholder={field.value} onChangeText={(value)=>Setter(field,value)} value={formatedDate}/>
                           <Pressable onPress={showDatePicker}>
                                <Fontisto name="date" size={24} color="purple" />
                           </ Pressable>                     
                           <DateTimePickerModal
                                isVisible={isDatePickerVisible}
                                mode="date"
                                onConfirm={handleConfirm}
                                onCancel={hideDatePicker}
                            />
                        </View>
                     ) : (
                        field.value == "Gender" ? (
                            <View key={field.id} className='bg-white m-1 rounded-full px-2 py-1 mb-2 flex-row items-center justify-between'>
                                <Text>Gender</Text>
                                <View className="flex flex-row gap-5 mr-5">
                                    <View>
                                        <Text>Male</Text>
                                        <TouchableOpacity onPress={()=>setGender('male')}>
                                            <Ionicons name={Gender == 'male' ? 'radio-button-on': 'radio-button-off'} size={24} color="purple" />
                                        </TouchableOpacity>
                                    </View>
                                    <View>
                                        <Text>Female</Text>
                                        <TouchableOpacity onPress={()=>setGender('female')}>
                                            <Ionicons name={Gender == 'female' ? 'radio-button-on': 'radio-button-off'} size={24} color="purple" />
                                        </TouchableOpacity> 
                                    </ View> 
                                </View>
                                                    
                            </View>
                        ) : (
                            <View key={field.id} className='bg-white m-1 rounded-full px-2 py-1 mb-2'>
                                <TextInput placeholder={field.value} onChangeText={(value)=>Setter(field,value)}/>                        
                            </View>
                        )
                     )       
                    ))}
                </View>
            </View>
        </View>
    )
}