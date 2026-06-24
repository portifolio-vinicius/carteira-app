import { StyleSheet } from "react-native";
import { colors, spacing, typography, radius } from "../../config/tokens";

export const fieldInputStyles = StyleSheet.create({
  base: {
    backgroundColor: colors.surface,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: radius.xl,
    paddingHorizontal: spacing.md,
    height: 56,
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
    borderRadius: radius.xl,
    paddingHorizontal: spacing.md,
    height: 56,
    fontSize: typography.size15,
    color: colors.textPrimary,
  },
  "field__input--error": {
    borderColor: colors.errorRed,
  },
  "field__input-row": {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: colors.surface,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: radius.xl,
    height: 56,
    paddingHorizontal: spacing.md,
  },
  "field__input-row--error": {
    borderColor: colors.errorRed,
  },
  "field__left-icon": {
    fontSize: 18,
    marginRight: 8,
  },
  "field__input-inner": {
    flex: 1,
    height: 56,
    fontSize: typography.size15,
    color: colors.textPrimary,
  },
  field__error: {
    fontSize: typography.sizeXs,
    color: colors.errorRed,
    marginTop: 2,
  },
});
