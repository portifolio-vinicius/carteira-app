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
    borderRadius: radius.lg,
    paddingHorizontal: spacing.md,
  },
  "field__row--error": {
    borderColor: colors.errorRed,
  },
  field__input: {
    flex: 1,
    paddingVertical: 13,
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
