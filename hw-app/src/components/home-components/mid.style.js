import { StyleSheet } from "react-native";

const midstyles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        gap:20
    },
    inputBox:{
        borderColor:'pink',
        borderWidth:2,
        paddingHorizontal:6,
        paddingVertical:4,
        width:180,
        borderRadius:25,
        backgroundColor:'white'
    },
    forgot:{
        marginLeft:10,
    },
    forgotText:{
        textDecorationLine:'underline'
    }
})

export default midstyles;