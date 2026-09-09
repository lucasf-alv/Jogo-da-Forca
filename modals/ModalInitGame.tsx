import { useState } from "react";

import {
  Modal,
  View,
  Text,
  TextInput,
  Pressable,
  StyleSheet,
} from "react-native";

interface IModalInitGame {
  setModal: (value: boolean) => void;
  onStart: (palavra: string) => void;
}

export default function ModalInitGame({ setModal, onStart }: IModalInitGame) {
  const [palavra, setPalavra] = useState("");
  const [erro, setErro] = useState("");

  function validarPalavra() {
    if (palavra.trim() === "") {
      setErro("Digite uma palavra para começar o jogo.");
      return;
    }

    onStart(palavra.trim().toUpperCase());
  }

  return (
    <Modal transparent animationType="fade">
      <View style={styles.overlay}>
        <View style={styles.modal}>
          <Pressable style={styles.closeButton} onPress={() => setModal(false)}>
            <Text style={styles.closeText}>×</Text>
          </Pressable>

          <Text style={styles.title}>INICIAR JOGO</Text>

          <Text style={styles.label}>Escolha uma palavra</Text>

          <TextInput
            style={styles.input}
            placeholder="Digite uma palavra"
            placeholderTextColor="#9CA3AF"
            value={palavra}
            onChangeText={(texto) => {
              setPalavra(texto);
              setErro("");
            }}
            autoCapitalize="characters"
          />

          {erro !== "" && <Text style={styles.error}>{erro}</Text>}

          <Pressable style={styles.button} onPress={validarPalavra}>
            <Text style={styles.buttonText}>COMEÇAR</Text>
          </Pressable>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.75)",
    justifyContent: "center",
    alignItems: "center",
  },

  modal: {
    width: "85%",
    backgroundColor: "#1F2937",
    borderRadius: 20,
    padding: 25,
    borderWidth: 2,
    borderColor: "#7C3AED",
  },

  closeButton: {
    position: "absolute",
    right: 15,
    top: 10,
    width: 35,
    height: 35,
    justifyContent: "center",
    alignItems: "center",
  },

  closeText: {
    color: "#EC4899",
    fontSize: 32,
    fontWeight: "bold",
  },

  title: {
    color: "#EC4899",
    fontSize: 26,
    fontWeight: "bold",
    textAlign: "center",
    letterSpacing: 2,
    marginBottom: 30,
  },

  label: {
    color: "#D1D5DB",
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 10,
  },

  input: {
    backgroundColor: "#111827",
    borderWidth: 2,
    borderColor: "#7C3AED",
    borderRadius: 10,
    padding: 14,
    fontSize: 17,
    color: "#FFFFFF",
  },

  error: {
    color: "#F43F5E",
    fontSize: 14,
    fontWeight: "bold",
    marginTop: 8,
  },

  button: {
    backgroundColor: "#EC4899",
    marginTop: 25,
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
  },

  buttonText: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "bold",
    letterSpacing: 1,
  },
});
