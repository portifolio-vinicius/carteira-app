import { Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./src/store";
import { useAppSelector } from "./src/hooks/useAppDispatch";
import { selectAuthState } from "./src/slices/authSlice";
import { LoginScreen } from "./src/screens/auth/LoginScreen";
import { RegisterScreen } from "./src/screens/auth/RegisterScreen";
import { ForgotPasswordScreen } from "./src/screens/auth/ForgotPasswordScreen";
import { HomeScreen } from "./src/screens/HomeScreen";
import { DetailsScreen } from "./src/screens/DetailsScreen";
import { ProfileScreen } from "./src/screens/ProfileScreen";
import { LoadingScreen } from "./src/screens/LoadingScreen";
import {
  AuthStackParamList,
  MainStackParamList,
  TabParamList,
} from "./src/types/shared/Navigation";
import { colors } from "./src/config/tokens";

const AuthStack = createNativeStackNavigator<AuthStackParamList>();
const MainStack = createNativeStackNavigator<MainStackParamList>();
const Tab = createBottomTabNavigator<TabParamList>();

const TAB_ICONS: Record<
  keyof TabParamList,
  { active: string; inactive: string }
> = {
  Home: { active: "🏠", inactive: "🏠" },
  Profile: { active: "👤", inactive: "👤" },
};

function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: colors.textMuted,
        tabBarStyle: {
          borderTopColor: colors.border,
          paddingBottom: 4,
          height: 60,
        },
        tabBarLabelStyle: { fontSize: 12 },
        tabBarIcon: ({ focused }) => (
          <Text style={{ fontSize: 22 }}>
            {focused
              ? TAB_ICONS[route.name].active
              : TAB_ICONS[route.name].inactive}
          </Text>
        ),
      })}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{ title: "Início" }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{ title: "Perfil" }}
      />
    </Tab.Navigator>
  );
}

function AuthNavigator() {
  return (
    <AuthStack.Navigator screenOptions={{ headerShown: false }}>
      <AuthStack.Screen name="Login" component={LoginScreen} />
      <AuthStack.Screen name="Register" component={RegisterScreen} />
      <AuthStack.Screen
        name="ForgotPassword"
        component={ForgotPasswordScreen}
        options={{ headerShown: false }}
      />
    </AuthStack.Navigator>
  );
}

function MainNavigator() {
  return (
    <MainStack.Navigator screenOptions={{ headerShown: false }}>
      <MainStack.Screen name="Tabs" component={TabNavigator} />
      <MainStack.Screen
        name="Details"
        component={DetailsScreen}
        options={{ headerShown: true, title: "Detalhes" }}
      />
    </MainStack.Navigator>
  );
}

function RootNavigator() {
  const { isAuthenticated, isLoading } = useAppSelector(selectAuthState);

  if (isLoading) return <LoadingScreen />;

  return (
    <NavigationContainer>
      {isAuthenticated ? <MainNavigator /> : <AuthNavigator />}
    </NavigationContainer>
  );
}

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={<LoadingScreen />} persistor={persistor}>
        <RootNavigator />
      </PersistGate>
    </Provider>
  );
}
