import { StyleSheet } from "react-native";
import { colors, spacing, typography, radius } from "../../config/tokens";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    gap: spacing.md,
  },
  title: {
    fontSize: typography.sizeXl,
    fontWeight: typography.weightBold,
    marginBottom: spacing.xs,
  },
  welcome: {
    fontSize: typography.size15,
    color: colors.textMuted,
    marginBottom: spacing.sm,
  },
  button: {
    backgroundColor: colors.primary,
    paddingHorizontal: spacing.xl,
    paddingVertical: spacing.sm,
    borderRadius: radius.md,
  },
  "button--secondary": {
    backgroundColor: colors.secondary,
  },
  "button--logout": {
    backgroundColor: colors.danger,
  },
  button__text: {
    color: colors.white,
    fontSize: typography.sizeLg,
    fontWeight: typography.weight600,
  },
});
