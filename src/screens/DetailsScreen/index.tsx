import {
  View,
  Text,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import { NavigationProp, RouteProps } from "../../types/shared/Navigation";
import { styles } from "./styles";

type Props = {
  navigation: NavigationProp<"Details">;
  route: RouteProps<"Details">;
};

export function DetailsScreen({ navigation, route }: Props) {
  const { userId } = route.params;

  const infoItems = [
    { label: "Usuário ID", value: userId },
    { label: "Status", value: "● Ativo" },
    { label: "Último acesso", value: "24/06/2026" },
    { label: "Plano", value: "Premium" },
  ];

  return (
    <SafeAreaView style={styles.safe}>
      <ScrollView contentContainerStyle={styles.content}>
        {infoItems.map((item) => (
          <View key={item.label} style={styles["info-card"]}>
            <Text style={styles["info-card__label"]}>{item.label}</Text>
            <Text style={styles["info-card__value"]}>{item.value}</Text>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}
