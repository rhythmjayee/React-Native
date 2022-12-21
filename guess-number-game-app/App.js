import { StatusBar } from 'expo-status-bar';
import { StyleSheet, ImageBackground, SafeAreaView, NativeModules, Platform } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';

import StartGameScreen from './screens/StartGameScreen'

const { StatusBarManager } = NativeModules;
const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 0 : StatusBarManager.HEIGHT;

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <LinearGradient
        colors={['#560641', '#bcb254']}
        style={styles.background}>
          <ImageBackground 
          source={require('./assets/images/d2.jpeg')}
          resizeMode="cover" 
          style={styles.background}
          imageStyle={styles.image}>
            <StartGameScreen/>
          </ImageBackground>
      </LinearGradient>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: STATUSBAR_HEIGHT
  },
  background: {
    flex: 1
  },
  image: {
    flex: 1,
    opacity: 0.15
  }
});
