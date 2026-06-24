import {
  View,
  Text,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import { TabNavigationProp } from "../../types/shared/Navigation";
import { useAppDispatch, useAppSelector } from "../../hooks/useAppDispatch";
import { logoutThunk } from "../../thunks/authThunks";
import { selectUser } from "../../slices/authSlice";
import { styles } from "./styles";

type Props = {
  navigation: TabNavigationProp<"Profile">;
};

export function ProfileScreen({ navigation }: Props) {
  const dispatch = useAppDispatch();
  const user = useAppSelector(selectUser);

  const initials = user?.name
    ? user.name
        .split(" ")
        .map((w: string) => w[0])
        .slice(0, 2)
        .join("")
        .toUpperCase()
    : "U";

  return (
    <SafeAreaView style={styles.safe}>
      <ScrollView contentContainerStyle={styles.content}>
        {/* Avatar */}
        <View style={styles.avatar__wrapper}>
          <View style={styles.avatar}>
            <Text style={styles["avatar__text"]}>{initials}</Text>
          </View>
          <Text style={styles["profile__name"]}>{user?.name ?? "Usuário"}</Text>
          <Text style={styles["profile__email"]}>{user?.email ?? ""}</Text>
        </View>

        {/* Info Card */}
        <View style={styles["info-card"]}>
          <View style={styles["info-row"]}>
            <Text style={styles["info-row__label"]}>Conta criada</Text>
            <Text style={styles["info-row__value"]}>01/01/2026</Text>
          </View>
          <View style={styles["info-divider"]} />
          <View style={styles["info-row"]}>
            <Text style={styles["info-row__label"]}>Plano</Text>
            <Text style={styles["info-row__value"]}>Premium</Text>
          </View>
        </View>

        {/* Ações */}
        <TouchableOpacity
          style={styles["btn-logout"]}
          onPress={() => dispatch(logoutThunk())}
          testID="profile__logout-btn"
        >
          <Text style={styles["btn-logout__text"]}>Sair da conta</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}
