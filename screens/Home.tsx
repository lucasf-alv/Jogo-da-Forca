import { Button, View } from "react-native";
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
    <View>
      {" "}
      <Button
        title="Clique para iniciar o jogo"
        onPress={() => setModal(true)}
      />{" "}
      {modal && (
        <ModalInitGame setModal={setModal} onStart={iniciarJogo} />
      )}{" "}
    </View>
  );
}
