import {View,Text,StyleSheet} from 'react-native';
import Colors  from '../../constants/colors';

function NumberContainer ({children}) {

    return (
        <View style={styles.container}> 
            <Text style={styles.numberText}>{children}</Text>
        </View>
    )
}

export default NumberContainer;

const styles =StyleSheet.create({
    container :{
        borderWidth:4,
        borderColor:Colors.assent500,
        padding:24,
        borderRadius:8,
        margin:24,
        alignItems:'center',
        justifyContent:'center'
    },
    numberText:{
        color:Colors.assent500,
        fontSize:30,
        fontWeight:'bold'
    }
})