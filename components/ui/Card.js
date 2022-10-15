import {View,StyleSheet,Dimensions} from 'react-native';
import Colors from '../../constants/colors';
function Card ({children}) {
    return(

        <View style={styles.inputContainr}>{children}</View>
        
    )
}
export default Card;

const deviceWidth = Dimensions.get('window').width;
const styles = StyleSheet.create({

    inputContainr: {
        justifyContent: 'center',
        // alignItems:'stretch'
        alignItems: 'center',
        marginTop: deviceWidth<380?12:25,
        marginHorizontal: 24,
        padding: 16,
        backgroundColor: Colors.primary800,
        borderRadius: 8,
        elevation: 4,
        shadowColor: 'black',
        shadowRaduis: 6,
        shadowOpacity: 0.25,
    },
})