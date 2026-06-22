import { StyleSheet } from "react-native";
import { colors, typography } from "../../config/tokens";

export const styles = StyleSheet.create({
  "footer-row": {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: 8,
  },
  "footer-row__text": {
    fontSize: typography.sizeMd,
    color: colors.textMuted,
  },
});
