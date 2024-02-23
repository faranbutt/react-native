import { View,Text,Image } from "react-native";
import bottomstyles from "./bottom.style";
import {useFonts} from 'expo-font';

export default function Bottom (){
    return (
        <View style={bottomstyles.container}>
           <View style={bottomstyles.dividerContainer}>
                <View style={bottomstyles.divider} />
                <Text style={{color:"#87CEEB"}}>OR</Text>
                <View style={bottomstyles.divider} />
           </View>
           <View style={bottomstyles.socialBox}> 
                <View>
                    <Image source={require('../../../assets/github.png')} />
                </View>
                <View>
                    <Image source={require('../../../assets/google.png')} />
                </View>
                <View>
                    <Image source={require('../../../assets/facebook2.png')} />
                </View>
           </View>
           <View>
                <Image source={require('../../../assets/madebyfaran.png')} />
           </View>
            
        </View>
    )
}