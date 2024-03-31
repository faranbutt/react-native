import React from "react";
import { View,Text,Image} from "react-native";
import {profileStyles} from './profile.styles'
import {ProfileTop,ProfileMid,ProfileBottom} from "../../components/profile-components/exporter";
export default function Profile(){
    return (
        <View style={profileStyles.container}>
            <View >
                <Image source={require('../../../assets/background.png')} style={profileStyles.backImage}/>
            </View>
            <View style={profileStyles.innercontainer}>
                <View style={profileStyles.top}>
                    <ProfileTop />
                </View>
                <View style={profileStyles.mid}>
                    <ProfileMid />
                </View>
                <View style={profileStyles.bottom}>
                    <ProfileBottom />
                </View>
            </View>
        </View>
    );
}