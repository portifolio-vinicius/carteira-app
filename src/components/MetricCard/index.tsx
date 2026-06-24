import { View, Text } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { colors } from "../../config/tokens";
import { styles } from "./styles";

type Variant = "income" | "expense";

type Props = {
  label: string;
  value: string;
  icon: React.ComponentProps<typeof MaterialCommunityIcons>["name"];
  variant: Variant;
};

const iconColor: Record<Variant, string> = {
  income: colors.successGreen,
  expense: colors.errorRed,
};

export function MetricCard({ label, value, icon, variant }: Props) {
  return (
    <View style={styles.card}>
      <View style={styles.header}>
        <Text style={styles.label}>{label}</Text>
        <MaterialCommunityIcons
          name={icon}
          size={18}
          color={iconColor[variant]}
        />
      </View>
      <Text style={[styles.value, styles[`value--${variant}`]]}>{value}</Text>
    </View>
  );
}
