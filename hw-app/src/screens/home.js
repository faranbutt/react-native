import {View,Text} from 'react-native'
import {Top,Mid,Bottom} from '../components/home-components/exporter';
import styles from './home.style';
export default function Home(){
    return (
        <View style={styles.container}>
            <View style={styles.top}>
                <Top />
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