import { StyleSheet } from "react-native";
import {
  colors,
  spacing,
  typography,
  radius,
  shadows,
} from "../../config/tokens";

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
  "button--gradient-wrapper": {
    borderRadius: radius.lg,
    overflow: "hidden",
    marginTop: spacing.xs,
    shadowColor: shadows.md.shadowColor,
    shadowOffset: shadows.md.shadowOffset,
    shadowOpacity: shadows.md.shadowOpacity,
    shadowRadius: shadows.md.shadowRadius,
    elevation: shadows.md.elevation,
  },
  "button--gradient": {
    paddingVertical: 15,
    alignItems: "center",
  },
});
