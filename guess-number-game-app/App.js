import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, ImageBackground, SafeAreaView, NativeModules, Platform } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';

import StartGameScreen from './screens/StartGameScreen'
import Colors from './constants/color';
import GameOverScreen from './screens/GameOverScreen';
import GameScreen from './screens/GameScreen';

const { StatusBarManager } = NativeModules;
const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 0 : StatusBarManager.HEIGHT;

export default function App() {
  const [gameOver, setGameOver] = useState(true);
  const [userNumber, setUserNumber] = useState(1);

  const addUserSelectedNumber = (number) => {
    console.log(number)
    setUserNumber(number)
  }
  const setUserGameOver = () => {
    setGameOver(true)
  }
  const resetGame = () => {
    setGameOver(false)
    setUserNumber(null)
  }

  let screen = <StartGameScreen addUserSelectedNumber={addUserSelectedNumber}/>
  if(gameOver && userNumber) {
    screen = <GameOverScreen resetGame={resetGame}/>
  }else if(userNumber) {
    screen = <GameScreen/>
  }

  return (
    <LinearGradient
      colors={[Colors.primary500, Colors.secondary200]}
      style={styles.background}>
        <ImageBackground 
        source={require('./assets/images/d2.jpeg')}
        resizeMode="cover" 
        style={styles.background}
        imageStyle={styles.image}>
          <SafeAreaView style={styles.container}>
            {screen}
          </SafeAreaView>
        </ImageBackground>
        <StatusBar style="auto" />
    </LinearGradient>
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
