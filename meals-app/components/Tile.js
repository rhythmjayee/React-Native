import { View, Text, StyleSheet, Pressable } from "react-native"

const Tile = ({title, id, color, onPress }) => {
    return (
        <View style={[styles.container, {backgroundColor: color}]}>
            <Pressable 
            android_ripple={{color: '#ccc'}}
            onPress={onPress}
            style={({pressed}) => pressed ? [styles.flexConatiner, styles.pressed] : styles.flexConatiner}
            >
                <Text style={styles.text}>{title}</Text>
            </Pressable>
        </View>
    )
}

const styles = new StyleSheet.create({
    flexConatiner: {
        flex: 1,
        justifyContent: 'center',
        alignContent: 'center',
        borderRadius: 8,
    },
    container: {
        height: 150,
        width: 150,
        margin: 15,
        borderRadius: 8,
        elevation: 8,
        shadowColor: '#605e5e',
        shadowRadius: 4,
        shadowOffset: {height: 4, width: 0},
        shadowOpacity: 0.85,
    },
    text: {
        textAlign: 'center',
        color: '#4a0202',
        fontWeight: 'bold'
    },
    pressed: {
        opacity: 0.5,
        backgroundColor: '#ccc'
    }
})

export default Tile