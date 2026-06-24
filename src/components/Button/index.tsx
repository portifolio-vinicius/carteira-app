import { TouchableOpacity, Text, ActivityIndicator } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { styles } from "./styles";

type Variant = "primary" | "secondary" | "danger" | "gradient";

type Props = {
  label: string;
  onPress: () => void;
  variant?: Variant;
  loading?: boolean;
  disabled?: boolean;
  testID?: string;
};

const variantStyle: Record<Exclude<Variant, "gradient">, object> = {
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
  testID,
}: Props) {
  const isDisabled = disabled || loading;

  if (variant === "gradient") {
    return (
      <TouchableOpacity
        onPress={onPress}
        disabled={isDisabled}
        activeOpacity={0.85}
        testID={testID}
        style={[
          styles["button--gradient-wrapper"],
          isDisabled && styles["button--disabled"],
        ]}
      >
        <LinearGradient
          colors={["#7C3AED", "#3B82F6"]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={styles["button--gradient"]}
        >
          {loading ? (
            <ActivityIndicator color="#fff" />
          ) : (
            <Text style={styles["button__text"]}>{label}</Text>
          )}
        </LinearGradient>
      </TouchableOpacity>
    );
  }

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
      testID={testID}
    >
      {loading ? (
        <ActivityIndicator color="#fff" />
      ) : (
        <Text style={styles["button__text"]}>{label}</Text>
      )}
    </TouchableOpacity>
  );
}
