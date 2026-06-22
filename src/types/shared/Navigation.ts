import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RouteProp } from "@react-navigation/native";

export type AuthStackParamList = {
  Login: undefined;
  Register: undefined;
  ForgotPassword: undefined;
};

export type MainStackParamList = {
  Home: undefined;
  Details: { userId: string };
  Profile: undefined;
};

// Alias mantido para compatibilidade com telas existentes
export type RootStackParamList = MainStackParamList;

export type AuthNavigationProp<T extends keyof AuthStackParamList> =
  NativeStackNavigationProp<AuthStackParamList, T>;

export type NavigationProp<T extends keyof MainStackParamList> =
  NativeStackNavigationProp<MainStackParamList, T>;

export type RouteProps<T extends keyof MainStackParamList> = RouteProp<
  MainStackParamList,
  T
>;
