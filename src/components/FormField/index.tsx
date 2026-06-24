import { View, Text, TextInput, TextInputProps } from "react-native";
import { colors } from "../../config/tokens";
import { styles, fieldInputStyles } from "./styles";

type Props = TextInputProps & {
  label: string;
  error?: string;
  leftIcon?: string;
};

export function FormField({
  label,
  error,
  style,
  leftIcon,
  ...inputProps
}: Props) {
  return (
    <View style={styles.field}>
      <Text style={styles["field__label"]}>{label}</Text>
      {leftIcon ? (
        <View
          style={[
            styles["field__input-row"],
            error ? styles["field__input-row--error"] : null,
          ]}
        >
          <Text style={styles["field__left-icon"]}>{leftIcon}</Text>
          <TextInput
            style={[styles["field__input-inner"], style]}
            placeholderTextColor={colors.textPlaceholder}
            {...inputProps}
          />
        </View>
      ) : (
        <TextInput
          style={[
            styles["field__input"],
            error ? styles["field__input--error"] : null,
            style,
          ]}
          placeholderTextColor={colors.textPlaceholder}
          {...inputProps}
        />
      )}
      {error !== undefined && (
        <Text style={styles["field__error"]}>{error}</Text>
      )}
    </View>
  );
}

export { fieldInputStyles };
