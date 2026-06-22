import { View, Text } from "react-native";
import { NavigationProp } from "../../types/shared/Navigation";
import { Button } from "../../components/Button";
import { styles } from "./styles";

type Props = {
  navigation: NavigationProp<"Profile">;
};

export function ProfileScreen({ navigation }: Props) {
  return (
    <View style={styles["screen__container"]}>
      <Text style={styles["screen__title"]}>Perfil</Text>
      <Text style={styles["screen__name"]}>Vinicius Franco</Text>
      <Text style={styles["screen__email"]}>vinicius@exemplo.com</Text>
      <Button label="Voltar" onPress={() => navigation.goBack()} />
    </View>
  );
}
