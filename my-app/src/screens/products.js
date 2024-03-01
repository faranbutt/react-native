import { View, Text } from "react-native";
import ProductsStyle from "./products.style";
import { LinearGradient } from "expo-linear-gradient";
import {ProductsTop,ProductsMid, ProductsBottom} from "../components/products-components/exporter";


export default function Products({navigation}){
    return (
        <View style={ProductsStyle.container} >
            <LinearGradient
           colors={['white','#E7D1C9','white']}
            style={{ flex: 1 }}
            >
                <View style={ProductsStyle.innercontainer}>
                    <View style={ProductsStyle.top}>
                        <ProductsTop navigation={navigation} />
                    </View>
                    <View style={ProductsStyle.mid}>
                        <ProductsMid />
                    </View>
                    <View style={ProductsStyle.bottom}>
                        <ProductsBottom />
                    </View>
                </View>
            </LinearGradient>
        </View>

    );
}