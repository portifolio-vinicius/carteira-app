import { ReactNode } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { gradients } from "../../config/tokens";
import { styles } from "./styles";

type Props = { children: ReactNode };

export function HeroCard({ children }: Props) {
  const { colors, locations, start, end } = gradients.trust;
  return (
    <LinearGradient
      colors={colors}
      locations={locations}
      start={start}
      end={end}
      style={styles.card}
    >
      {children}
    </LinearGradient>
  );
}
