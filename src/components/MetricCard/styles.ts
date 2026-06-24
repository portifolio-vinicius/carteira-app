import { StyleSheet } from "react-native";
import { colors, radius, shadows, spacing } from "../../config/tokens";

export const styles = StyleSheet.create({
  card: {
    flex: 1,
    backgroundColor: colors.surface,
    borderRadius: radius.xxl,
    padding: 20,
    ...shadows.sm,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: spacing.xs,
  },
  label: {
    fontSize: 12,
    color: colors.textMuted,
  },
  value: {
    fontSize: 20,
    fontWeight: "700",
    marginTop: 6,
  },
  "value--income": {
    color: colors.successGreen,
  },
  "value--expense": {
    color: colors.errorRed,
  },
});
