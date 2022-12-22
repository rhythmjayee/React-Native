import { View, Text, StyleSheet } from "react-native"

import Colors from '../constants/color'

const Title = ({children, vstyle, tstyle}) => {
    return (
    <View style={[styles.container, vstyle]}>
        <Text style={[styles.text, tstyle]}> {children} </Text>
    </View>
    )
}

const styles = StyleSheet.create({
    container: {
        borderColor: Colors.secondary500,
        borderWidth: 3,
        padding: 10
    },
    text: {
        textAlign: 'center',
        color: Colors.secondary500,
        fontSize: 24,
        fontFamily: 'Black-Jack' || 'Amatic-Bold' || 'Amatic' || 'cursive'
    }
})
export default Title