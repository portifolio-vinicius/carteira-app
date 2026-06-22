import { StyleSheet } from "react-native";
import { colors, spacing, typography } from "../../../config/tokens";

export const styles = StyleSheet.create({
  form: { gap: spacing.md },

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
  switch: { transform: [{ scaleX: 0.85 }, { scaleY: 0.85 }] },
  "remember-text": { fontSize: typography.sizeSm, color: colors.textMuted },

  divider: { flexDirection: "row", alignItems: "center", gap: spacing.sm },
  divider__line: { flex: 1, height: 1, backgroundColor: colors.border },
  divider__label: {
    fontSize: typography.sizeSm,
    color: colors.textPlaceholder,
  },
});
