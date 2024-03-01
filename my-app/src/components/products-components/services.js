import { View,Text, Image } from "react-native"
import ServicesStyle from "./services.style"
const services = [
    {id:1,title:'Data Analysis',pic:require('../../../assets/dataanalysis.png')},
    {id:2,title:'Web Development',pic:require('../../../assets/ml.png')},
    {id:3,title:'Machine Learning',pic:require('../../../assets/mobiledev.png')}, 
    {id:4,title:"Content Writing",pic:require('../../../assets/webdev.png')}
]

const renderItem = ({item}) => (
    <View style={ServicesStyle.container}>
        <Image source={item.pic} style={ServicesStyle.img} />
    </View>
)


export {services,renderItem}
