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
            <Text style={styles.closeText}>X</Text>
          </Pressable>

          <Text style={styles.title}>Iniciar jogo</Text>

          <Text style={styles.label}>Digite a palavra:</Text>

          <TextInput
            style={styles.input}
            placeholder="Digite uma palavra"
            value={palavra}
            onChangeText={(texto) => {
              setPalavra(texto);
              setErro("");
            }}
            autoCapitalize="characters"
          />

          {erro !== "" && <Text style={styles.error}>{erro}</Text>}

          <Pressable style={styles.button} onPress={validarPalavra}>
            <Text style={styles.buttonText}>Começar</Text>
          </Pressable>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.6)",
    justifyContent: "center",
    alignItems: "center",
  },

  modal: {
    width: "85%",
    backgroundColor: "white",
    borderRadius: 15,
    padding: 25,
  },

  closeButton: {
    position: "absolute",
    right: 15,
    top: 15,
    padding: 5,
  },

  closeText: {
    fontSize: 20,
    fontWeight: "bold",
  },

  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 25,
  },

  label: {
    fontSize: 16,
    marginBottom: 8,
  },

  input: {
    borderWidth: 1,
    borderColor: "#999",
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
  },

  error: {
    marginTop: 8,
    fontSize: 14,
  },

  button: {
    marginTop: 20,
    padding: 14,
    borderRadius: 8,
    alignItems: "center",
  },

  buttonText: {
    fontSize: 18,
    fontWeight: "bold",
  },
});
