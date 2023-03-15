import { useState } from "react";
import { StyleSheet, Text, View, Button, TextInput } from "react-native";

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingVertical: 70,
    flex: 1,
    backgroundColor: "#202020",
  },
  nameContainer: {
    alignItems: "center",
    marginBottom: 50,
    flex: 1,
  },
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 40,
  },
  goalsContainer: {
    alignItems: "flex-start",
    flex: 5,
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#008cff",
    width: "75%",
    paddingStart: 10,
    marginRight: 8,
    color: "white",
  },
  title: {
    fontSize: 35,
    fontWeight: 700,
    color: "#0079FF",
  },
  subTitle: {
    fontSize: 18,
    fontWeight: 200,
    color: "white",
  },
  goalsItems: {
    borderTopWidth: 1,
    borderTopColor: "white",
    width: "100%",
    marginTop: 5,
    padding: 10,
  },
  item: {
    width: "100%",
    borderLeftWidth: 5,
    marginVertical: 5,
    borderLeftColor: "#0079FF",
    textAlign: "center",
    color: "white",
  },
});

export default function App() {
  const [goalText, setGoalText] = useState("");
  const [goalList, setGoalList] = useState([]);

  const goalInputHandler = (text) => {
    setGoalText(text);
  };

  const addGoalHandler = () => {
    setGoalList((currentList) => [...currentList, goalText]);
  };

  return (
    <View style={styles.container}>
      <View style={styles.nameContainer}>
        <Text style={styles.title}>My Goals</Text>
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Your goal!"
          placeholderTextColor="#A6A6A6"
          onChangeText={goalInputHandler}
        />
        <Button title="Add Goal" onPress={addGoalHandler} />
      </View>
      <View style={styles.goalsContainer}>
        <Text style={styles.subTitle}>List of goals...</Text>
        <View style={styles.goalsItems}>
          {goalList.map((itemText, i) => (
            <Text key={i} style={styles.item}>
              {itemText}
            </Text>
          ))}
        </View>
      </View>
    </View>
  );
}
