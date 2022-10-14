import { View, TextInput, StyleSheet, Alert,Text } from 'react-native'
import PrimaryButton from '../components/ui/PrimaryButton';
import { useState } from 'react';
import Colors from '../constants/colors'
import Title from '../components/ui/Title';
import Card from '../components/ui/Card'
function StrtGameScreen({onPickNumber}) {

    const  [enteredNumber,setEnteredNumber]= useState('');

    function numberInputHandler (enteredText) {
        setEnteredNumber(enteredText)
    }
    function resetInputHandler (){
        setEnteredNumber('');
    }
    function confirmInputHandler () {
        const chosenNumber = parseInt(enteredNumber);

        if(isNaN(chosenNumber)|| chosenNumber<=0 || chosenNumber>99)
        {
            Alert.alert('Invalid Number',"Number has to a number between 1 and 99.",
            [{text:'Okay',style:'destructive',onPress:resetInputHandler}])
            return;
        }
        onPickNumber(chosenNumber);
    }
    return (
        <View style={styles.rootContainer}>
            <Title> Guess My Number</Title>
        {/* <View style={styles.inputContainr}> */}
        <Card>
            <Text style={styles.instructionText}>Enter a Number</Text>
            <TextInput
                style={styles.numberInput}
                maxLength={2}
                keyboardType="number-pad"
                autoCapitalize="none"
                autoCorrect={false}
                onChangeText={numberInputHandler}
                value={enteredNumber}
            />

            <View style={styles.buttonsContainer}>
                <View style={styles.buttonContainer}>
                    <PrimaryButton onConfirmPress={resetInputHandler}>Reset</PrimaryButton>
                </View>
                <View style={styles.buttonContainer}>
                    <PrimaryButton onConfirmPress={confirmInputHandler}>Confirm</PrimaryButton>
                </View>
            </View>
            </Card>
        {/* </View> */}
        </View>
    )
}

export default StrtGameScreen;

const styles = StyleSheet.create({

    rootContainer :{
        flex:1,
        marginTop:100,
        alignItems:'center'
    },
    instructionText:{
        color:Colors.accent500,
        fontSize:20

    },
    inputContainr: {
        justifyContent: 'center',
        // alignItems:'stretch'
        alignItems: 'center',
        marginTop: 50,
        marginHorizontal: 24,
        padding: 16,
        backgroundColor: Colors.primary800,
        borderRadius: 8,
        elevation: 4,
        shadowColor: 'black',
        shadowRaduis: 6,
        shadowOpacity: 0.25,
    },
    numberInput: {
        height: 60,
        width: 50,
        fontSize: 32,
        borderBottomColor: Colors.accent500,
        borderBottomWidth: 2,
        color: Colors.accent500,
        marginVertical: 8,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    buttonsContainer: {
        flexDirection: 'row'
    }
    ,buttonContainer :{
        flex:1
    }

})