import { useState } from "react";
import { View, StyleSheet, TextInput, Alert } from "react-native"
import PrimaryButton from "../components/PrimaryButton"

const StartGameScreen = () => {
    const [number, setNumber] = useState('');

    const resetNumberHandler = () => {
        setNumber('')
    }
    const confirmNumberHandler = () => {
        const enteredNumber = Number(number)
        console.log(enteredNumber)
        if(isNaN(enteredNumber) || enteredNumber <= 0 || enteredNumber > 99) {
            Alert.alert(
                'Invalid Number!',
                'Please enter a valid number between 1 to 99',
                [{
                    text: "Ok",
                    onPress: resetNumberHandler,
                    style: "destructive"
                  },]
            )
        }
    }
    const numberHandler = (enteredNumber) => {
        setNumber(enteredNumber)
    }
    return (
    <View style={styles.rootContainer}>
        <View style={styles.inputContainer}>
            <TextInput 
            style={styles.input}
            maxLength={2}
            keyboardType="number-pad"
            value={number}
            onChangeText={numberHandler}/>
        </View>
        <View style={styles.buttonContainer}>
            <View>
                <PrimaryButton 
                title="Reset"
                onPress={resetNumberHandler}/>
            </View>
            <View>
                <PrimaryButton 
                title="Confirm"
                onPress={confirmNumberHandler}/>
            </View>
        </View>
    </View>
    )
}
const styles = StyleSheet.create({
    rootContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#7f306b'
    },
    buttonContainer: {
        flexDirection: 'row'
    },
    inputContainer: {
        padding: 10
    },
    input: {
        borderBottomColor: '#f7e200',
        borderBottomWidth: 3,
        textAlign: 'center',
        padding: 5,
        fontSize: 30,
        fontWeight: 'bold',
        color: '#f7e200',
        width: 50,
    }
})

export default StartGameScreen