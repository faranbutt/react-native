import React from "react";
import { View, Text } from "react-native";
import { topHomeStyles } from "./top.styles";
import { EvilIcons } from '@expo/vector-icons';
import { LinearGradient } from "expo-linear-gradient";
export default function TopHome(){
    return (
        <View style={topHomeStyles.container}>
            
                <View style={topHomeStyles.innercontainer}>
                    <View >
                        <Text style={topHomeStyles.heading}>Choose your Bike</Text>
                    </View>
                    <View>
                        <LinearGradient
                        colors={['#34C8E8', '#4E4AF2']}
                        style={topHomeStyles.search}
                        >
                            <EvilIcons name="search" size={30} color="#fff" />
                        </LinearGradient>
                    </View>
                </View>
        </View>
    );
}