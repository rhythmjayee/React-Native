import { StatusBar } from 'expo-status-bar';
import * as SplashScreen from 'expo-splash-screen';
import { useState, useCallback } from 'react';
import { useFonts } from 'expo-font';
import { StyleSheet, ImageBackground, SafeAreaView, NativeModules, Platform } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import StartGameScreen from './screens/StartGameScreen'
import Colors from './constants/color';
import GameOverScreen from './screens/GameOverScreen';
import GameScreen from './screens/GameScreen';

const { StatusBarManager } = NativeModules;
const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 0 : StatusBarManager.HEIGHT;

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [gameOver, setGameOver] = useState(false);
  const [userNumber, setUserNumber] = useState(null);
  const [rounds, setRounds] = useState(0);

  const [fontsLoaded] = useFonts({
    'Amatic': require('./assets/fonts/am-r.ttf'),
    'Amatic-Bold': require('./assets/fonts/am-b.ttf'),
    'Black-Jack' : require('./assets/fonts/blackjack.otf')
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  const addUserSelectedNumber = (number) => {
    console.log(number)
    setUserNumber(number)
  }
  const setUserGameOver = (rounds) => {
    setGameOver(true)
    setRounds(rounds)
  }
  const resetGame = () => {
    setGameOver(false)
    setUserNumber(null)
  }

  let screen = <StartGameScreen addUserSelectedNumber={addUserSelectedNumber}/>
  if(gameOver && userNumber) {
    screen = <GameOverScreen userNumber={userNumber} rounds={rounds} resetGame={resetGame}/>
  }else if(userNumber) {
    screen = <GameScreen userNumber={userNumber} setUserGameOver={setUserGameOver} resetGame={resetGame}/>
  }

  return (
    <LinearGradient
    onLayout={onLayoutRootView}
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
