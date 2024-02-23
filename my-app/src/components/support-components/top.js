import { View, Text, Image, Pressable } from "react-native";
import { AntDesign } from '@expo/vector-icons';

import supportTopStyles from "./top.style";
export default function SupportTop({navigation}){
    return (
        <View style={supportTopStyles.container} >
            <View style={supportTopStyles.homeiconContainer}>
                <Pressable onPress={() => navigation.navigate('Home')}>
                    <AntDesign name="left" size={40} color="#95B5AD" style={supportTopStyles.homeicon} />
                </Pressable>
            </View>
            <View style={supportTopStyles.supportPersonContainer}>
                <Image source={require('../../../assets/supportPerson.png')} style={supportTopStyles.supportPerson} />
            </View>
        </View>
    )
}