import { View, Text, Button, Image, Pressable, Touchable, TouchableOpacity } from "react-native";
import LoginMid from "../../components/login-comp/mid";
import { useState, useEffect } from "react";
import { attemptToLogin } from "../../services/login-services";
import { setUserUID,getUserUID } from "../../services/session";


export default function Login({navigation}) {
    
    const [Email, setEmail] = useState('');
    const [Password, setPassword] = useState('');
    const [uid,SetUID] = useState(null);
    const [invalidemail,setinvalidemail] = useState(false);

    const Login = async() => {
        try{
            const response  = await attemptToLogin(Email,Password);
            UID = response.user.uid;
            await setUserUID(UID)
            navigation.replace("Home")
        }
        catch(error){
            setinvalidemail(true);
            console.log("Caught Error while loggin in")
            console.log(error.message)
        }
    }

    return(
        <View className="flex-1 w-screen h-screen">
            <View className="flex-[2] justify-end items-center mt-10" >
                <Text className='text-3xl font-extrabold text-purple-500'>Namaz Tracker</Text>
                <Image 
                source={require('../../../assets/Quran.png')} 
                style={{ width: '50%', height: '50%', resizeMode: 'contain' }} />
            </View>
            <View className="flex-[2] p-10">
                <LoginMid setEmail={setEmail} setPassword={setPassword} />
                {invalidemail && <View className='flex justify-center items-center mt-2'><Text className='text-red-500'>Invlaid Email or Password</Text></View>}
            </View>
            <View className="flex-[2] justify-start items-center gap-2">
                <TouchableOpacity activeOpacity={0.7} onPress={Login} className='bg-purple-400 px-10 py-3 rounded-xl' >
                    <Text className='text-white font-bold'>Login</Text>
                </TouchableOpacity>
                <View className='flex flex-row gap-2'>
                    <Text>Don't have an account?</Text>
                    <TouchableOpacity onPress={()=>navigation.navigate('Signup')}>
                        <Text className='text-purple-500'>Signup</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}