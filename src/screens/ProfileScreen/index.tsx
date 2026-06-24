import { View, Text } from "react-native";
import { NavigationProp } from "../../types/shared/Navigation";
import { useAppDispatch, useAppSelector } from "../../hooks/useAppDispatch";
import { logoutThunk } from "../../thunks/authThunks";
import { selectUser } from "../../slices/authSlice";
import { Button } from "../../components/Button";
import { styles } from "./styles";

type Props = {
  navigation: NavigationProp<"Profile">;
};

export function ProfileScreen({ navigation }: Props) {
  const dispatch = useAppDispatch();
  const user = useAppSelector(selectUser);

  function handleLogout() {
    dispatch(logoutThunk());
  }

  return (
    <View style={styles["screen__container"]}>
      <Text style={styles["screen__title"]}>Perfil</Text>
      <Text style={styles["screen__name"]}>{user?.name || "Usuário"}</Text>
      <Text style={styles["screen__email"]}>{user?.email || ""}</Text>
      <Button label="Sair" onPress={handleLogout} />
      <Button label="Voltar" onPress={() => navigation.goBack()} />
    </View>
  );
}
