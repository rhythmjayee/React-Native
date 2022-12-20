import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import GoalsContainer from "./components/GoalsContainer";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.nav}>
        <Text style={{color: 'white', fontWeight: 'bold', fontSize: 20}}>Goals App</Text>
      </View>
      <View style={{flex: 15}}>
        <GoalsContainer/>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#bb9af4",
    marginTop: 20
  },
  nav: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#5c18cf',
  }
});
