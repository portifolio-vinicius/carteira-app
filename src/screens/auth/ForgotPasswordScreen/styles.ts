import { StyleSheet } from "react-native";
import { colors, spacing, typography, radius } from "../../../config/tokens";

export const styles = StyleSheet.create({
  stepper: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: spacing.md,
  },
  stepper__item: {
    flexDirection: "row",
    alignItems: "center",
  },
  stepper__dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: colors.border,
  },
  "stepper__dot--active": {
    backgroundColor: colors.primary,
  },
  stepper__line: {
    width: 32,
    height: 2,
    backgroundColor: colors.border,
    marginHorizontal: 4,
  },
  "stepper__line--active": {
    backgroundColor: colors.primary,
  },

  section: { gap: spacing.md, alignItems: "stretch" },
  "section--done": {
    alignItems: "center",
    paddingTop: spacing.xl,
  },

  "info-card": {
    flexDirection: "row",
    alignItems: "center",
    gap: spacing.sm,
    backgroundColor: colors.infoBlueBg,
    borderRadius: radius.lg,
    padding: 14,
    borderLeftWidth: 4,
    borderLeftColor: colors.infoBlue,
  },
  "info-card__icon": { flexShrink: 0 },
  "info-card__text": {
    flex: 1,
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

  "success-icon": {
    marginBottom: spacing.md,
  },
  "success-title": {
    fontSize: 24,
    fontWeight: "bold",
    color: colors.textPrimary,
    textAlign: "center",
  },
  "success-subtitle": {
    fontSize: typography.sizeMd,
    color: colors.textMuted,
    textAlign: "center",
    lineHeight: 22,
    marginBottom: spacing.md,
  },
});
