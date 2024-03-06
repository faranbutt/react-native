import React from "react";
import { View, Text, Image } from "react-native";
import { bottomHomeStyles } from "./bottom.styles";
import { taskbarIcons } from "../../utils";
import { LinearGradient } from "expo-linear-gradient";
export default function BottomHome(){
    
    return (

        <View style={bottomHomeStyles.container}>
            
            <LinearGradient colors={['#4E4AF2','#34C8E8']} style={bottomHomeStyles.container}>
            <View style={{marginBottom:40}}>
                <Image source={require('../../../assets/Selected Button.png')}  />
            </View>
            <View style={{}}>
                <Image source={require('../../../assets/map.fill.png')}  />
            </View>
            <View style={{}}>
                <Image source={require('../../../assets/cart.fill.png')}  />
            </View>
            <View style={{}}>
                <Image source={require('../../../assets/person.fill.png')}  />
            </View>
            <View style={{marginRight:40}}>
                <Image source={require('../../../assets/doc.text.fill.png')}  />
            </View>
            </LinearGradient>
        </View>
    );
}