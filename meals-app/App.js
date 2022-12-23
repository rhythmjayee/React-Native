import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, SafeAreaView, NativeModules, Platform } from 'react-native';

import CategoriesScreen from './screens/CategoriesScreen';

const { StatusBarManager } = NativeModules;
const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 0 : StatusBarManager.HEIGHT;

export default function App() {
    return (
    <SafeAreaView style={styles.container}>
        <CategoriesScreen/>
        <StatusBar style="auto" />
    </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: STATUSBAR_HEIGHT,
        padding: 10
    },
});
