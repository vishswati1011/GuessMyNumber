import {StyleSheet,Text,Platform} from 'react-native'

function Title ({children}) {
    return <Text style={styles.title}>{children}</Text>
}

export default Title;

const styles =StyleSheet.create({
    title:{
        fontSize:18,
        fontWeight:'bold',
        color:'white',
        textAlign:'center',
        borderWidth:Platform.OS === 'android' ? 0:2,
        // borderWidth : Platform.select({ios:0 ,android: 2}),
        borderColor:'white',
        padding:12
    }
})