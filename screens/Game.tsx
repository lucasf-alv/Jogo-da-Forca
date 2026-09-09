import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

import ButtonLetter from "../components/ButtonLetter";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

import { RootStackParamList } from "../App";

type Props = NativeStackScreenProps<RootStackParamList, "Game">;

export default function Game({ route }: Props) {
  const { palavra } = route.params;
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
      <Text style={styles.title}>Jogo da Forca</Text>
      <View>
        <Text>{palavra}</Text>
      </View>

      <View style={styles.letras}>
        {letras.map((letra) => (
          <ButtonLetter key={letra} letter={letra} />
        ))}
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },

  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 30,
  },

  letras: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8,
    justifyContent: "center",
  },
});
