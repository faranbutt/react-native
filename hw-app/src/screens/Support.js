import { View,Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import {SupportTop,SupportMid,SupportBottom} from "../components/support-components/exporter";
import supportStyles from "./support.style";
export default function Support({navigation}){
    return (
        <View style={{width:'100%',height:'100%'}}>
           <LinearGradient
           colors={['white','#95B5AD','white']}
            style={{ flex: 1 }}
            >
                <View style={supportStyles.container}>
                    <View style={supportStyles.top}>
                        <SupportTop navigation={navigation} />
                    </View>
                    <View style={supportStyles.mid}>
                        <SupportMid />
                    </View>
                    <View style={supportStyles.bottom}>
                        <SupportBottom />
                    </View>
                </View>
            </LinearGradient>
        </View>
    );
}