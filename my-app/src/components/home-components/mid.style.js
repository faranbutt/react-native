import { StyleSheet } from "react-native";

const midstyles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        gap:20,
    },
    inputBox:{
        borderColor:'white',
        borderWidth:1,
        paddingHorizontal:6,
        paddingVertical:4,
        width:180,
        borderRadius:25,
        backgroundColor:'white',
        flexDirection:'row',
        justifyContent:'space-between'
    },
    forgot:{
        alignItems:'flex-end',
    },
    forgotText:{
        textDecorationLine:'underline',
        color:'gray'
    },
    submitbutton:{
        backgroundColor:"#87CEEB",
        width:170,
        height:34,
        justifyContent:'center',
        alignItems:'center',
        borderColor:'#fff',
        borderWidth:2,
        borderRadius:10
        
    }
})

export default midstyles;