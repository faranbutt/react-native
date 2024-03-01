import { View,Text, Image,Pressable } from "react-native"
import { AntDesign } from '@expo/vector-icons';
import ProductsTopStyle from "./top.style"

export default function ProductsTop({navigation}){
    return (
        <View style={ProductsTopStyle.container}>
            <View style={supportTopStyles.homeiconContainer}>
                <Pressable onPress={() => navigation.navigate('Home')}>
                    <AntDesign name="left" size={40} color="purple" style={supportTopStyles.homeicon} />
                </Pressable>
            </View>
            <View>
                <Image source={require('../../../assets/products.png')} />
            </View>
        </View>
    )
}