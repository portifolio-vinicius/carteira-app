import { StyleSheet } from "react-native";
import { colors, spacing, radius, shadows } from "../../config/tokens";

export const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: colors.gray100,
  },
  scroll: {
    flex: 1,
  },
  content: {
    padding: spacing.md,
    gap: spacing.md,
  },
  greeting: {
    paddingVertical: spacing.sm,
  },
  greeting__title: {
    fontSize: 24,
    fontWeight: "bold",
    color: colors.textPrimary,
  },
  greeting__subtitle: {
    fontSize: 14,
    color: colors.textMuted,
    marginTop: 2,
  },
  "balance-card": {
    borderRadius: radius.xl,
    padding: spacing.lg,
    marginVertical: spacing.xs,
    ...shadows.md,
  },
  "balance-card__label": {
    color: "#FFFFFFCC",
    fontSize: 14,
  },
  "balance-card__value": {
    color: colors.white,
    fontSize: 32,
    fontWeight: "bold",
    marginTop: 8,
  },
  "metrics-row": {
    flexDirection: "row",
    gap: spacing.sm,
  },
  "metric-card": {
    flex: 1,
    backgroundColor: colors.surface,
    borderRadius: radius.xl,
    padding: spacing.md,
    borderLeftWidth: 4,
    ...shadows.sm,
  },
  "metric-card--income": {
    borderLeftColor: "#4CAF50",
  },
  "metric-card--expense": {
    borderLeftColor: "#F44336",
  },
  "metric-card__label": {
    fontSize: 12,
    color: colors.textMuted,
  },
  "metric-card__value": {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 4,
  },
  "metric-card__value--income": {
    color: "#4CAF50",
  },
  "metric-card__value--expense": {
    color: "#F44336",
  },
});
