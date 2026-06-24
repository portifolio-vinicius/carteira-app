import { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { TabNavigationProp } from "../../types/shared/Navigation";
import { useAppSelector } from "../../hooks/useAppDispatch";
import { selectUser } from "../../slices/authSlice";
import { HeroCard } from "../../components/HeroCard";
import { MetricCard } from "../../components/MetricCard";
import { styles } from "./styles";

type Props = { navigation: TabNavigationProp<"Home"> };

export function HomeScreen({ navigation }: Props) {
  const user = useAppSelector(selectUser);
  const [balanceVisible, setBalanceVisible] = useState(true);

  const firstName = user?.name?.split(" ")[0] ?? "usuário";

  return (
    <SafeAreaView style={styles.safe}>
      <ScrollView
        style={styles.scroll}
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.header}>
          <View>
            <Text style={styles["header__title"]}>Olá, {firstName}</Text>
            <Text style={styles["header__subtitle"]}>Bem-vindo de volta</Text>
          </View>
          <MaterialCommunityIcons
            name="bell-outline"
            size={24}
            color="#616161"
          />
        </View>

        <HeroCard>
          <View style={styles["balance__top"]}>
            <Text style={styles["balance__label"]}>Saldo disponível</Text>
            <TouchableOpacity
              onPress={() => setBalanceVisible((v) => !v)}
              hitSlop={{ top: 8, bottom: 8, left: 8, right: 8 }}
              accessibilityLabel={
                balanceVisible ? "Ocultar saldo" : "Mostrar saldo"
              }
            >
              <MaterialCommunityIcons
                name={balanceVisible ? "eye-outline" : "eye-off-outline"}
                size={20}
                color="rgba(255,255,255,0.8)"
              />
            </TouchableOpacity>
          </View>
          <Text style={styles["balance__value"]}>
            {balanceVisible ? "R$ 12.450,00" : "R$ ••••••"}
          </Text>
          <View style={styles["balance__divider"]} />
          <View style={styles["balance__pills"]}>
            <View style={styles["balance__pill"]}>
              <MaterialCommunityIcons
                name="trending-up"
                size={14}
                color="rgba(255,255,255,0.9)"
              />
              <Text style={styles["balance__pill-text"]}>+R$ 5.200</Text>
            </View>
            <View style={styles["balance__pill"]}>
              <MaterialCommunityIcons
                name="trending-down"
                size={14}
                color="rgba(255,255,255,0.9)"
              />
              <Text style={styles["balance__pill-text"]}>-R$ 2.400</Text>
            </View>
          </View>
        </HeroCard>

        <Text style={styles["section__label"]}>ESTE MÊS</Text>

        <View style={styles["metrics-row"]}>
          <MetricCard
            label="Receitas"
            value="R$ 5.200"
            icon="trending-up"
            variant="income"
          />
          <MetricCard
            label="Despesas"
            value="R$ 2.400"
            icon="trending-down"
            variant="expense"
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
