import { StyleSheet } from "react-native";
import { colors, spacing, typography, radius } from "../../config/tokens";

export const fieldInputStyles = StyleSheet.create({
  base: {
    backgroundColor: colors.surface,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: radius.lg,
    paddingHorizontal: spacing.md,
    paddingVertical: 13,
    fontSize: typography.size15,
    color: colors.textPrimary,
  },
  error: {
    borderColor: colors.errorRed,
  },
});

export const styles = StyleSheet.create({
  field: {
    gap: 6,
  },
  field__label: {
    fontSize: typography.sizeSm,
    fontWeight: typography.weight600,
    color: colors.textLabel,
  },
  field__input: {
    backgroundColor: colors.surface,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: radius.lg,
    paddingHorizontal: spacing.md,
    paddingVertical: 13,
    fontSize: typography.size15,
    color: colors.textPrimary,
  },
  "field__input--error": {
    borderColor: colors.errorRed,
  },
  field__error: {
    fontSize: typography.sizeXs,
    color: colors.errorRed,
    marginTop: 2,
  },
});
