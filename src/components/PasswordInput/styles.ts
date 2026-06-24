import { StyleSheet } from "react-native";
import { colors, spacing, typography, radius } from "../../config/tokens";

export const styles = StyleSheet.create({
  field: {
    gap: 6,
  },
  field__label: {
    fontSize: typography.sizeSm,
    fontWeight: typography.weight600,
    color: colors.textLabel,
  },
  field__row: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: colors.surface,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: radius.xl,
    height: 56,
    paddingHorizontal: spacing.md,
  },
  "field__left-icon": {
    fontSize: 18,
    marginRight: 8,
  },
  "field__row--error": {
    borderColor: colors.errorRed,
  },
  field__input: {
    flex: 1,
    height: 56,
    fontSize: typography.size15,
    color: colors.textPrimary,
  },
  field__eye: {
    padding: spacing.xs,
  },
  "field__eye-icon": {
    fontSize: typography.sizeLg,
  },
  field__error: {
    fontSize: typography.sizeXs,
    color: colors.errorRed,
    marginTop: 2,
  },
});
