import { StyleSheet } from "react-native";
import { colors, spacing, radius, shadows } from "../../config/tokens";

export const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: colors.gray50,
  },
  content: {
    padding: spacing.lg,
    gap: spacing.lg,
    alignItems: "center",
  },
  avatar: {
    width: 88,
    height: 88,
    borderRadius: radius.full,
    backgroundColor: "rgba(255,255,255,0.2)",
    borderWidth: 2,
    borderColor: "rgba(255,255,255,0.6)",
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
    marginBottom: 12,
  },
  avatar__text: {
    color: colors.white,
    fontSize: 32,
    fontWeight: "700",
  },
  profile__name: {
    fontSize: 22,
    fontWeight: "700",
    color: colors.white,
    textAlign: "center",
  },
  profile__email: {
    fontSize: 13,
    color: "rgba(255,255,255,0.7)",
    textAlign: "center",
    marginTop: 4,
  },
  profile__badge: {
    alignSelf: "center",
    backgroundColor: "rgba(255,255,255,0.2)",
    borderRadius: radius.full,
    paddingHorizontal: 14,
    paddingVertical: 5,
    marginTop: 12,
  },
  "profile__badge-text": {
    fontSize: 11,
    fontWeight: "700",
    color: colors.white,
    letterSpacing: 0.8,
  },
  "info-card": {
    width: "100%",
    backgroundColor: colors.surface,
    borderRadius: radius.xxl,
    padding: 20,
    ...shadows.sm,
  },
  "info-row": {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
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
  "info-row__badge": {
    backgroundColor: colors.primaryLight,
    borderRadius: radius.full,
    paddingHorizontal: 10,
    paddingVertical: 3,
  },
  "info-row__badge-text": {
    fontSize: 12,
    fontWeight: "700",
    color: colors.primary,
  },
  "info-divider": {
    height: 1,
    backgroundColor: colors.border,
  },
  "menu-card": {
    width: "100%",
    backgroundColor: colors.surface,
    borderRadius: radius.xxl,
    paddingHorizontal: 20,
    ...shadows.sm,
  },
  menu__item: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 16,
  },
  menu__icon: {
    marginRight: spacing.sm,
  },
  menu__label: {
    flex: 1,
    fontSize: 15,
    color: colors.textPrimary,
  },
  menu__divider: {
    height: 1,
    backgroundColor: colors.border,
  },
  "logout-card": {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    gap: spacing.sm,
    backgroundColor: colors.surface,
    borderRadius: radius.xxl,
    padding: 20,
    ...shadows.sm,
  },
  logout__label: {
    fontSize: 15,
    fontWeight: "600",
    color: colors.danger,
  },
  version: {
    fontSize: 12,
    color: colors.textMuted,
    textAlign: "center",
  },
});
