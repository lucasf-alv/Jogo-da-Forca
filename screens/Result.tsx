import { Button, StyleSheet, Text, View } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

import { RootStackParamList } from "../App";

type Props = NativeStackScreenProps<RootStackParamList, "Result">;

export default function Result({ navigation, route }: Props) {
  const { erros } = route.params;

  const ganhou = erros < 5;

  function voltarHome() {
    navigation.navigate("Home");
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        {ganhou ? "VOCÊ GANHOU!" : "VOCÊ PERDEU!"}
      </Text>

      <Text style={styles.subtitle}>
        {ganhou
          ? "Parabéns! Você descobriu a palavra."
          : "Que pena! Você atingiu o limite de erros."}
      </Text>

      <View style={styles.resultContainer}>
        <Text style={styles.resultLabel}>ERROS</Text>

        <Text style={styles.erros}>{erros} / 5</Text>
      </View>

      <View style={styles.button}>
        <Button title="JOGAR NOVAMENTE" onPress={voltarHome} color="#EC4899" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#111827",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },

  title: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#EC4899",
    textAlign: "center",
    marginBottom: 20,
    letterSpacing: 2,
  },

  subtitle: {
    color: "#D1D5DB",
    fontSize: 16,
    textAlign: "center",
    marginBottom: 40,
  },

  resultContainer: {
    alignItems: "center",
    marginBottom: 40,
  },

  resultLabel: {
    color: "#A78BFA",
    fontSize: 18,
    fontWeight: "bold",
    letterSpacing: 3,
  },

  erros: {
    color: "#F43F5E",
    fontSize: 42,
    fontWeight: "bold",
    marginTop: 10,
  },

  button: {
    width: 220,
    borderRadius: 10,
    overflow: "hidden",
  },
});
