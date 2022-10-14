import {Text,StyleSheet,View,Alert, FlatList} from 'react-native'
import Title from '../components/ui/Title';
import { useEffect, useState } from 'react';
import NumberContainer from '../components/game/NumberContainer';
import PrimaryButton from '../components/ui/PrimaryButton';
import Card from '../components/ui/Card';
import InstructionText from '../components/ui/InstructionaText';
import GuessLogItem from '../components/game/GuessLogItem';
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
function GameScreen ({userNumber,onGameOver}) {

    const initialGuess = generateRandomBetween(1,100,userNumber)
    const [currentGuess,setCurrentGuess] =useState(initialGuess);
    const [guessRouds,setGuessRounds]=useState([initialGuess])
    console.log(userNumber,"GameScreen")
     
    useEffect (()=>{
        console.log("Effect",currentGuess===userNumber,currentGuess, userNumber)

        if(currentGuess===userNumber)
        {
            onGameOver(guessRouds.length);
        }
    },[currentGuess,userNumber,onGameOver])

    
    useEffect (()=>{
        minBoundary =1;
        maxBoundary = 100;
    },[])

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
        setGuessRounds(prevGuessRounds =>[newRndNumber,...prevGuessRounds])
    }

    var guessRoudsListLength = guessRouds.length;
    return (
    <View style={styles.screen}>
        <Title>Oponant's Guess</Title>
        <NumberContainer>{currentGuess}</NumberContainer>
           <Card >
            <InstructionText style={styles.instructionText}>Higher or Lower</InstructionText>
            <View style={styles.buttonsContainer}>
                <View style={styles.buttonContainer}>
                    <PrimaryButton onConfirmPress={nextGuessHandler.bind(this,'lower')}>
                        -</PrimaryButton>
                </View>
                <View style={styles.buttonContainer}>
                    <PrimaryButton onConfirmPress={nextGuessHandler.bind(this,'greater')}>+</PrimaryButton>
                </View>
            </View>
        </Card>
        <View style={styles.listContainer}>
            {/* {guessRouds.map(guessRound => <Text key={guessRound}>{guessRound}</Text>)}  //when we have limited item */}
            <FlatList 
            data={guessRouds}
            renderItem={(itemData)=>
                <GuessLogItem roundNumber={guessRoudsListLength - itemData.index} 
            guess={itemData.item}/>}
            keyExtractor={(item)=>item}
            />
        </View>
    </View>
    )
}

export default GameScreen;

const styles =StyleSheet.create ({
    screen:{
        flex:1,
        padding:24
    },
    buttonsContainer: {
        flexDirection: 'row'
    }
    ,buttonContainer :{
        flex:1
    },
    instructionText:{
        marginBottom:12
    },
    listContainer : {
        flex:1,
        padding:16
    }
})