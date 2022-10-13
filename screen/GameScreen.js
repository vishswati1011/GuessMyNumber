import {Text,StyleSheet,View,Alert} from 'react-native'
import Title from '../components/ui/Title';
import { useState } from 'react';
import NumberContainer from '../components/game/NumberContainer';
import PrimaryButton from '../components/ui/PrimaryButton';
function generateRandomBetween (min,max,exclude){

    const rndNum = Math.floor(Math.random()* (max-min))+min;

    if(rndNum === exclude)
    {
        return generateRandomBetween(min,max,exclude);
    }else{
        return rndNum;
    }
}

let minBoundary =1;
let maxBoundary = 100;
function GameScreen ({userNumber}) {

    const initialGuess = generateRandomBetween(1,100,userNumber)
    const [currentGuess,setCurrentGuess] =useState(initialGuess);
    console.log(userNumber,"GameScreen")
     
    function nextGuessHandler(direction) {
        console.log("direction")
        if(
            (direction==='lower' && currentGuess < userNumber)||
            (direction==='greater' && currentGuess > userNumber)
        )
        {
            Alert.alert("Don't lie","you know this is wrong...",[
                {text:'Sorry',style:'cancel'},
            ]);
            return;
        }
    
        if(direction === 'lower')
        {
            maxBoundary=currentGuess;
        }else{
            minBoundary=currentGuess+1;
        }
        const newRndNumber = generateRandomBetween(minBoundary,maxBoundary,currentGuess);
        setCurrentGuess(newRndNumber);
    
    }
    return (
    <View style={styles.screen}>
        <Title>Oponant's Guess</Title>
        <NumberContainer>{currentGuess}</NumberContainer>
           <View >
            <Text>Higher or Lower</Text>
            <View>
            <PrimaryButton onConfirmPress={nextGuessHandler.bind(this,'lower')}>-</PrimaryButton>
            <PrimaryButton onConfirmPress={nextGuessHandler.bind(this,'greater')}>+</PrimaryButton>
            </View>

        </View>
        {/* <View><Text>LOG Rounds</Text></View> */}
    </View>
    )
}

export default GameScreen;

const styles =StyleSheet.create ({
    screen:{
        flex:1,
        padding:24
    },
    
})