import { View, Text, Image, StyleSheet } from "react-native"
import Colors from "../constants/color"
import Title from "../components/Title"
import PrimaryButton from "../components/PrimaryButton"

const GameOverScreen = ({userNumber, rounds, resetGame}) => {
    return (
    <View style={styles.container}>
        <View>
            <Title>Game Over !!</Title>
        </View>
        <View style={styles.imageConatiner}>
            <Image 
            style={styles.image}
            source={require('../assets/images/gameOver.png')}
            resizeMode='cover'/>
        </View>
        <View>
            <Text style={styles.text1}>
                Number chosen by user is <Text style={styles.text2}>X</Text> and Opponent took <Text style={styles.text2}>Y</Text> rounds to get the Number.
            </Text>
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
    container: {
        flex: 1,
        padding: 20,
        justifyContent: 'space-around'
    },
    image: {
        height: 380,
        width: 380,
        borderRadius: 170,
        borderWidth: 5,
        borderColor: Colors.primary400,
        backgroundColor: Colors.secondary500
    },
    imageConatiner: {
        alignItems: 'center',
        justifyContent:'center',
    },
    text1: {
        color: Colors.primary500,
        textAlign: 'center',
        fontFamily: 'Black-Jack' || 'Amatic-Bold',
        fontSize: 25
    },
    text2: {
        color: Colors.secondary500
    }
})

export default GameOverScreen