import { StyleSheet } from "react-native";
import { colors, spacing, radius } from "../../config/tokens";

export const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: colors.gray50,
  },
  scroll: {
    flex: 1,
  },
  content: {
    padding: spacing.lg,
    gap: spacing.lg,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: spacing.xs,
  },
  header__title: {
    fontSize: 22,
    fontWeight: "700",
    color: colors.textPrimary,
  },
  header__subtitle: {
    fontSize: 13,
    color: colors.textMuted,
    marginTop: 2,
  },
  balance__top: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 8,
  },
  balance__label: {
    fontSize: 13,
    color: "rgba(255,255,255,0.7)",
  },
  balance__value: {
    fontSize: 38,
    fontWeight: "700",
    color: colors.white,
    marginBottom: 20,
  },
  balance__divider: {
    height: 1,
    backgroundColor: "rgba(255,255,255,0.2)",
    marginBottom: 16,
  },
  balance__pills: {
    flexDirection: "row",
    gap: spacing.sm,
  },
  balance__pill: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
    backgroundColor: "rgba(255,255,255,0.15)",
    borderRadius: radius.full,
    paddingHorizontal: 12,
    paddingVertical: 5,
  },
  "balance__pill-text": {
    fontSize: 12,
    color: "rgba(255,255,255,0.9)",
    fontWeight: "600",
  },
  section__label: {
    fontSize: 11,
    fontWeight: "700",
    color: colors.textMuted,
    letterSpacing: 1.2,
  },
  "metrics-row": {
    flexDirection: "row",
    gap: spacing.sm,
  },
});
