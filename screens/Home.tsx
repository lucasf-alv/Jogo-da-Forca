import { Button, StyleSheet, Text, View } from "react-native";

import { NativeStackScreenProps } from "@react-navigation/native-stack";

import ModalInitGame from "../modals/ModalInitGame";

import { RootStackParamList } from "../App";

import { useState } from "react";

type Props = NativeStackScreenProps<RootStackParamList, "Home">;

export default function Home({ navigation }: Props) {
  const [modal, setModal] = useState(false);

  function iniciarJogo(palavra: string) {
    setModal(false);

    navigation.navigate("Game", { palavra: palavra });
  }

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>JOGO</Text>
        <Text style={styles.subtitle}>DA FORCA</Text>

        <Text style={styles.description}>
          Descubra a palavra antes de cometer 5 erros!
        </Text>

        <View style={styles.button}>
          <Button
            title="COMEÇAR JOGO"
            onPress={() => setModal(true)}
            color="#EC4899"
          />
        </View>
      </View>

      {modal && <ModalInitGame setModal={setModal} onStart={iniciarJogo} />}
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

  content: {
    width: "100%",
    alignItems: "center",
  },

  title: {
    fontSize: 50,
    fontWeight: "bold",
    color: "#7C3AED",
    letterSpacing: 5,
  },

  subtitle: {
    fontSize: 42,
    fontWeight: "bold",
    color: "#EC4899",
    letterSpacing: 4,
    marginBottom: 30,
  },

  description: {
    color: "#D1D5DB",
    fontSize: 16,
    textAlign: "center",
    lineHeight: 24,
    marginBottom: 40,
    width: "80%",
  },

  button: {
    width: 220,
    borderRadius: 10,
    overflow: "hidden",
  },
});
