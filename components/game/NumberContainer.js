import {View,Text,StyleSheet,Dimensions} from 'react-native';
import Colors  from '../../constants/colors';

function NumberContainer ({children}) {

    return (
        <View style={styles.container}> 
            <Text style={styles.numberText}>{children}</Text>
        </View>
    )
}

export default NumberContainer;

const deviceWidth =Dimensions.get("window").width;
const styles =StyleSheet.create({
    container :{
        borderWidth:4,
        padding:deviceWidth<380?12:14,
        borderRadius:8,
        margin:deviceWidth<380?12:12,
        width:80,
        alignItems:'center',
        justifyContent:'center',
        borderColor:Colors.accent500,
    },
    numberText:{
        color:Colors.accent500,
        fontSize:deviceWidth<380?28:36,
        fontWeight:'bold'
    }
})