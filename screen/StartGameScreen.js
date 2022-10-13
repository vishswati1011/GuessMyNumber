import { View, TextInput, StyleSheet } from 'react-native'
import PrimaryButton from '../components/PrimaryButton';
import { useState } from 'react';
function StrtGameScreen() {

    const  [enteredNumber,setEnteredNumber]= useState('');

    function numberInputHandler (enteredText) {
        setEnteredNumber(enteredText)
    }
    function confirmInputHandler () {
        
    }
    return (
        <View style={styles.inputContainr}>
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
                    <PrimaryButton>Reset</PrimaryButton>
                </View>
                <View style={styles.buttonContainer}>
                    <PrimaryButton onConfirmPress={confirmInputHandler}>Confirm</PrimaryButton>
                </View>
            </View>

        </View>
    )
}

export default StrtGameScreen;

const styles = StyleSheet.create({
    inputContainr: {
        justifyContent: 'center',
        // alignItems:'stretch'
        alignItems: 'center',
        marginTop: 100,
        marginHorizontal: 24,
        padding: 16,
        backgroundColor: '#72063c',
        borderRadius: 8,
        elevation: 4,
        shadowColor: 'black',
        shadowRaduis: 6,
        shadowOpacity: 0.25,
    },
    numberInput: {
        height: 50,
        width: 50,
        fontSize: 32,
        borderBottomColor: '#ddb52f',
        borderBottomWidth: 2,
        color: '#ddb52f',
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