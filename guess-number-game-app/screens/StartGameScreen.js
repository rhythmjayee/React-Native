import { useState } from "react";
import { View, StyleSheet, TextInput, Alert } from "react-native"
import PrimaryButton from "../components/PrimaryButton"

import Colors from "../constants/color";
import Title from "../components/Title";

const StartGameScreen = ({addUserSelectedNumber}) => {
    const [number, setNumber] = useState('');

    const resetNumberHandler = () => {
        setNumber('')
    }
    const confirmNumberHandler = () => {
        const enteredNumber = Number(number)
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
            return
        }
        addUserSelectedNumber(enteredNumber)
    }
    const numberHandler = (enteredNumber) => {
        setNumber(enteredNumber)
    }
    return (
    <View style={styles.container}>
        <Title vstyle={styles.titleV} tstyle={styles.title}>Guess the Number</Title>
        <View style={styles.rootContainer}>
            <View style={styles.inputContainer}>
                <View>
                    <Title vstyle={styles.headingV} tstyle={styles.heading}>Enter the Number</Title>
                </View>
                <View>
                    <TextInput 
                    style={styles.input}
                    maxLength={2}
                    keyboardType="number-pad"
                    value={number}
                    onChangeText={numberHandler}/>
                </View>
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
    </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    rootContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.primary500,
        padding: 30,
        borderRadius: 15,
    },
    buttonContainer: {
        flexDirection: 'row'
    },
    inputContainer: {
        padding: 10,
        justifyContent: 'space-evenly',
        alignItems: 'center',
    },
    input: {
        borderBottomColor: Colors.secondary500,
        borderBottomWidth: 3,
        textAlign: 'center',
        padding: 5,
        fontSize: 20,
        //bold will not work in android -> font will not work
        // fontWeight: 'bold',
        fontFamily: 'Black-Jack' || 'Amatic-Bold',
        color: Colors.secondary500,
        width: 50,
    },
    titleV: {
        marginBottom: 30,
    },
    title: {
        fontSize: 35
    },
    heading: {
        fontSize: 25
    },
    headingV: {
        marginBottom: 20,
        padding: 0,
        borderWidth: 0,
        borderBottomWidth: 3
    }
})

export default StartGameScreen