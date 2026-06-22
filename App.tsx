import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { AuthProvider, useAuth } from "./src/config/AuthContext";
import { LoginScreen } from "./src/screens/auth/LoginScreen";
import { RegisterScreen } from "./src/screens/auth/RegisterScreen";
import { ForgotPasswordScreen } from "./src/screens/auth/ForgotPasswordScreen";
import { HomeScreen } from "./src/screens/HomeScreen";
import { DetailsScreen } from "./src/screens/DetailsScreen";
import { ProfileScreen } from "./src/screens/ProfileScreen";
import {
  AuthStackParamList,
  MainStackParamList,
} from "./src/types/shared/Navigation";

const AuthStack = createNativeStackNavigator<AuthStackParamList>();
const MainStack = createNativeStackNavigator<MainStackParamList>();

function AuthNavigator() {
  return (
    <AuthStack.Navigator screenOptions={{ headerShown: false }}>
      <AuthStack.Screen name="Login" component={LoginScreen} />
      <AuthStack.Screen name="Register" component={RegisterScreen} />
      <AuthStack.Screen
        name="ForgotPassword"
        component={ForgotPasswordScreen}
        options={{ headerShown: true, title: "Recuperar Senha" }}
      />
    </AuthStack.Navigator>
  );
}

function MainNavigator() {
  return (
    <MainStack.Navigator initialRouteName="Home">
      <MainStack.Screen
        name="Home"
        component={HomeScreen}
        options={{ title: "Início" }}
      />
      <MainStack.Screen
        name="Details"
        component={DetailsScreen}
        options={{ title: "Detalhes" }}
      />
      <MainStack.Screen
        name="Profile"
        component={ProfileScreen}
        options={{ title: "Perfil" }}
      />
    </MainStack.Navigator>
  );
}

function RootNavigator() {
  const { isAuthenticated } = useAuth();
  return (
    <NavigationContainer>
      {isAuthenticated ? <MainNavigator /> : <AuthNavigator />}
    </NavigationContainer>
  );
}

export default function App() {
  return (
    <AuthProvider>
      <RootNavigator />
    </AuthProvider>
  );
}
