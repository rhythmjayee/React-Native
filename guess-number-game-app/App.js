import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, SafeAreaView, NativeModules, Platform } from "react-native";

import StartGameScreen from './screens/StartGameScreen'

const { StatusBarManager } = NativeModules;
const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 0 : StatusBarManager.HEIGHT;

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StartGameScreen/>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: STATUSBAR_HEIGHT
  },
});
