import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { useState } from "react";

import ButtonLetter from "../components/ButtonLetter";
import InputLetter from "../components/InputLetter";
import { RootStackParamList } from "../App";

type Props = NativeStackScreenProps<RootStackParamList, "Game">;

export default function Game({ route, navigation }: Props) {
  const { palavra } = route.params;

  const lista_palavra = palavra.split("");

  const [erros, setErros] = useState(0);
  const [letrasDescobertas, setLetrasDescobertas] = useState<string[]>([]);

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

  function handleChange(letraClicada: string) {
    if (lista_palavra.includes(letraClicada)) {
      setLetrasDescobertas((letras) => {
        if (letras.includes(letraClicada)) {
          return letras;
        }

        return [...letras, letraClicada];
      });

      console.log("Acertou!");
    } else {
      setErros((erros) => erros + 1);
      console.log("Errou!");
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>JOGO DA FORCA</Text>

      <View style={styles.palavra}>
        {lista_palavra.map((letra, index) => (
          <InputLetter
            key={index}
            letra={letrasDescobertas.includes(letra) ? letra : ""}
          />
        ))}
      </View>

      <View style={styles.errosContainer}>
        <Text style={styles.errosTexto}>ERROS</Text>

        <Text style={styles.errosNumero}>{erros} / 5</Text>
      </View>

      <View style={styles.letras}>
        {letras.map((letra) => (
          <ButtonLetter key={letra} letter={letra} Exibir={handleChange} />
        ))}
      </View>

      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#111827",
    padding: 20,
    paddingTop: 50,
  },

  title: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#F43F5E",
    textAlign: "center",
    marginBottom: 40,
    letterSpacing: 2,
  },

  palavra: {
    flexDirection: "row",
    justifyContent: "center",
    flexWrap: "wrap",
    gap: 10,
    marginBottom: 40,
  },

  errosContainer: {
    alignItems: "center",
    marginBottom: 30,
  },

  errosTexto: {
    color: "#A78BFA",
    fontSize: 16,
    fontWeight: "bold",
    letterSpacing: 2,
  },

  errosNumero: {
    color: "#F43F5E",
    fontSize: 28,
    fontWeight: "bold",
    marginTop: 5,
  },

  letras: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: 8,
  },
});
