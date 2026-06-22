import { View, Text } from "react-native";
import { NavigationProp, RouteProps } from "../../types/shared/Navigation";
import { Button } from "../../components/Button";
import { styles } from "./styles";

type Props = {
  navigation: NavigationProp<"Details">;
  route: RouteProps<"Details">;
};

export function DetailsScreen({ navigation, route }: Props) {
  const { userId } = route.params;
  return (
    <View style={styles["screen__container"]}>
      <Text style={styles["screen__title"]}>Detalhes</Text>
      <Text style={styles["screen__info"]}>Usuário ID: {userId}</Text>
      <Button label="Voltar" onPress={() => navigation.goBack()} />
    </View>
  );
}
