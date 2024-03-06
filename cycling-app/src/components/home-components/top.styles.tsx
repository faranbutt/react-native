import { StyleSheet } from "react-native";

export const  topHomeStyles = StyleSheet.create({
    container:{
        flex:1,
        width:'100%',
        height:'100%',
        justifyContent:'center',
        alignItems:'center'
    
        
    },
    innercontainer:{
        width:'100%',
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        paddingHorizontal:10
        
    },
    heading:{
        fontWeight:'bold',
        color:'#fff',
        fontSize:20
        
    },
    search:{
        padding:5,
        borderRadius:10
    }
})