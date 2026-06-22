import { View, Text, Image, ImageSourcePropType } from "react-native";
import type { ReactNode } from "react";
import { styles } from "./styles";

type Variant = "default" | "success";

type Props = {
  emoji?: string;
  imageSource?: ImageSourcePropType;
  logoComponent?: ReactNode;
  title: string;
  subtitle: string;
  variant?: Variant;
};

export function AuthHeader({
  emoji,
  imageSource,
  logoComponent,
  title,
  subtitle,
  variant = "default",
}: Props) {
  return (
    <View style={styles.header}>
      <View
        style={[
          styles["header__icon-circle"],
          variant === "success" && styles["header__icon-circle--success"],
        ]}
      >
        {logoComponent ? (
          logoComponent
        ) : imageSource ? (
          <Image source={imageSource} style={styles["header__image"]} />
        ) : (
          <Text style={styles["header__emoji"]}>{emoji}</Text>
        )}
      </View>
      <Text style={styles["header__title"]}>{title}</Text>
      <Text style={styles["header__subtitle"]}>{subtitle}</Text>
    </View>
  );
}
