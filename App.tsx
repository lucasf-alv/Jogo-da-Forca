import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

import ButtonLetter from "./components/ButtonLetter";
import InputLetter from "./components/InputLetter";

export default function App() {
  const letras: string[] = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];

  return (
    <View style={styles.container}>
      <Text>Jogo da Forca</Text>

      <StatusBar style="auto" />

      <View style={styles.letras}>
        {letras.map((letra) => (
          <ButtonLetter key={letra} letter={letra} />
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },

  letras: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8,
  },
});
