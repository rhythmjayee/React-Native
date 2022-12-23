import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, SafeAreaView, NativeModules, Platform } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import CategoriesScreen from './screens/CategoriesScreen';
import DishesScreen from './screens/DishesScreen';

const { StatusBarManager } = NativeModules;
const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 0 : StatusBarManager.HEIGHT;

const Stack = createNativeStackNavigator();

export default function App() {
    return (
        <>
            <SafeAreaView style={styles.container}>
                <NavigationContainer>
                    <Stack.Navigator 
                    initialRouteName="MealsCategories"
                    screenOptions={{
                        headerTintColor: '#ffffff',
                        headerStyle: { backgroundColor: '#35120c' },
                        headerTitleAlign: 'center',
                        headerBackTitle: 'Back',
                        contentStyle: {backgroundColor: '#785353'}
                    }}>
                        <Stack.Screen name="MealsCategories" component={CategoriesScreen} />
                        <Stack.Screen name="Dishes" component={DishesScreen} />
                </Stack.Navigator>
                </NavigationContainer>
            </SafeAreaView>
            <StatusBar style="auto" />
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: STATUSBAR_HEIGHT,
    },
});
