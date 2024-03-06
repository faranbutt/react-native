import React from "react"
import { View,Text, Image, FlatList, Pressable } from "react-native"
import { itemsStyles } from "./items.styles"
import { AntDesign } from '@expo/vector-icons';
import { LinearGradient } from "expo-linear-gradient";
import { BlurView } from 'expo-blur';
import { useState } from "react";

const services = [
    {id:1,title:'Road Bike',model:'PEUGEOT-LR01',price:"$1,999.99",pic:require('../../../../assets/item1.png'),heart:require('../../../../assets/Vector.png'),heartClicked:false},
    {id:2,title:'Road Helmet',model:'SMITH-Trade',price:"$120",pic:require('../../../../assets/item2.png'),heart:require('../../../../assets/Vector.png'),heartClicked:false},
]



export default function List() {
    const [items, setItems] = useState(services);
    const [rerender, setRerender] = useState(false);
    const heartClickFunction = (itemId: number) => {
        setItems(items => (
            items.map(item => {
                if (item.id === itemId) {
                    console.log(itemId)
                    const faran =  { ...item, heartClicked: !item.heartClicked };
                    console.log(!item.heartClicked)
                    console.log(faran)
                    return faran
                }
                else{
                    return item;
                }
            })
        ))
        setRerender(prev => !prev);
    };
const renderItem = ({item}:{item:{id:number,title:string,model:string,price:'string',pic:any,heart:any,heartClicked:boolean}}) => {

    return( 
    <LinearGradient 
                       colors={['#34CAE8','rgba(53, 63, 84, 0.6)', 'rgba(34, 40, 52, 0.6)']}
                        start={{x: 0, y: 0}}
                        end={{x: 1, y: 1}}
                        style={itemsStyles.container}
                        >
     <BlurView
                            intensity={10}
                            tint="dark"
                            style={itemsStyles.shadowProp}
                            >
        <View style={itemsStyles.heart}>
            <Pressable onPress={() => heartClickFunction(item.id)}>
                <AntDesign name="hearto" size={24} color={item.heartClicked === true ? 'red' : "white"} />
            </Pressable>
        </View>
        <View>
            <Image source={item.pic} />
        </View>
        <View style={{marginBottom:3}}>
            <Text style={{color:'#a7aaaf'}}> {item.title} </Text>
            <Text style={{color:'white',fontSize:15,fontWeight:'bold'}}> {item.model} </Text>
            <Text style={{color:'#a7aaaf'}}> {item.price} </Text>
        </View>
    </BlurView>
    </LinearGradient>
);
}

return (
    <View>
        <FlatList
        data={services} 
        renderItem={renderItem} 
        numColumns={2}
        keyExtractor={item => item.id}
  
        />
    </View>
); 
}