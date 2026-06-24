import {
  View,
  Text,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { TabNavigationProp } from "../../types/shared/Navigation";
import { useAppDispatch, useAppSelector } from "../../hooks/useAppDispatch";
import { logoutThunk } from "../../thunks/authThunks";
import { selectUser } from "../../slices/authSlice";
import { HeroCard } from "../../components/HeroCard";
import { colors } from "../../config/tokens";
import { styles } from "./styles";

type Props = { navigation: TabNavigationProp<"Profile"> };

type MenuItem = {
  icon: React.ComponentProps<typeof MaterialCommunityIcons>["name"];
  label: string;
};

const menuItems: MenuItem[] = [
  { icon: "shield-outline", label: "Segurança" },
  { icon: "bell-outline", label: "Notificações" },
  { icon: "help-circle-outline", label: "Ajuda" },
];

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
      <ScrollView
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        <HeroCard>
          <View style={styles.avatar}>
            <Text style={styles["avatar__text"]}>{initials}</Text>
          </View>
          <Text style={styles["profile__name"]}>{user?.name ?? "Usuário"}</Text>
          <Text style={styles["profile__email"]}>{user?.email ?? ""}</Text>
          <View style={styles["profile__badge"]}>
            <Text style={styles["profile__badge-text"]}>Premium</Text>
          </View>
        </HeroCard>

        <View style={styles["info-card"]}>
          <View style={styles["info-row"]}>
            <Text style={styles["info-row__label"]}>Conta criada</Text>
            <Text style={styles["info-row__value"]}>01/01/2026</Text>
          </View>
          <View style={styles["info-divider"]} />
          <View style={styles["info-row"]}>
            <Text style={styles["info-row__label"]}>Plano</Text>
            <View style={styles["info-row__badge"]}>
              <Text style={styles["info-row__badge-text"]}>Premium</Text>
            </View>
          </View>
        </View>

        <View style={styles["menu-card"]}>
          {menuItems.map((item, i) => (
            <View key={item.label}>
              {i > 0 && <View style={styles["menu__divider"]} />}
              <TouchableOpacity style={styles["menu__item"]}>
                <MaterialCommunityIcons
                  name={item.icon}
                  size={22}
                  color={colors.textMuted}
                  style={styles["menu__icon"]}
                />
                <Text style={styles["menu__label"]}>{item.label}</Text>
                <MaterialCommunityIcons
                  name="chevron-right"
                  size={20}
                  color={colors.border}
                />
              </TouchableOpacity>
            </View>
          ))}
        </View>

        <TouchableOpacity
          style={styles["logout-card"]}
          onPress={() => dispatch(logoutThunk())}
          testID="profile__logout-btn"
        >
          <MaterialCommunityIcons
            name="logout"
            size={22}
            color={colors.danger}
          />
          <Text style={styles["logout__label"]}>Sair da conta</Text>
        </TouchableOpacity>

        <Text style={styles.version}>v1.0.0</Text>
      </ScrollView>
    </SafeAreaView>
  );
}
