import { View, Text } from "react-native";
import { TextLink } from "../TextLink";
import { styles } from "./styles";

type Props = {
  text: string;
  linkText: string;
  onPress: () => void;
  testID?: string;
};

export function FooterRow({ text, linkText, onPress, testID }: Props) {
  return (
    <View style={styles["footer-row"]}>
      <Text style={styles["footer-row__text"]}>{text}</Text>
      <TextLink onPress={onPress} testID={testID}>
        {linkText}
      </TextLink>
    </View>
  );
}
