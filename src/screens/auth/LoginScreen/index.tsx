import { useState } from "react";
import { View, Text, Switch } from "react-native";
import { AuthNavigationProp } from "../../../types/shared/Navigation";
import { useAppDispatch, useAppSelector } from "../../../hooks/useAppDispatch";
import { loginThunk } from "../../../thunks/authThunks";
import { selectIsLoading, selectAuthError } from "../../../slices/authSlice";
import { ScreenWrapper } from "../../../components/ScreenWrapper";
import { AuthHeader } from "../../../components/AuthHeader";
import { ErrorBanner } from "../../../components/ErrorBanner";
import { FormField } from "../../../components/FormField";
import { PasswordInput } from "../../../components/PasswordInput";
import { Button } from "../../../components/Button";
import { TextLink } from "../../../components/TextLink";
import { FooterRow } from "../../../components/FooterRow";
import { LogoSvg } from "../../../components/LogoSvg";
import { colors } from "../../../config/tokens";
import { styles } from "./styles";

type Props = {
  navigation: AuthNavigationProp<"Login">;
};

interface FieldErrors {
  email?: string;
  password?: string;
}

function validateEmail(email: string): string | undefined {
  if (!email.trim()) return "Email é obrigatório.";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
    return "Formato de email inválido.";
}

function validatePassword(password: string): string | undefined {
  if (!password) return "Senha é obrigatória.";
  if (password.length < 6) return "Senha deve ter pelo menos 6 caracteres.";
}

export function LoginScreen({ navigation }: Props) {
  const dispatch = useAppDispatch();
  const isLoading = useAppSelector(selectIsLoading);
  const authError = useAppSelector(selectAuthError);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({});

  function validate(): boolean {
    const errors: FieldErrors = {
      email: validateEmail(email),
      password: validatePassword(password),
    };
    setFieldErrors(errors);
    return !errors.email && !errors.password;
  }

  async function handleLogin() {
    setError(null);
    if (!validate()) return;

    try {
      await dispatch(
        loginThunk({ email: email.trim().toLowerCase(), password }),
      );
    } catch (err) {
      setError(err instanceof Error ? err.message : "Erro ao fazer login.");
    }
  }

  function clearFieldError(field: keyof FieldErrors) {
    setFieldErrors((prev) => ({ ...prev, [field]: undefined }));
  }

  return (
    <ScreenWrapper>
      <AuthHeader
        logoComponent={<LogoSvg size={96} />}
        title="Bem-vindo de volta"
        subtitle="Acesse sua conta para continuar"
      />

      <ErrorBanner message={error} />

      <View style={styles["form"]}>
        <FormField
          label="Email"
          leftIcon="✉️"
          value={email}
          onChangeText={(v) => {
            setEmail(v);
            clearFieldError("email");
          }}
          error={fieldErrors.email}
          keyboardType="email-address"
          autoCapitalize="none"
          autoCorrect={false}
          editable={!isLoading}
          accessibilityLabel="Campo de email"
          placeholder="seu@email.com"
          testID="login__email-input"
        />

        <PasswordInput
          label="Senha"
          leftIcon="🔒"
          value={password}
          onChangeText={(v) => {
            setPassword(v);
            clearFieldError("password");
          }}
          error={fieldErrors.password}
          editable={!isLoading}
          accessibilityLabel="Campo de senha"
          testID="login__password-input"
        />

        <View style={styles["options-row"]}>
          <View style={styles["remember-row"]}>
            <Switch
              value={rememberMe}
              onValueChange={setRememberMe}
              trackColor={{ false: colors.border, true: colors.primarySwitch }}
              thumbColor={rememberMe ? colors.primary : colors.textDisabled}
              style={styles["switch"]}
              accessibilityLabel="Lembrar-me"
              testID="login__remember-switch"
            />
            <Text style={styles["remember-text"]}>Lembrar-me</Text>
          </View>
          <TextLink
            onPress={() => navigation.navigate("ForgotPassword")}
            testID="login__forgot-link"
          >
            Esqueceu a senha?
          </TextLink>
        </View>

        <Button
          label="ENTRAR"
          variant="gradient"
          onPress={handleLogin}
          loading={isLoading}
          testID="login__submit-btn"
        />

        <View style={styles["divider"]}>
          <View style={styles["divider__line"]} />
          <Text style={styles["divider__label"]}>ou</Text>
          <View style={styles["divider__line"]} />
        </View>

        <FooterRow
          text="Não tem uma conta? "
          linkText="Criar conta"
          onPress={() => navigation.navigate("Register")}
          testID="login__register-link"
        />
      </View>
    </ScreenWrapper>
  );
}
