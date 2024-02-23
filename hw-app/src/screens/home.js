import {View,Text} from 'react-native'
import {Top,Mid,Bottom} from '../components/home-components/exporter';
import styles from './home.style';
export default function Home({navigation}){
    return (
        <View style={styles.container}>
            <View style={styles.top}>
                <Top  navigation={navigation} />
            </View>
            <View style={styles.mid}>
                <Mid />
            </View>
            <View style={styles.bottom}>
                <Bottom />
            </View>
        </View>
    );
}