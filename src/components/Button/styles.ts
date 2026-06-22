import { StyleSheet } from "react-native";
import { colors, spacing, typography, radius } from "../../config/tokens";

export const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.primary,
    borderRadius: radius.lg,
    paddingVertical: 15,
    alignItems: "center",
    marginTop: spacing.xs,
  },
  "button--secondary": {
    backgroundColor: colors.secondary,
  },
  "button--danger": {
    backgroundColor: colors.danger,
  },
  "button--disabled": {
    backgroundColor: colors.textDisabled,
  },
  button__text: {
    color: colors.white,
    fontSize: typography.size15,
    fontWeight: typography.weight700,
    letterSpacing: 1,
  },
});
