import { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import CustomButton from "./CustomButton";
import SmallButton from "./SmallButton";

export default function Count() {
  const [count, setCount] = useState(0);

  const increaseCount = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const decreaseCount = () => {
    setCount((prevCount) => prevCount - 1);
  };

  return (
    <View style={styles.counterContainer}>
      <View style={styles.numberBox}>
        <Text style={styles.number}>{count}</Text>
      </View>
      <View style={styles.buttonsBox}>
        <CustomButton
          fontSize={55}
          color={"white"}
          onClick={decreaseCount}
          text="-"
        />
        <SmallButton
          fontSize={24}
          color={"black"}
          onClick={() => setCount(0)}
          text="RESET"
        />
        <CustomButton
          fontSize={45}
          color={"white"}
          onClick={increaseCount}
          text="+"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  counterContainer: {
    flex: 1,
  },
  numberBox: {
    flex: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  number: {
    color: "#FFFFFF",
    fontSize: 110,
  },
  buttonsBox: {
    flex: 1,
    width: "100%",
    justifyContent: "space-evenly",
    flexDirection: "row",
  },
});
