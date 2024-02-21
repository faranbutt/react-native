import { View,Text } from "react-native";
import { Image } from "react-native";
import topstyles from "./top.style";
export default function  Top(){
    return (
        <View style={topstyles.container}>
            <View style={topstyles.imageBox}>
                <Image source={require('../../../assets/faran.png')} style={topstyles.image} />
            </View>
        </View>
    )
}