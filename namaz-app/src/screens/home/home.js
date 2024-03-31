import { View, Text, Button, Image, Pressable, Touchable, TouchableOpacity } from "react-native";
import {HomeTop,HomeMid,HomeBottom} from '../../components/home-comp/exporter'
import { useState } from "react";
export default function Home({navigation}) {
    const [FirstName, setFirstName] = useState('');
    const [LastName, setLastName] = useState('');
    const [Email, setEmail] = useState('');
    const [Password, setPassword] = useState('');
    const [ConfirmPassword, setConfirmPassword] = useState('');
    const [dateOfBith, setDateofBirth] = useState('');
    const [Gender, setGender] = useState('female');

    const Signup = () => {
        setFirstName('');
        setLastName('');
        setEmail('');
        setPassword('');
        setConfirmPassword('');
        setDateofBirth('');
        setGender('');
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
                <HomeMid setFirstName={setFirstName}  setLastName={setLastName} setEmail={setEmail} setPassword={setPassword} setConfirmPassword={setConfirmPassword} setGender={setGender} setDateofBirth={setDateofBirth}  Gender={Gender} />
            </View>
            <View className="flex-[1] justify-center items-center">
                <TouchableOpacity activeOpacity={0.7} onPress={Signup} className='bg-purple-400 px-10 py-3 rounded-xl' >
                    <Text className='text-white font-bold'>Sign up</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}