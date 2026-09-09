import { Button } from "react-native";
interface IButtonProps {
  letter: string;
}
export default function ButtonLetter({ letter }: IButtonProps) {
  return <Button title={letter} />;
}
