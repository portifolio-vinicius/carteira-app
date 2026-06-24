import { TouchableOpacity, Text } from "react-native";
import { styles } from "./styles";

type Props = {
  children: string;
  onPress: () => void;
  testID?: string;
};

export function TextLink({ children, onPress, testID }: Props) {
  return (
    <TouchableOpacity
      onPress={onPress}
      hitSlop={{ top: 8, bottom: 8, left: 8, right: 8 }}
      testID={testID}
    >
      <Text style={styles.link}>{children}</Text>
    </TouchableOpacity>
  );
}
