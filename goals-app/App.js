import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, SafeAreaView, NativeModules, Platform } from "react-native";
const { StatusBarManager } = NativeModules;
const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 0 : StatusBarManager.HEIGHT;
import GoalsContainer from "./components/GoalsContainer";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.nav}>
        <Text style={{color: 'white', fontWeight: 'bold', fontSize: 20}}>Goals App</Text>
      </View>
      <View style={{flex: 15}}>
        <GoalsContainer/>
      </View>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#bb9af4",
    marginTop: STATUSBAR_HEIGHT
  },
  nav: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#5c18cf',
  }
});
