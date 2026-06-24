import { StyleSheet } from "react-native";
import { colors, spacing, radius, shadows } from "../../config/tokens";

export const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: colors.gray100,
  },
  content: {
    padding: spacing.lg,
    gap: spacing.md,
    alignItems: "center",
  },
  avatar__wrapper: {
    alignItems: "center",
    gap: 8,
    marginBottom: spacing.sm,
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: colors.primary,
    alignItems: "center",
    justifyContent: "center",
  },
  avatar__text: {
    color: colors.white,
    fontSize: 28,
    fontWeight: "bold",
  },
  profile__name: {
    fontSize: 20,
    fontWeight: "bold",
    color: colors.textPrimary,
  },
  profile__email: {
    fontSize: 14,
    color: colors.textMuted,
  },
  "info-card": {
    width: "100%",
    backgroundColor: colors.surface,
    borderRadius: radius.xl,
    padding: spacing.md,
    ...shadows.sm,
  },
  "info-row": {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 10,
  },
  "info-row__label": {
    fontSize: 14,
    color: colors.textMuted,
  },
  "info-row__value": {
    fontSize: 14,
    fontWeight: "600",
    color: colors.textPrimary,
  },
  "info-divider": {
    height: 1,
    backgroundColor: colors.border,
  },
  "btn-logout": {
    width: "100%",
    paddingVertical: 14,
    borderRadius: radius.xl,
    borderWidth: 1,
    borderColor: colors.danger,
    alignItems: "center",
    marginTop: spacing.sm,
  },
  "btn-logout__text": {
    color: colors.danger,
    fontSize: 15,
    fontWeight: "600",
  },
});
