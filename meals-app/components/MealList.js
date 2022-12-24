import { FlatList, View, StyleSheet } from "react-native"
import Card from "./Card"

import { useNavigation } from "@react-navigation/native"

const MealList = ({data}) => {
    const navigation = useNavigation();
    return (
    <View style={styles.container}>
        <FlatList
            data={data}
            keyExtractor={(meal) => meal.id}
            renderItem={({item}) => {
                let mealPointers = {
                    affordability : item.affordability,
                    complexity: item.complexity,
                    duration: item.duration
                }
                return <Card
                onPress={() => navigation.navigate('DishDetails', {mId: item.id, mealDeatils: item})}
                mealName={item.title}
                mealImage={item.imageUrl}
                mealPointers={mealPointers}
                />
            }}
        />
    </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default MealList