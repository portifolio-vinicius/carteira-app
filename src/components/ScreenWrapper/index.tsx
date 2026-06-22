import { KeyboardAvoidingView, ScrollView, Platform, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { ReactNode } from "react";
import { styles } from "./styles";
import { GradientVariant, gradients } from "../../config/tokens";
import { BackgroundPattern } from "../BackgroundPattern";

type Props = {
  children: ReactNode;
  centered?: boolean;
  gradientVariant?: GradientVariant;
};

export function ScreenWrapper({ 
  children, 
  centered = true, 
  gradientVariant = "trust" 
}: Props) {
  const gradient = gradients[gradientVariant];

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <LinearGradient
        colors={gradient.colors}
        locations={gradient.locations}
        start={gradient.start}
        end={gradient.end}
        style={StyleSheet.absoluteFill}
      />
      <BackgroundPattern variant={gradientVariant} />
      <ScrollView
        contentContainerStyle={[
          styles.scroll,
          centered && styles["scroll--centered"],
        ]}
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
      >
        {children}
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
