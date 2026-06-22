import { TouchableOpacity, Text } from "react-native";
import { styles } from "./styles";

type Props = {
  children: string;
  onPress: () => void;
};

export function TextLink({ children, onPress }: Props) {
  return (
    <TouchableOpacity
      onPress={onPress}
      hitSlop={{ top: 8, bottom: 8, left: 8, right: 8 }}
    >
      <Text style={styles.link}>{children}</Text>
    </TouchableOpacity>
  );
}
