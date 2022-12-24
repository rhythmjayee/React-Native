import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, SafeAreaView, NativeModules, Platform } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import CategoriesScreen from './screens/CategoriesScreen';
import DishesScreen from './screens/DishesScreen';
import DishDetailScreen from './screens/DishDetailScreen';
import FavouriteScreen from './screens/FavouriteScreen';
import { FavouriteContextComponent } from './store/context/favourite-contex';

const { StatusBarManager } = NativeModules;
const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 0 : StatusBarManager.HEIGHT;

const Stack = createNativeStackNavigator();

const DrawerNavigation = () => {
    const Drawer = createDrawerNavigator();
    return (
    <Drawer.Navigator 
    screenOptions={{
        headerTintColor: '#ffffff',
        headerTitleStyle: {
            fontSize: 15,
        },
        headerStyle: { backgroundColor: '#35120c' },
        headerTitleAlign: 'center',
        sceneContainerStyle: {backgroundColor: '#785353'},
        drawerStyle: {
            backgroundColor: '#785353'
        },
        drawerContentStyle: {},
        drawerActiveBackgroundColor: '#4e2222',
        drawerActiveTintColor:  'white',
        drawerInactiveTintColor: '#3c1414',

    }}>
            <Drawer.Screen 
            name="MealsCategories" 
            component={CategoriesScreen} 
            options={
                {
                    title: 'All Categories',
                    drawerIcon: () => <Ionicons name='fast-food' size={30} color="white" />
                }
            }/>
            <Drawer.Screen 
            name="favourite" 
            component={FavouriteScreen}
            options={
                {
                    title: 'Favourites',
                    drawerIcon: () => <Ionicons name='star' size={30} color="white" />
                }
            }
            />
    </Drawer.Navigator>
    )
}

export default function App() {
    return (
        <View style={styles.container}>
            <SafeAreaView style={styles.safe}>
                <FavouriteContextComponent>
                    <NavigationContainer>
                        <Stack.Navigator 
                        initialRouteName="Drawer"
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
                            <Stack.Screen name="Drawer" component={DrawerNavigation} options={{
                                headerShown: false
                            }}/>
                            <Stack.Screen name="Dishes" component={DishesScreen} />
                            <Stack.Screen name="DishDetails" component={DishDetailScreen} />
                    </Stack.Navigator>
                    </NavigationContainer>
                </FavouriteContextComponent>
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
