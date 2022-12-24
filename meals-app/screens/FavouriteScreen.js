import { View, StyleSheet, FlatList } from "react-native"
import { useContext } from "react"
import { FavouriteContext } from "../store/context/favourite-contex"

import { useNavigation } from "@react-navigation/native"

import { MEALS } from "../data/dummyData"
import Card from "../components/Card"

const FavouriteScreen = () => {
    const navigation = useNavigation();
    const favouriteMeals = useContext(FavouriteContext);
    console.log(favouriteMeals.ids)
    const meals = MEALS.filter((m) => favouriteMeals.ids.includes(m.id))
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

export default FavouriteScreen