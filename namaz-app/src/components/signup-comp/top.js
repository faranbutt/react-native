import { View,Text,Image } from "react-native"



export default function HomeTop(){
    return(
        <View class="w-20 bg-blue-500">
                <Text>Namaz Tracker</Text>
                <Image source={require('../../../assets/Quran.png')}/>
        </View>
    )
}