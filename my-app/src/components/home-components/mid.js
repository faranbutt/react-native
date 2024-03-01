import { View,Text, TextInput, TouchableOpacity, Pressable } from "react-native";
import { useState } from "react";
import midstyles from "./mid.style";
import {Ionicons} from '@expo/vector-icons'


export default function Mid ({exploison, navigation}){
    const [username,setUsername] = useState('username...')
    const [password,setPassword] = useState('#####')
    const [showPassword, setShowPassword] = useState(false)
    
    const navigateToProductsPage = () => {
        exploison.current.start();
        navigation.navigate('Products')
    }
    
    return (

        <View style={midstyles.container}>
            <View style={midstyles.inputBox}>
                <TextInput
                    style={midstyles.input}
                    onChangeText={text => setUsername(text)}
                    placeholder="Username"
                    value={username}

                />
            </View>
            <View>
                <View style={midstyles.inputBox}>
                    <TextInput
                        style={midstyles.input}
                        onChangeText={text => setPassword(text)}
                        placeholder="Password"
                        secureTextEntry={!showPassword}
                        value={password}
                    />
                    <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
                        <Ionicons name={showPassword ? 'eye-off' : 'eye'} size={24} color="black" />
                    </TouchableOpacity>
                </View>
            </View>
            <View>
                <Pressable style={midstyles.submitbutton} onPress={navigateToProductsPage}>
                    <Text style={{color:'#fff'}}>Submit Button</Text>
                </Pressable>
                <View style={midstyles.forgot}>
                    <Text style={midstyles.forgotText}>Forgot Password!</Text>
                </View>
            </View>
        </View>
    )
}