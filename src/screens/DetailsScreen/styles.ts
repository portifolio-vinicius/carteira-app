import { StyleSheet } from "react-native";
import { colors, spacing, radius, shadows } from "../../config/tokens";

export const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: colors.gray100,
  },
  content: {
    padding: spacing.md,
    gap: spacing.sm,
  },
  "info-card": {
    backgroundColor: colors.surface,
    borderRadius: radius.xl,
    padding: spacing.md,
    ...shadows.sm,
  },
  "info-card__label": {
    fontSize: 12,
    color: colors.textMuted,
    marginBottom: 4,
  },
  "info-card__value": {
    fontSize: 16,
    fontWeight: "600",
    color: colors.textPrimary,
  },
});
