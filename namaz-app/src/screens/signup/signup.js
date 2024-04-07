import { View, Text, Button, Image, Pressable, Touchable, TouchableOpacity } from "react-native";
import {HomeTop,HomeMid,HomeBottom} from '../../components/signup-comp/exporter'
import { useState } from "react";
import * as ImagePicker from 'expo-image-picker';
import { attemptToSignup, attemptToSendUsersData, attempttoUploadImage } from "../../services/signup-services";
import { setUserUID } from "../../services/session";


export default function Signup({navigation}) {
    const [FirstName, setFirstName] = useState('');
    const [LastName, setLastName] = useState('');
    const [Email, setEmail] = useState('');
    const [Password, setPassword] = useState('');
    const [ConfirmPassword, setConfirmPassword] = useState('');
    const [dateOfBith, setDateofBirth] = useState('');
    const [Gender, setGender] = useState('female');
    const [profileimage,setImage] = useState(null);


    const Signup = async() => {
        const res = await attemptToSignup(Email,Password);
        const UID = await res.user.uid
        console.log("UIDDD",UID)
        const res2 = await attemptToSendUsersData(UID,FirstName,LastName,Email,dateOfBith,Gender)
        console.log("COCK",res2);
        const res3 = attempttoUploadImage(UID,profileimage)
        console.log("Image",res3)
        await setUserUID(UID)
        navigation.replace('Home')

    }
    const NavigateToLoginPage = () => {
        navigation.navigate('Login')

    }
    return(
        <View className="flex-1 w-screen h-screen">
            <View className="flex-[1] justify-end items-center mt-10" >
                <Text className='text-3xl font-extrabold text-purple-500'>Namaz Tracker</Text>
                <Image 
                source={require('../../../assets/Quran.png')} 
                style={{ width: '50%', height: '50%', resizeMode: 'contain' }} />
            </View>
            <View className="flex-[4] p-10">
                <HomeMid profileimage={profileimage} setImage={setImage} setFirstName={setFirstName}  setLastName={setLastName} setEmail={setEmail} setPassword={setPassword} setConfirmPassword={setConfirmPassword} setGender={setGender} setDateofBirth={setDateofBirth}  Gender={Gender} />
            </View>
            <View className="flex-[1] justify-center items-center gap-2">
                <TouchableOpacity activeOpacity={0.7} onPress={Signup} className='bg-purple-400 px-10 py-3 rounded-xl' >
                    <Text className='text-white font-bold'>Sign up</Text>
                </TouchableOpacity>
                <View className='flex flex-row gap-2'>
                    <Text>Already have an account?</Text>
                    <TouchableOpacity onPress={()=>navigation.navigate('Login')}>
                        <Text className='text-purple-500'>Login</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}