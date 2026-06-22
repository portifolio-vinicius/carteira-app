import { StyleSheet } from "react-native";
import { colors, spacing, typography, radius } from "../../../config/tokens";

export const styles = StyleSheet.create({
  section: { gap: spacing.md, alignItems: "stretch" },

  "info-card": {
    backgroundColor: colors.infoBlueBg,
    borderRadius: radius.lg,
    padding: 14,
    borderLeftWidth: 4,
    borderLeftColor: colors.infoBlue,
  },
  "info-card__text": {
    fontSize: typography.sizeMd,
    color: colors.infoBlueDark,
    lineHeight: 20,
  },
  "info-card__email": { fontWeight: typography.weight700 },

  "resend-row": {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  "resend-row__text": { fontSize: typography.sizeSm, color: colors.textMuted },
  "resend-row__link": {
    fontSize: typography.sizeSm,
    color: colors.primary,
    fontWeight: typography.weight700,
  },
  "resend-row__countdown": {
    fontSize: typography.sizeSm,
    color: colors.textSubtle,
  },
});
