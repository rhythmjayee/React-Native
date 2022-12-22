import { View, Pressable, Text, StyleSheet} from "react-native"

import Colors from "../constants/color"

const PrimaryButton = ({title, onPress}) => {
    return (
    <View style={styles.buttonContainer}>
        <Pressable 
        style={({pressed}) => pressed && styles.pressed}
        onPress={onPress}>
            <Text style={styles.textContainer}>{title}</Text>
        </Pressable>
    </View>
    )
}

const styles = StyleSheet.create({
    buttonContainer: {
        backgroundColor: Colors.primary400,
        borderRadius: 8,
        justifyContent: 'center',
        margin: 5,
        opacity: 1
    },
    textContainer: {
        textAlign: 'center',
        color: Colors.secondary500,
        padding: 8,
        fontFamily: 'Black-Jack' || 'Amatic-Bold' || 'cursive',
        fontSize: 30
    },
    pressed: {
        opacity: 0.75,
        backgroundColor: Colors.primary200,
        borderRadius: 8,
        justifyContent: 'center',
    }
})
export default PrimaryButton