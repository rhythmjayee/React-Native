import { View, StyleSheet, FlatList } from "react-native"
import { useContext } from "react"
import { FavouriteContext } from "../store/context/favourite-contex"

// import { useNavigation } from "@react-navigation/native"

import { MEALS } from "../data/dummyData"
import Card from "../components/Card"
import MealList from "../components/MealList"

const FavouriteScreen = ({navigation}) => {
    // const navigation = useNavigation();
    const favouriteMeals = useContext(FavouriteContext);
    const meals = MEALS.filter((m) => favouriteMeals.ids.includes(m.id))
    return (
        <MealList
        data={meals}
        />
    )
}

const styles = StyleSheet.create({})

export default FavouriteScreen