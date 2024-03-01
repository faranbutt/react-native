import { View,Text,Image } from "react-native"
import ProductsBottomStyle from "./bottom.style"
export default function ProductsBottom(){
    return (
        <View style={ProductsBottomStyle.container}>
            <View style={ProductsBottomStyle.innercontainer}>
                <View >
                    <Image source={require('../../../assets/home2.png')} style={ProductsBottomStyle.home} />
                </View>
                <View >
                    <Image source={require('../../../assets/wallet.png')} style={ProductsBottomStyle.wallet} />
                </View>
                <View>
                    <Image source={require('../../../assets/profile.png')} style={ProductsBottomStyle.profile} />
                </View>
                <View >
                    <Image source={require('../../../assets/search.png')} style={ProductsBottomStyle.cart} />
                </View>
                <View >
                    <Image source={require('../../../assets/cart.png')} style={ProductsBottomStyle.search} />
                </View>
            </View>
        </View>
    )
}