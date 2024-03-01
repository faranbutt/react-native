import { View,Text,FlatList } from "react-native"
import ProductsMidStyle from "./mid.style"
import { services,renderItem } from "./services"

export default function ProductsMid(){
    
    return (
        <View style={ProductsMidStyle.container}>
            <View style={ProductsMidStyle.heading}>
                <Text style={ProductsMidStyle.headingtext}>Our Services</Text>
            </View>
            <View style={ProductsMidStyle.gridlist}>
                <FlatList 
                data={services} 
                renderItem={renderItem} 
                keyExtractor={item => item.id}
                numColumns={2}
                />
            </View>
        </View>
    )
}