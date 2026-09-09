import { Text, StyleSheet } from "react-native";

interface IInputLetter {
  letra: string;
}

export default function InputLetter({ letra }: IInputLetter) {
  return <Text style={styles.letra}>{letra || "_"}</Text>;
}

const styles = StyleSheet.create({
  letra: {
    width: 45,
    height: 50,
    backgroundColor: "#7C3AED",
    color: "#FFFFFF",
    fontSize: 28,
    fontWeight: "bold",
    textAlign: "center",
    textAlignVertical: "center",
    borderRadius: 10,
    overflow: "hidden",
  },
});
