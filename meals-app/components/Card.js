import { View, Image, Text, StyleSheet, Pressable } from "react-native"

const Card = ({mealName, mealImage, mealPointers={}, onPress}) => {
    return (
    <View style={styles.container}>
        <Pressable 
            onPress={onPress}
            android_ripple={{color: '#ccc'}}
            style={({pressed}) => pressed ? [styles.flexConatiner, styles.pressed] : styles.flexConatiner}
            >
                <View style={styles.flexConatiner}>
                    <Image 
                    style={styles.image}
                    source={{uri: mealImage}}
                    resizeMode="cover"/>
                </View>
                <View style={styles.textConatiner}>
                    <View>
                        <Text style={[styles.text, {fontWeight: 'bold'}]}>{mealName.toUpperCase()}</Text>
                    </View>
                    <View style={styles.pointersContainer}>
                        <View>
                            <Text style={styles.text}>{mealPointers.affordability.toUpperCase()}</Text>
                        </View>
                        <View>
                            <Text style={styles.text}>{mealPointers.complexity.toUpperCase()}</Text>
                        </View>
                        <View>
                            <Text style={styles.text}>{mealPointers.duration}m</Text>
                        </View>
                    </View>
                </View>
        </Pressable>
    </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: 300,
        width: 300,
        margin: 15,
        borderRadius: 10,
        backgroundColor: 'white',
        elevation: 5,
        shadowColor: 'black',
        shadowRadius: 8,
        shadowOffset: {height: 4, width: 0},
        shadowOpacity: 0.85,
        overflow: 'hidden'
    },
    image: {
        width: '100%',
        height: '100%',
    },
    flexConatiner: {
        flex: 1,
        borderRadius: 8,
    },
    textConatiner: {
        padding: 8,
        backgroundColor: '#321d1d'
    },
    pointersContainer: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        margin: 10
    },
    text: {
        textAlign: 'center',
        color: 'white',
    },
    pressed: {
        opacity: 0.5,
        backgroundColor: '#ccc'
    }
})

export default Card