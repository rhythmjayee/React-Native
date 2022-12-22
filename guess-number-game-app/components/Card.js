import { View, StyleSheet } from "react-native"
import Colors from "../constants/color"

const Card = ({children, style}) => {
    return (
        <View style={[styles.rootContainer, style]}>
            {children}
        </View>
    )
}

const styles = StyleSheet.create({
    rootContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.primary500,
        padding: 30,
        borderRadius: 15,
    }
})

export default Card