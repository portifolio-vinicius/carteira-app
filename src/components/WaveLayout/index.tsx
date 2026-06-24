import { ReactNode } from "react";
import {
  View,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  Dimensions,
  StyleSheet,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Svg, Path } from "react-native-svg";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { GradientVariant, gradients, colors } from "../../config/tokens";

const { width: W, height: H } = Dimensions.get("window");
const WAVE_H = 90;
const SPLIT = 0.46;

function organicWavePath(): string {
  const top = H * SPLIT;
  const h = WAVE_H;

  // Asymmetric organic wave: starts low-left, rises in middle, drops slightly right
  return [
    `M 0 ${h * 0.72}`,
    `C ${W * 0.18} ${h * 0.12}, ${W * 0.38} ${h * 0.92}, ${W * 0.52} ${h * 0.38}`,
    `C ${W * 0.66} ${h * 0.0}, ${W * 0.82} ${h * 0.58}, ${W} ${h * 0.28}`,
    `L ${W} ${h}`,
    `L 0 ${h}`,
    "Z",
  ].join(" ");
}

type Props = {
  children: ReactNode;
  gradientVariant?: GradientVariant;
  scrollable?: boolean;
};

export function WaveLayout({
  children,
  gradientVariant = "trust",
  scrollable = false,
}: Props) {
  const insets = useSafeAreaInsets();
  const gradient = gradients[gradientVariant];
  const waveTop = H * SPLIT;
  const contentPaddingTop = waveTop + WAVE_H * 0.5;

  return (
    <View style={styles.root}>
      {/* Gradient background — top half */}
      <LinearGradient
        colors={gradient.colors}
        locations={gradient.locations}
        start={gradient.start}
        end={gradient.end}
        style={[styles.gradient, { height: waveTop + WAVE_H }]}
      />

      {/* Organic wave */}
      <View
        style={[styles.waveContainer, { top: waveTop }]}
        pointerEvents="none"
      >
        <Svg width={W} height={WAVE_H}>
          <Path d={organicWavePath()} fill={colors.white} />
        </Svg>
      </View>

      {/* Content */}
      <KeyboardAvoidingView
        style={styles.kav}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <ScrollView
          scrollEnabled={scrollable}
          contentContainerStyle={[
            styles.scroll,
            {
              paddingTop: contentPaddingTop + insets.top,
              paddingBottom: insets.bottom + 24,
            },
          ]}
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}
        >
          {children}
        </ScrollView>
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: colors.white,
  },
  gradient: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
  },
  waveContainer: {
    position: "absolute",
    left: 0,
    right: 0,
  },
  kav: {
    flex: 1,
  },
  scroll: {
    flexGrow: 1,
    paddingHorizontal: 24,
    gap: 12,
  },
});
