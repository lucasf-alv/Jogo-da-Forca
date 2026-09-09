import { Button, View, StyleSheet } from "react-native";

interface IButtonProps {
  letter: string;
  Exibir: (letra: string) => void;
}

export default function ButtonLetter({ letter, Exibir }: IButtonProps) {
  return (
    <View style={styles.button}>
      <Button title={letter} onPress={() => Exibir(letter)} color="#EC4899" />
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    width: 48,
    borderRadius: 10,
    overflow: "hidden",
  },
});
