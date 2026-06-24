import { StyleSheet } from "react-native";
import { shadows } from "../../config/tokens";

export const styles = StyleSheet.create({
  card: {
    borderRadius: 28,
    padding: 28,
    ...shadows.lg,
  },
});
