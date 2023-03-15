import { StyleSheet, View, Text, Button } from "react-native";
import Count from "./Count";

export default function App() {
  return (
    <View style={styles.container}>
      <Count />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#020013",
    alignItems: "center",
    justifyContent: "center",
  },
});
