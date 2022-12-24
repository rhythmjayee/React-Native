import React, {useState, createContext} from "react";

export const FavouriteContext = createContext({
    ids: [],
    addToFavouriteMeal: () => {},
    removeFromFavouriteMeals: () => {}
})

export const FavouriteContextComponent = ({ children }) => {
    const [favouriteMeals, setfavouriteMeals] = useState([]);

    const addToFavouriteMeal = (id) => {
        setfavouriteMeals((preMeals) => [...preMeals, id])
    }
    const removeFromFavouriteMeals = (id) => {
        setfavouriteMeals((preMeals) => preMeals.filter((mId) => mId !== id))
    }
    const value = {
        ids: favouriteMeals,
        addToFavouriteMeal: addToFavouriteMeal,
        removeFromFavouriteMeals: removeFromFavouriteMeals
    }
    return (
        <FavouriteContext.Provider value={value}>
            {children}
        </FavouriteContext.Provider>
    )
}
