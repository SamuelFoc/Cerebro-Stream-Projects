import { StyleSheet, TouchableOpacity, Text } from "react-native";

export default function SmallButton(props) {
  return (
    <TouchableOpacity style={styles.button} onPress={props.onClick}>
      <Text style={{ color: props.color, fontSize: props.fontSize }}>
        {props.text}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    marginTop: 30,
    backgroundColor: "#FFFFFF",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    width: "30%",
    justifyContent: "center",
    alignItems: "center",
  },
});
