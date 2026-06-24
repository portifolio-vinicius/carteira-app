import { StyleSheet } from "react-native";
import {
  colors,
  typography,
  spacing,
  radius,
  shadows,
} from "../../config/tokens";

export const styles = StyleSheet.create({
  header: {
    alignItems: "center",
    marginBottom: spacing.lg,
  },
  "header__icon-card": {
    width: 96,
    height: 96,
    borderRadius: radius.xl,
    backgroundColor: colors.surface,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: spacing.md,
    shadowColor: shadows.md.shadowColor,
    shadowOffset: shadows.md.shadowOffset,
    shadowOpacity: shadows.md.shadowOpacity,
    shadowRadius: shadows.md.shadowRadius,
    elevation: shadows.md.elevation,
  },
  header__emoji: {
    fontSize: 44,
  },
  header__image: {
    width: 96,
    height: 96,
    resizeMode: "contain",
  },
  header__title: {
    fontSize: 32,
    fontWeight: "bold",
    color: colors.textPrimary,
    marginBottom: 6,
    textAlign: "center",
  },
  header__subtitle: {
    fontSize: typography.sizeMd,
    color: colors.textSubtle,
    textAlign: "center",
    lineHeight: 20,
  },
});
