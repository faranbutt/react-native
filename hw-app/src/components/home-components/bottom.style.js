import { StyleSheet } from "react-native";
const bottomstyles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        gap:20
    },
    socialBox:{
        flexDirection:'row',
        gap:20

    },
    dividerContainer:{
        width:'100%',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
        alignSelf:'center',
        gap:20,
    },
    divider:{
        backgroundColor:'#87CEEB',
        width:'35%',
        height:'10%',
    }
})

export default bottomstyles;