import { StyleSheet } from "react-native";


supportMidStyles = StyleSheet.create({
    container:{
        flex:1,
        width:'100%',
        height:'100%',
    },
    headingContainer:{
        alignItems:"center",
    },
    heading:{
        marginTop:10,
        fontWeight:'300',
        fontSize:25
    },
    textAreaContainer:{
        alignItems:'center',
        paddingTop:10
    },
    textArea:{
        borderColor:'white',
        backgroundColor:"#95B5AD",
        borderWidth:2,
        width:'70%',
        borderRadius:50,
        justifyContent:'center',
        textAlign:'center',
    },
    submitButtonContainer: {
        alignItems:'center'
    }
    ,
    submitbutton:{
        backgroundColor:"#95B5AD",
        width:170,
        height:34,
        justifyContent:'center',
        alignItems:'center',
        borderColor:'#fff',
        borderWidth:2,
        borderRadius:10,
        marginTop:20
        
    }
}
)

export default supportMidStyles;