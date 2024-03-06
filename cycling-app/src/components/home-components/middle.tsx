import React from "react";
import { View, Text,Image } from "react-native";
import { midHomeStyles } from "./middle.styles";
import { LinearGradient } from "expo-linear-gradient";
import { BlurView } from 'expo-blur';
import Scroll from "./subcomponents/Scroller";


export default function MidHome(){
    const buttons = [
        {
        id:1,
        link:require('../../../assets/All.png'),
        padding:10
        },
        {
            id:2,
            link:require('../../../assets/bolt.batteryblock.fill.png'),
            padding:20
        },
        {
            id:3,
            link:require('../../../assets/Road.png'),
            padding:30
        },
        {
            id:4,
            link:require('../../../assets/Union.png'),
            padding:40
        },
        {
            id:5,
            link:require('../../../assets/helmet.png'),
            padding:50

        },

]

    return (
        <View style={midHomeStyles.container}>
            <View style={midHomeStyles.innercontainer1}>
                <View style={midHomeStyles.Bikecontiner}>
                    <View style={midHomeStyles.bike}>
                        <LinearGradient 
                       colors={['#34CAE8','rgba(53, 63, 84, 0.6)', 'rgba(34, 40, 52, 0.6)']}
                        start={{x: 0, y: 0}}
                        end={{x: 1, y: 1}}
                        style={{flex:2,borderRadius:40,shadowColor:'white',shadowOffset:{width:4,height:2}}}
                        >
                            <BlurView
                            intensity={10}
                            tint="dark"
                            style={midHomeStyles.shadowProp}
                            >
                                <Image source={require('../../../assets/bike1.png')} />
                            </BlurView>
                            <BlurView
                            intensity={10}
                            tint="dark"
                            style={{flex:1,justifyContent:'flex-end',height:30}}
                            >
                                <Text style={{marginBottom:10,marginLeft:20,fontSize:45,fontWeight:'100',color:'#a7aab0'}}>30% Off</Text>
                            </BlurView>
                            

                        </LinearGradient>
                    </View>
                    <View></View>
                    
                </View>
            </View>
            <View style={midHomeStyles.innercontainer2}>
                <View style={{flex:1,width:'80%',flexDirection:'row',height:'40%',justifyContent:'space-evenly',alignItems:'center'}}>
                    {
                        buttons.map((button)=>(
                            <View style={{}} key={button.id}>
                                <LinearGradient
                                colors={['#353F54','#222834']}
                                style={{padding:1,borderRadius:10, width:50,height:50,justifyContent:'center',alignItems:'center',marginBottom:button.padding}}

                                >
                                     <Image source={button.link} />
                                </LinearGradient>
                            </View>
                        ))
                    }
                </View>
            </View>
            <View style={midHomeStyles.innercontainer3}>
                <Scroll />
            </View>
        </View>
    );
}