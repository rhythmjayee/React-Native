import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import GoalsContainer from "./components/GoalsContainer";

export default function App() {
  return (
    <View style={styles.container}>
      <GoalsContainer/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    marginTop : 25
  },
});
