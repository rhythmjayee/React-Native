import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, SafeAreaView, NativeModules, Platform } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import CategoriesScreen from './screens/CategoriesScreen';
import DishesScreen from './screens/DishesScreen';
import DishDetailScreen from './screens/DishDetailScreen';
import FavouriteScreen from './screens/FavouriteScreen';

const { StatusBarManager } = NativeModules;
const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 0 : StatusBarManager.HEIGHT;

const Stack = createNativeStackNavigator();

const DrawerNavigation = () => {
    const Drawer = createDrawerNavigator();
    return (
    <Drawer.Navigator>
            <Drawer.Screen name="MealsCategories" component={CategoriesScreen} />
            <Drawer.Screen name="favourite" component={FavouriteScreen} />
    </Drawer.Navigator>
    )
}

export default function App() {
    return (
        <View style={styles.container}>
            <SafeAreaView style={styles.safe}>
                <NavigationContainer>
                    <Stack.Navigator 
                    initialRouteName="MealsCategories"
                    screenOptions={{
                        headerTintColor: '#ffffff',
                        headerTitleStyle: {
                            fontSize: 15,
                        },
                        headerStyle: { backgroundColor: '#35120c' },
                        headerTitleAlign: 'center',
                        headerBackTitle: '',
                        contentStyle: {backgroundColor: '#785353'}
                    }}>
                        <Stack.Screen name="Drawer" component={DrawerNavigation}/>
                        <Stack.Screen name="Dishes" component={DishesScreen} />
                        <Stack.Screen name="DishDetails" component={DishDetailScreen} />
                </Stack.Navigator>
                </NavigationContainer>
            </SafeAreaView>
            <StatusBar style="light" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#35120c'
    },
    safe:{
        flex: 1,
        marginTop: STATUSBAR_HEIGHT,
    }
});
