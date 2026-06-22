import { StyleSheet } from "react-native";
import { colors, spacing, typography } from "../../config/tokens";

export const styles = StyleSheet.create({
  screen__container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: spacing.lg,
    backgroundColor: colors.white,
  },
  screen__title: {
    fontSize: typography.sizeXl,
    fontWeight: typography.weightBold,
    color: colors.textPrimary,
    marginBottom: spacing.md,
  },
  screen__name: {
    fontSize: typography.sizeLg,
    fontWeight: typography.weight600,
    color: colors.textPrimary,
    marginBottom: spacing.xs,
  },
  screen__email: {
    fontSize: typography.sizeMd,
    color: colors.textMuted,
    marginBottom: spacing.xl,
  },
});
