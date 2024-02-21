import { View,Text,Image } from "react-native";
import bottomstyles from "./bottom.style";

export default function Bottom (){
    return (
        <View style={bottomstyles.container}>
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