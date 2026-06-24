import { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { colors } from "../../config/tokens";
import { styles } from "./styles";

type Props = {
  label: string;
  value: string;
  onChangeText: (v: string) => void;
  error?: string;
  editable?: boolean;
  accessibilityLabel?: string;
  testID?: string;
  leftIcon?: string;
};

export function PasswordInput({
  label,
  value,
  onChangeText,
  error,
  editable = true,
  accessibilityLabel,
  testID,
  leftIcon,
}: Props) {
  const [visible, setVisible] = useState(false);

  return (
    <View style={styles.field}>
      <Text style={styles["field__label"]}>{label}</Text>
      <View
        style={[
          styles["field__row"],
          error ? styles["field__row--error"] : null,
        ]}
      >
        {leftIcon && <Text style={styles["field__left-icon"]}>{leftIcon}</Text>}
        <TextInput
          style={styles["field__input"]}
          placeholder="••••••••"
          placeholderTextColor={colors.textPlaceholder}
          value={value}
          onChangeText={onChangeText}
          secureTextEntry={!visible}
          editable={editable}
          accessibilityLabel={accessibilityLabel}
          testID={testID}
        />
        <TouchableOpacity
          style={styles["field__eye"]}
          onPress={() => setVisible((v) => !v)}
          hitSlop={{ top: 8, bottom: 8, left: 8, right: 8 }}
          accessibilityLabel={visible ? "Ocultar senha" : "Mostrar senha"}
        >
          <Text style={styles["field__eye-icon"]}>{visible ? "🙈" : "👁️"}</Text>
        </TouchableOpacity>
      </View>
      {error !== undefined && (
        <Text style={styles["field__error"]}>{error}</Text>
      )}
    </View>
  );
}
