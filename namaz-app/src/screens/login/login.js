import { View, Text, Button } from "react-native";
export default function Home({navigation}) {
    const NavigateToLoginPage = () => {

        navigation.navigate('Home')

    }
    return(
        <View className="flex-1 justify-center items-center">
            <Text>Login Screen</Text>
            <Button title="Home" onPress={NavigateToLoginPage} />
        </View>
    )
}