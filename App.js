import { StyleSheet, Text, View } from "react-native"

import { StatusBar } from "expo-status-bar"

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hola, Coder!</Text>
      <StatusBar style="auto" />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    padding: 25,
  },
  text: {
    color: "white",
    backgroundColor: "black",
    padding: 20,
    fontSize: 30,
    fontWeight: "bold",
  },
})
