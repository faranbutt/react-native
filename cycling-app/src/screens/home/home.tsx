import React from "react";
import { View,Text,Image} from "react-native";
import { homeStyles } from "./home.style";
import {TopHome, MidHome, BottomHome} from "../../components/home-components/exporter";
export default function Home(){
    return (
        <View style={homeStyles.container}>
            <View >
                <Image source={require('../../../assets/background.png')} style={homeStyles.backImage}/>
            </View>
            <View style={homeStyles.innercontainer}>
                <View style={homeStyles.top}>
                    <TopHome />
                </View>
                <View style={homeStyles.mid}>
                    <MidHome />
                </View>
                <View style={homeStyles.bottom}>
                    <BottomHome />
                </View>
            </View>
        </View>
    );
}