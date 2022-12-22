import { Text, View, StyleSheet, FlatList, Alert } from "react-native"
import { useState, useEffect } from "react"
import Card from "../components/Card"
import PrimaryButton from "../components/PrimaryButton"
import Title from "../components/Title"

import Colors from "../constants/color"

let lower = 1;
let higher = 100;
let initalNumber = -1;

function generateRandomBetween(min, max, exclude) {
    const rndNum = Math.floor(Math.random() * (max - min)) + min;
    console.log(min, max, rndNum)
    if (rndNum === exclude) {
        return generateRandomBetween(min, max, exclude);
    } else {
        return rndNum;
    }
}

const GameScreen = ({userNumber, setUserGameOver, resetGame}) => {
    const [currentGuess, setCurrentGuess] = useState(null);

    const [guesses, setGuesses] = useState([]);

    useEffect(() => {
        lower = 1;
        higher = 100;
        initalNumber = generateRandomBetween(1, 100, userNumber);
        setCurrentGuess(initalNumber)
        setGuesses([initalNumber])
    }, []);

    useEffect(() => {
        if(currentGuess === userNumber) {
            setUserGameOver(guesses.length)
        }
        
    }, [currentGuess]);

    const changeRange = (direction) => {
        if((currentGuess < userNumber && direction === 'lower') ||(currentGuess > userNumber && direction === 'higher') ) {
            Alert.alert(
                'Don\'t Lie!',
                'Choose Valid Range',
                [{
                    text: "Ok",
                    style: "destructive"
                },]
            )
            return
        }

        if(direction === 'lower') {
            // console.log(direction, lower, higher)
            higher = currentGuess
        }else if(direction === 'higher') {
            // console.log(direction, lower, higher)
            lower = currentGuess + 1
        }
        // console.log(direction, lower, higher,'end...')
        let guess = generateRandomBetween(lower, higher, currentGuess)
        setCurrentGuess(guess)
        setGuesses((preGuesses) => {
            return [guess, ...preGuesses]
        })
    }
    return (
        <View style={styles.rootContainer}>
            <View>
                <Title>
                    Opponent's Guess
                </Title>
            </View>
            <View>
                <Title vstyle={styles.numberV} tstyle={styles.number}>
                    {currentGuess}
                </Title>
            </View>
            <Card style={styles.cardContainer}>
                <View>
                    <Text style={styles.text}>Higher or Lower ? </Text>
                </View>
                <View style={styles.buttonContainer}>
                    <View>
                        <PrimaryButton title={'+'} onPress={changeRange.bind(this, 'higher')}/>
                    </View>
                    <View>
                        <PrimaryButton title={'-'} onPress={changeRange.bind(this, 'lower')}/>
                    </View>
                </View>
            </Card>
            <View style={styles.listConatiner}>
                <FlatList
                data={guesses}
                renderItem={({item, index}) => (
                <Title vstyle={styles.listV} tstyle={styles.list}>
                    {`#${guesses.length - index} Opponet's Guess: ${item}`}
                </Title>
                )}
                keyExtractor={number => number}
                />
            </View>
            <View>
                <PrimaryButton 
                title='Restart Game'
                onPress={resetGame}/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        padding: 20,
        justifyContent: 'space-between'
    },
    cardContainer: {
        marginBottom: 10
    },
    number: {
        fontSize: 30,
    },
    numberV: {
        padding: 20,
        borderWidth: 0
    },
    buttonContainer: {
        flexDirection: 'row'
    },
    text: {
        fontFamily: 'Black-Jack' || 'Amatic-Bold',
        fontSize: 20,
        color: Colors.secondary500
    },
    listV: {
        borderRadius: 20,
        borderColor: Colors.primary500,
        backgroundColor: Colors.secondary500,
        justifyContent: 'space-between',
        margin: 5  
    },
    list: {
        color: Colors.primary500,
        fontSize: 18
    },
    listConatiner: {
        height: '50%'
    }
})
export default GameScreen