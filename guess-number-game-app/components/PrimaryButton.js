import { View, Pressable, Text, StyleSheet} from "react-native"

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
        backgroundColor: '#6b1c57',
        borderRadius: 8,
        justifyContent: 'center',
        margin: 5,
        opacity: 1
    },
    textContainer: {
        textAlign: 'center',
        color: '#f7e200',
        fontWeight: 'bold',
        padding: 8
    },
    pressed: {
        opacity: 0.75,
        backgroundColor: '#b23c95',
        borderRadius: 8,
        justifyContent: 'center',
    }
})
export default PrimaryButton