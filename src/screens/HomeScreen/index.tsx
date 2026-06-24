import { View, Text, ScrollView, SafeAreaView } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { TabNavigationProp } from "../../types/shared/Navigation";
import { useAppDispatch, useAppSelector } from "../../hooks/useAppDispatch";
import { logoutThunk } from "../../thunks/authThunks";
import { selectUser } from "../../slices/authSlice";
import { styles } from "./styles";

type Props = {
  navigation: TabNavigationProp<"Home">;
};

export function HomeScreen({ navigation }: Props) {
  const dispatch = useAppDispatch();
  const user = useAppSelector(selectUser);

  const firstName = user?.name?.split(" ")[0] ?? "usuário";

  return (
    <SafeAreaView style={styles.safe}>
      <ScrollView
        style={styles.scroll}
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        {/* Saudação */}
        <View style={styles.greeting}>
          <Text style={styles["greeting__title"]}>Olá, {firstName} 👋</Text>
          <Text style={styles["greeting__subtitle"]}>Bem-vindo de volta</Text>
        </View>

        {/* Card Saldo */}
        <LinearGradient
          colors={["#1E3A8A", "#3B82F6", "#60A5FA"]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={styles["balance-card"]}
        >
          <Text style={styles["balance-card__label"]}>Saldo disponível</Text>
          <Text style={styles["balance-card__value"]}>R$ 12.450,00</Text>
        </LinearGradient>

        {/* Cards de Métricas */}
        <View style={styles["metrics-row"]}>
          <View style={[styles["metric-card"], styles["metric-card--income"]]}>
            <Text style={styles["metric-card__label"]}>Receitas</Text>
            <Text
              style={[
                styles["metric-card__value"],
                styles["metric-card__value--income"],
              ]}
            >
              R$ 5.200
            </Text>
          </View>
          <View style={[styles["metric-card"], styles["metric-card--expense"]]}>
            <Text style={styles["metric-card__label"]}>Despesas</Text>
            <Text
              style={[
                styles["metric-card__value"],
                styles["metric-card__value--expense"],
              ]}
            >
              R$ 2.400
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
