import { FlatList, View, StyleSheet } from 'react-native'
import { CATEGORIES } from '../data/dummyData'

import Tile from '../components/Tile'

const CategoriesScreen = ({ navigation: { navigate } }) => {
    return (
        <View style={styles.container}>
            <FlatList
            data={CATEGORIES}
            keyExtractor={(category) => category.id}
            numColumns="2"
            renderItem={({item}) => (
                <Tile 
                onPress={() => {
                    navigate('Dishes', {cId: item.id, cTitle: item.title})
                }
                }
                title={item.title}
                id={item.id}
                color={item.color}
                />
            )}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default CategoriesScreen