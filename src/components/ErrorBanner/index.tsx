import { View, Text } from "react-native";
import { styles } from "./styles";

type Props = {
  message: string | null;
};

export function ErrorBanner({ message }: Props) {
  if (message === null) return null;

  return (
    <View style={styles["error-banner"]}>
      <Text style={styles["error-banner__icon"]}>⚠</Text>
      <Text style={styles["error-banner__text"]}>{message}</Text>
    </View>
  );
}
