import { View,Text,Button,Pressable} from "react-native";
import { Image } from "react-native";
import topstyles from "./top.style";
export default function  Top({navigation}){
    return (
            <View style={topstyles.container}>
                <View style={{paddingTop:30,width:'100%',alignItems:'flex-end'}}>                    
                        <Pressable onPress={() => navigation.navigate('Support')}>
                           <Image source={require('../../../assets/support.png')} style={topstyles.support} />
                        </Pressable>
                </View>
                <View style={topstyles.imageBox}>
                    <Image source={require('../../../assets/faran.png')} style={topstyles.image} />
                </View>
            </View>
    )
}