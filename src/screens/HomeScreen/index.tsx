import { View, Text, TouchableOpacity } from "react-native";
import { NavigationProp } from "../../types/shared/Navigation";
import { useAuth } from "../../config/AuthContext";
import { styles } from "./styles";

type Props = {
  navigation: NavigationProp<"Home">;
};

export function HomeScreen({ navigation }: Props) {
  const { user, signOut } = useAuth();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tela Inicial</Text>
      <Text style={styles.welcome}>Olá, {user?.name ?? "usuário"} 👋</Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Details", { userId: "123" })}
      >
        <Text style={styles["button__text"]}>Ver Detalhes</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.button, styles["button--secondary"]]}
        onPress={() => navigation.navigate("Profile")}
      >
        <Text style={styles["button__text"]}>Meu Perfil</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.button, styles["button--logout"]]}
        onPress={signOut}
      >
        <Text style={styles["button__text"]}>Sair</Text>
      </TouchableOpacity>
    </View>
  );
}
