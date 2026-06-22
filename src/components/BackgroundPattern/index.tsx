import Svg, { Circle, Path } from "react-native-svg";
import { View, StyleSheet } from "react-native";
import { GradientVariant } from "../../config/tokens";

type Props = {
  variant: GradientVariant;
};

export function BackgroundPattern({ variant }: Props) {
  return (
    <View style={StyleSheet.absoluteFill} pointerEvents="none">
      <Svg width="100%" height="100%" style={StyleSheet.absoluteFill}>
        {variant === "growth" && (
          <>
            <Circle cx="0" cy="0" r="150" fill="rgba(255,255,255,0.1)" />
            <Circle cx="100%" cy="100%" r="200" fill="rgba(255,255,255,0.08)" />
            <Circle cx="80%" cy="20%" r="80" fill="rgba(255,255,255,0.05)" />
            <Path
              d="M 0,300 Q 200,200 400,300 T 800,300"
              stroke="rgba(255,255,255,0.1)"
              strokeWidth={3}
              fill="none"
            />
          </>
        )}
        {variant === "wealth" && (
          <>
            <Circle cx="50%" cy="0" r="180" fill="rgba(255,255,255,0.15)" />
            <Circle cx="0" cy="100%" r="140" fill="rgba(255,255,255,0.1)" />
            <Circle cx="100%" cy="50%" r="100" fill="rgba(255,255,255,0.08)" />
            <Circle cx="30%" cy="30%" r="60" fill="rgba(255,255,255,0.06)" />
            <Circle cx="70%" cy="70%" r="90" fill="rgba(255,255,255,0.07)" />
          </>
        )}
        {variant === "trust" && (
          <>
            <Circle cx="0" cy="50%" r="160" fill="rgba(255,255,255,0.12)" />
            <Circle cx="100%" cy="0" r="120" fill="rgba(255,255,255,0.1)" />
            <Circle cx="70%" cy="100%" r="90" fill="rgba(255,255,255,0.08)" />
            <Circle cx="30%" cy="30%" r="60" fill="rgba(255,255,255,0.06)" />
            <Path
              d="M 0,400 L 100,300 L 200,400 L 300,300 L 400,400"
              stroke="rgba(255,255,255,0.08)"
              strokeWidth={2}
              fill="none"
            />
          </>
        )}
      </Svg>
    </View>
  );
}
