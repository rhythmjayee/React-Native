import {  useLayoutEffect } from "react"
import { View, FlatList, StyleSheet } from "react-native"
import MealList from "../components/MealList"

import { MEALS } from "../data/dummyData"

const DishesScreen = ({route, navigation}) => {
    const { cId, cTitle } = route.params;
    const meals = MEALS.filter((meal) => meal.categoryIds.indexOf(cId) !== -1)

    useLayoutEffect(() => {
        navigation.setOptions({ title: cTitle })
    }, [cId, cTitle]);

    return (
    <MealList data={meals}/>
    )
}

const styles = StyleSheet.create({
    
})

export default DishesScreen