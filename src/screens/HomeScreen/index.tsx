import { View, Text, TouchableOpacity } from "react-native";
import { NavigationProp } from "../../types/shared/Navigation";
import { useAppDispatch, useAppSelector } from "../../hooks/useAppDispatch";
import { logoutThunk } from "../../thunks/authThunks";
import { selectUser } from "../../slices/authSlice";
import { styles } from "./styles";

type Props = {
  navigation: NavigationProp<"Home">;
};

export function HomeScreen({ navigation }: Props) {
  const dispatch = useAppDispatch();
  const user = useAppSelector(selectUser);

  function handleLogout() {
    dispatch(logoutThunk());
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tela Inicial</Text>
      <Text style={styles.welcome}>Olá, {user?.name ?? "usuário"} 👋</Text>

      <TouchableOpacity
        testID="home__details-btn"
        style={styles.button}
        onPress={() => navigation.navigate("Details", { userId: "123" })}
      >
        <Text style={styles["button__text"]}>Ver Detalhes</Text>
      </TouchableOpacity>

      <TouchableOpacity
        testID="home__profile-btn"
        style={[styles.button, styles["button--secondary"]]}
        onPress={() => navigation.navigate("Profile")}
      >
        <Text style={styles["button__text"]}>Meu Perfil</Text>
      </TouchableOpacity>

      <TouchableOpacity
        testID="home__logout-btn"
        style={[styles.button, styles["button--logout"]]}
        onPress={handleLogout}
      >
        <Text style={styles["button__text"]}>Sair</Text>
      </TouchableOpacity>
    </View>
  );
}
