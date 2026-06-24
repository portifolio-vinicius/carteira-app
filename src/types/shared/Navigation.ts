import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";
import { RouteProp } from "@react-navigation/native";

export type AuthStackParamList = {
  Login: undefined;
  Register: undefined;
  ForgotPassword: undefined;
};

export type TabParamList = {
  Home: undefined;
  Profile: undefined;
};

export type MainStackParamList = {
  Tabs: undefined;
  Details: { userId: string };
};

// Alias mantido para compatibilidade
export type RootStackParamList = MainStackParamList;

export type AuthNavigationProp<T extends keyof AuthStackParamList> =
  NativeStackNavigationProp<AuthStackParamList, T>;

export type NavigationProp<T extends keyof MainStackParamList> =
  NativeStackNavigationProp<MainStackParamList, T>;

export type TabNavigationProp<T extends keyof TabParamList> =
  BottomTabNavigationProp<TabParamList, T>;

export type RouteProps<T extends keyof MainStackParamList> = RouteProp<
  MainStackParamList,
  T
>;
