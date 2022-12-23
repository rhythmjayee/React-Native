import {  useLayoutEffect } from "react"
import { View, FlatList, StyleSheet } from "react-native"
import Card from "../components/Card"

import { MEALS } from "../data/dummyData"

const DishesScreen = ({route, navigation}) => {
    const { cId, cTitle } = route.params;
    const meals = MEALS.filter((meal) => meal.categoryIds.indexOf(cId) !== -1)
    useLayoutEffect(() => {
        navigation.setOptions({ title: cTitle })
    }, [cId, cTitle]);
    return (
    <View style={styles.container}>
        <FlatList
            data={meals}
            keyExtractor={(meal) => meal.id}
            renderItem={({item}) => {
                let mealPointers = {
                    affordability : item.affordability,
                    complexity: item.complexity,
                    duration: item.duration
                }
                return <Card
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

export default DishesScreen