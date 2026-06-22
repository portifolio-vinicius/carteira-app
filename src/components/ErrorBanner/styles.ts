import { StyleSheet } from "react-native";
import { colors, spacing, typography, radius } from "../../config/tokens";

export const styles = StyleSheet.create({
  "error-banner": {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: colors.errorRedBg,
    borderRadius: radius.md,
    padding: spacing.sm,
    marginBottom: spacing.md,
    borderLeftWidth: 4,
    borderLeftColor: colors.errorRed,
    gap: spacing.sm,
  },
  "error-banner__icon": {
    fontSize: typography.sizeLg,
  },
  "error-banner__text": {
    flex: 1,
    color: colors.errorRedDark,
    fontSize: typography.sizeMd,
  },
});
