import { View, ActivityIndicator } from "react-native";
import { colors } from "../../config/tokens";
import { styles } from "./styles";

export function LoadingScreen() {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color={colors.primary} />
    </View>
  );
}
