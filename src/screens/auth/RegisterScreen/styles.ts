import { StyleSheet } from "react-native";
import { colors, spacing, typography, radius } from "../../../config/tokens";

export const styles = StyleSheet.create({
  form: { gap: spacing.md },

  "strength-container": {
    flexDirection: "row",
    alignItems: "center",
    marginTop: spacing.xs,
    gap: spacing.sm - 4,
  },
  "strength-bars": { flexDirection: "row", gap: spacing.xs },
  "strength-bar": { width: 40, height: 4, borderRadius: radius.sm - 3 },
  "strength-label": {
    fontSize: typography.sizeXs,
    fontWeight: typography.weight600,
  },

  "match-hint": {
    fontSize: typography.sizeXs,
    marginTop: spacing.xs,
    fontWeight: typography.weight500,
  },

  "terms-row": {
    flexDirection: "row",
    alignItems: "flex-start",
    gap: spacing.sm - 2,
  },
  checkbox: {
    width: 22,
    height: 22,
    borderRadius: radius.sm,
    borderWidth: 2,
    borderColor: colors.border,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 1,
  },
  "checkbox--checked": {
    backgroundColor: colors.primary,
    borderColor: colors.primary,
  },
  checkbox__checkmark: {
    color: colors.white,
    fontSize: typography.sizeSm,
    fontWeight: typography.weight700,
  },
  "terms-text": {
    flex: 1,
    fontSize: typography.sizeSm,
    color: colors.textMuted,
    lineHeight: 20,
  },
  "terms-link": { color: colors.primary, fontWeight: typography.weight600 },

  "field-error": {
    fontSize: typography.sizeXs,
    color: colors.errorRed,
    marginTop: 2,
  },
});
