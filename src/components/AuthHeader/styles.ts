import { StyleSheet } from "react-native";
import { colors, typography, spacing, radius } from "../../config/tokens";

export const styles = StyleSheet.create({
  header: {
    alignItems: "center",
    marginBottom: spacing.lg,
  },
  "header__icon-circle": {
    width: 80,
    height: 80,
    borderRadius: radius.full,
    backgroundColor: colors.primaryLight,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: spacing.md,
  },
  "header__icon-circle--success": {
    backgroundColor: colors.successGreenBg,
  },
  header__emoji: {
    fontSize: 36,
  },
  "header__image": {
    width: 50,
    height: 50,
    resizeMode: "contain",
  },
  header__title: {
    fontSize: typography.sizeXxl,
    fontWeight: typography.weight700,
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
