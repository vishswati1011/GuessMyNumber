import {View,Image,StyleSheet,Text,useWindowDimensions,ScrollView} from 'react-native';
import PrimaryButton from '../components/ui/PrimaryButton';
import Title from '../components/ui/Title';
import Colors from '../constants/colors';
function GameOverScreen ({roundsNumber,userNumber,onStartNewGame}) {

    const {width, height} =useWindowDimensions ();
    let imageSize = 300;

    if(width < 380 ){
        imageSize = 150;
    }

    if (height < 400){
        imageSize =80
    }

    const imageStyle = {
        width :imageSize,
        height: imageSize ,
        borderRadius :imageSize /2
    };
    return(
        <ScrollView style={styles.screen}>
        <View style={styles.rootContainer}>
            <Title>GAME OVER</Title>
            <View style={[styles.imageContainer,imageStyle]}>
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
        </ScrollView>
    )
}
export default GameOverScreen;

// const deviceWidth = Dimensions.get('window').width; 
const styles= StyleSheet.create({
    screen :{
        flex:1
    },
    rootContainer:{
        flex:1,
        padding:24,
        justifyContent:'center',
        alignItems:'center'
    },
    imageContainer:{
        // width:deviceWidth < 380 ? 150 : 300,
        // height:deviceWidth < 350 ? 150 : 300,
        // borderRadius:deviceWidth < 380 ? 75 : 150,
        borderWidth:3,
        borderColor:Colors.primary800,
        alignItems:'center',
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
