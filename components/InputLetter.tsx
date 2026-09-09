import { TextInput } from "react-native";
interface IInputLetter {
  value: string;
}

export default function InputLetter({ value }: IInputLetter) {
  return <TextInput value={value} />;
}
