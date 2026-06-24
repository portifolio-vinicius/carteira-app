import { View, Text, StyleSheet } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { colors, shadows } from "../../config/tokens";

type Props = { title: string };

export function ScreenHeader({ title }: Props) {
  const insets = useSafeAreaInsets();
  return (
    <View style={[styles.header, { paddingTop: insets.top + 8 }]}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: colors.gray100,
    paddingBottom: 16,
    paddingHorizontal: 20,
    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24,
    ...shadows.sm,
  },
  title: {
    fontSize: 20,
    fontWeight: "600",
    color: colors.textPrimary,
    textAlign: "center",
  },
});
