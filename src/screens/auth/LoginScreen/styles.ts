import { StyleSheet } from "react-native";
import { colors, spacing, typography, radius } from "../../../config/tokens";

export const styles = StyleSheet.create({
  form: { gap: 12 },

  "options-row": {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  "remember-row": {
    flexDirection: "row",
    alignItems: "center",
    gap: spacing.xs,
  },
  checkbox: {
    width: 18,
    height: 18,
    borderRadius: radius.sm,
    borderWidth: 1.5,
    borderColor: colors.border,
    alignItems: "center",
    justifyContent: "center",
  },
  "checkbox--checked": {
    backgroundColor: colors.primary,
    borderColor: colors.primary,
  },
  "remember-text": { fontSize: typography.sizeSm, color: colors.textMuted },
});
