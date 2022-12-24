import { View, ScrollView, StyleSheet, Text, Image, FlatList } from "react-native"
import {useLayoutEffect, useContext} from "react"
import { useNavigation } from '@react-navigation/native'

import MealDetails from "../components/MealDetails"
import List from "../components/List"
import Subtitle from "../components/Subtitle"
import IconButton from "../components/IconButton";

import { FavouriteContext } from "../store/context/favourite-contex"

//nagivation will be there as this component is wrapped as Screen
//Still we can use useNavigation to get navigation obj
const DishDetailScreen = ({route}) => {
    const navigation = useNavigation();
    const {mId, mealDeatils} = route.params
    const {title} = mealDeatils

    const favouriteMeals = useContext(FavouriteContext);
    const isFavMeal = favouriteMeals.ids.includes(mId);

    const toggleFavMeal = () => {
        if(isFavMeal) {
            favouriteMeals.removeFromFavouriteMeals(mId)
        }else {
            favouriteMeals.addToFavouriteMeal(mId)
        }
    }

    useLayoutEffect(() => {
        navigation.setOptions({
            title: title,
            headerRight: () => <IconButton onPress={toggleFavMeal} icon={isFavMeal ? 'star' : 'star-outline'} size={25} color="white" />
        })
    }, [navigation, toggleFavMeal])

    return (
        <ScrollView style={styles.rootContainer}>
            <Image style={styles.image} source={{ uri: mealDeatils.imageUrl }} />
            <Text style={styles.title}>{mealDeatils.title}</Text>
            <MealDetails
                duration={mealDeatils.duration}
                complexity={mealDeatils.complexity}
                affordability={mealDeatils.affordability}
                textStyle={styles.detailText}
            />
            <View style={styles.listOuterContainer}>
                <View style={styles.listContainer}>
                    <Subtitle>Ingredients</Subtitle>
                    <List data={mealDeatils.ingredients} />
                    <Subtitle>Steps</Subtitle>
                    <List data={mealDeatils.steps} />
                </View>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    rootContainer: {
        marginBottom: 32
    },
    image: {
        width: '100%',
        height: 350,
    },
    title: {
        fontWeight: 'bold',
        fontSize: 24,
        margin: 8,
        textAlign: 'center',
        color: 'white',
    },
    detailText: {
        color: 'white',
    },
    listOuterContainer: {
        alignItems: 'center',
    },
    listContainer: {
        width: '80%',
    },
});

export default DishDetailScreen