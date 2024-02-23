import { View, Text } from "react-native";
import supportBottomStyles from "./bottom.style";
export default function SupportBottom(){
    return (
        <View style={supportBottomStyles.container}>
            <Text style={supportBottomStyles.firstText}>
                Need Additional Support!
            </Text>
            <Text style={supportBottomStyles.secondText}>
                Check out our <Text style={supportBottomStyles.secondTextInsider}>FAQ</Text>
            </Text>
        </View>
    )
}