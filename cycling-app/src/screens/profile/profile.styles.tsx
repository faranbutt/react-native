import { StyleSheet } from "react-native";

export const  profileStyles = StyleSheet.create({
    container:{
        flex:1,
        width:'100%',
        height:'100%',
        backgroundColor:'#242c3b',
        
    },
    backImage:{
        resizeMode:'cover',
        marginTop:100,
        marginLeft:50
       
    },
    innercontainer:{
        flex:1,
        position: 'absolute',
        width: '100%',
        height: '100%',
    
    },
    top:{
        flex:0.9,
    },
    mid:{
        flex:4.6,
   
    },
    bottom:{
        flex:0.5,
       backgroundColor:'blue'
    }
})