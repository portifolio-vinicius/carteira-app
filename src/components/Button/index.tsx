import { TouchableOpacity, Text, ActivityIndicator } from "react-native";
import { styles } from "./styles";

type Variant = "primary" | "secondary" | "danger";

type Props = {
  label: string;
  onPress: () => void;
  variant?: Variant;
  loading?: boolean;
  disabled?: boolean;
};

const variantStyle: Record<Variant, object> = {
  primary: {},
  secondary: styles["button--secondary"],
  danger: styles["button--danger"],
};

export function Button({
  label,
  onPress,
  variant = "primary",
  loading = false,
  disabled = false,
}: Props) {
  const isDisabled = disabled || loading;

  return (
    <TouchableOpacity
      style={[
        styles.button,
        variantStyle[variant],
        isDisabled && styles["button--disabled"],
      ]}
      onPress={onPress}
      disabled={isDisabled}
      activeOpacity={0.85}
    >
      {loading ? (
        <ActivityIndicator color="#fff" />
      ) : (
        <Text style={styles["button__text"]}>{label}</Text>
      )}
    </TouchableOpacity>
  );
}
