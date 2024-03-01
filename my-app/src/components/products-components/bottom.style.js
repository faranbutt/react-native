import { StyleSheet } from "react-native";


const ProductsBottomStyle = StyleSheet.create({
    container:{
        flex:1,
        width:"100%",
        height:'100%',
    },
    innercontainer:{
        flex:1,
        flexDirection:"row",
        justifyContent:'space-between',
        alignItems:'flex-end',
        paddingBottom:2,
        paddingHorizontal:5,
        width:'100%',
        height:'100%',
        backgroundColor:"purple",
        borderTopColor:"purple",
        borderTopWidth:3,
        borderTopStartRadius:20,
        borderTopEndRadius:20,
        borderRightColor:'purple',
        borderRightWidth:3,
        borderLeftColor:'purple',
        borderLeftWidth:3
        // borderWidth:5,
        // borderColor:'#FF1493',
        // borderRadius:20
    },
    home:{
        width:50,
        height:50
    },
    wallet:{
        width:50,
        height:50
    },
    profile:{
        width:70,
        height:70,
        borderRadius:100,
        backgroundColor:'purple',
        margin:6,
   

    },
    cart:{
        width:50,
        height:50
    },
    search:{
        width:50,
        height:50
    }
})

export default ProductsBottomStyle;