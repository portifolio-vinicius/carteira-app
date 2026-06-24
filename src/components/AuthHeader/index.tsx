import { View, Text, Image, ImageSourcePropType } from "react-native";
import type { ReactNode } from "react";
import { styles } from "./styles";

type Variant = "default" | "success";

type Props = {
  emoji?: string;
  icon?: string;
  iconComponent?: ReactNode;
  imageSource?: ImageSourcePropType;
  logoComponent?: ReactNode;
  title: string;
  subtitle: string;
  variant?: Variant;
};

export function AuthHeader({
  emoji,
  icon,
  iconComponent,
  imageSource,
  logoComponent,
  title,
  subtitle,
  variant = "default",
}: Props) {
  const hasIcon =
    logoComponent || iconComponent || imageSource || icon || emoji;

  return (
    <View style={styles.header}>
      {hasIcon && (
        <View style={styles["header__icon-card"]}>
          {logoComponent ? (
            logoComponent
          ) : iconComponent ? (
            iconComponent
          ) : imageSource ? (
            <Image source={imageSource} style={styles["header__image"]} />
          ) : icon ? (
            <Text style={styles["header__emoji"]}>{icon}</Text>
          ) : (
            <Text style={styles["header__emoji"]}>{emoji}</Text>
          )}
        </View>
      )}
      <Text style={styles["header__title"]}>{title}</Text>
      <Text style={styles["header__subtitle"]}>{subtitle}</Text>
    </View>
  );
}
