import {View,Image,StyleSheet,Text} from 'react-native';
import PrimaryButton from '../components/ui/PrimaryButton';
import Title from '../components/ui/Title';
import Colors from '../constants/colors';
function GameOverScreen ({roundsNumber,userNumber,onStartNewGame}) {
    return(

        <View style={styles.rootContainer}>
            <Title>GAME OVER</Title>
            <View style={styles.imageContainer}>
            <Image style={styles.image} source={require('../assest/success.png')}/>
            </View>
            <View>
                <Text style={styles.summaryText}> Your phone need {' '}
                <Text style={styles.highlight}>{roundsNumber}</Text> {' '}
                rounds to guess the number {' '}
                <Text style={styles.highlight}>{userNumber}.</Text></Text>

                <PrimaryButton onConfirmPress={onStartNewGame}>Start New Game</PrimaryButton>
            </View>
        </View>
    )
}
export default GameOverScreen;

const styles= StyleSheet.create({

    rootContainer:{
        flex:1,
        padding:24,
        justifyContent:'center',
        alignContent:'center'
    },
    imageContainer:{
        width:300,
        height:300,
        borderRadius:150,
        borderWidth:3,
        borderColor:Colors.primary800,
        overflow:'hidden',
        margin:36
    },
    image:{
        width:'100%',
        height:'100%'
    },
    summaryText:{
        // color:Colors.accent500
        fontSize:20,
        textAlign:'center',
        marginBottom:24,
        
    },
    highlight:{
        fontSize:20,
        color:Colors.primary500
    }
})
