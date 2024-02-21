import { View,Text } from "react-native";
import { TextInput } from "react-native";
import { useState } from "react";
import midstyles from "./mid.style";

export default function Mid (){
    const [username,setUsername] = useState('username...')
    const [password,setPassword] = useState('#####')
    
    return (
        <View style={midstyles.container}>
            <View style={midstyles.inputBox}>
                <TextInput
                    style={midstyles.input}
                    onChangeText={text => setUsername(text)}
                    placeholder="Username"
                />
            </View>
            <View>
                <View style={midstyles.inputBox}>
                    <TextInput
                        style={midstyles.input}
                        onChangeText={text => setPassword(text)}
                        placeholder="Password"
                    />
                </View>
                <View style={midstyles.forgot}>
                    <Text style={midstyles.forgotText}>Forgot Password!</Text>
                </View>
            </View>
        </View>
    )
}