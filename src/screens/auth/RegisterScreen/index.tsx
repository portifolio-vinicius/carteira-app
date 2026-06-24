import { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { AuthNavigationProp } from "../../../types/shared/Navigation";
import { useAppDispatch, useAppSelector } from "../../../hooks/useAppDispatch";
import { registerThunk } from "../../../thunks/authThunks";
import { selectIsLoading, selectAuthError } from "../../../slices/authSlice";
import { ScreenWrapper } from "../../../components/ScreenWrapper";
import { AuthHeader } from "../../../components/AuthHeader";
import { ErrorBanner } from "../../../components/ErrorBanner";
import { FormField } from "../../../components/FormField";
import { PasswordInput } from "../../../components/PasswordInput";
import { Button } from "../../../components/Button";
import { FooterRow } from "../../../components/FooterRow";
import { LogoSvg } from "../../../components/LogoSvg";
import { colors } from "../../../config/tokens";
import { styles } from "./styles";

type Props = {
  navigation: AuthNavigationProp<"Register">;
};

interface FieldErrors {
  name?: string;
  email?: string;
  password?: string;
  confirmPassword?: string;
  terms?: string;
}

type PasswordStrength = { level: 0 | 1 | 2 | 3; label: string; color: string };

function getPasswordStrength(pwd: string): PasswordStrength {
  if (pwd.length === 0) return { level: 0, label: "", color: colors.border };
  if (pwd.length < 6)
    return { level: 1, label: "Fraca", color: colors.errorRed };
  const hasUpper = /[A-Z]/.test(pwd);
  const hasNumber = /[0-9]/.test(pwd);
  const hasSymbol = /[^A-Za-z0-9]/.test(pwd);
  if (pwd.length >= 8 && hasUpper && hasNumber && hasSymbol) {
    return { level: 3, label: "Forte", color: colors.successGreen };
  }
  return { level: 2, label: "Média", color: colors.warningOrange };
}

function validate(
  name: string,
  email: string,
  password: string,
  confirmPassword: string,
  acceptedTerms: boolean,
): FieldErrors {
  const errors: FieldErrors = {};

  if (!name.trim()) errors.name = "Nome é obrigatório.";
  else if (name.trim().length < 3)
    errors.name = "Nome deve ter pelo menos 3 caracteres.";

  if (!email.trim()) errors.email = "Email é obrigatório.";
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
    errors.email = "Formato de email inválido.";

  if (!password) errors.password = "Senha é obrigatória.";
  else if (password.length < 6)
    errors.password = "Senha deve ter pelo menos 6 caracteres.";

  if (!confirmPassword) errors.confirmPassword = "Confirmação é obrigatória.";
  else if (confirmPassword !== password)
    errors.confirmPassword = "As senhas não conferem.";

  if (!acceptedTerms)
    errors.terms = "Você deve aceitar os termos para continuar.";

  return errors;
}

function hasErrors(errors: FieldErrors): boolean {
  return Object.values(errors).some(Boolean);
}

export function RegisterScreen({ navigation }: Props) {
  const dispatch = useAppDispatch();
  const isLoading = useAppSelector(selectIsLoading);
  const authError = useAppSelector(selectAuthError);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [acceptedTerms, setAcceptedTerms] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({});

  const strength = getPasswordStrength(password);

  function clearFieldError(field: keyof FieldErrors) {
    setFieldErrors((prev) => ({ ...prev, [field]: undefined }));
  }

  async function handleRegister() {
    setError(null);
    const errors = validate(
      name,
      email,
      password,
      confirmPassword,
      acceptedTerms,
    );
    setFieldErrors(errors);
    if (hasErrors(errors)) return;

    try {
      await dispatch(registerThunk({
        name: name.trim(),
        email: email.trim().toLowerCase(),
        password,
      }));
    } catch (err) {
      setError(err instanceof Error ? err.message : "Erro ao criar conta.");
    }
  }

  return (
    <ScreenWrapper>
      <AuthHeader
        logoComponent={<LogoSvg size={50} />}
        title="Criar conta"
        subtitle="Preencha seus dados para se cadastrar"
      />

      <ErrorBanner message={error} />

      <View style={styles.form}>
        <FormField
          label="Nome completo"
          placeholder="Seu nome"
          value={name}
          onChangeText={(v) => {
            setName(v);
            clearFieldError("name");
          }}
          error={fieldErrors.name}
          autoCapitalize="words"
          editable={!isLoading}
          accessibilityLabel="Campo de nome completo"
        />

        <FormField
          label="Email"
          placeholder="seu@email.com"
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
        />

        <PasswordInput
          label="Senha"
          value={password}
          onChangeText={(v) => {
            setPassword(v);
            clearFieldError("password");
          }}
          error={fieldErrors.password}
          editable={!isLoading}
          accessibilityLabel="Campo de senha"
        />

        {password.length > 0 && (
          <View style={styles["strength-container"]}>
            <View style={styles["strength-bars"]}>
              {([1, 2, 3] as const).map((bar) => (
                <View
                  key={bar}
                  style={[
                    styles["strength-bar"],
                    {
                      backgroundColor:
                        strength.level >= bar ? strength.color : colors.border,
                    },
                  ]}
                />
              ))}
            </View>
            <Text style={[styles["strength-label"], { color: strength.color }]}>
              {strength.label}
            </Text>
          </View>
        )}

        <PasswordInput
          label="Confirmar senha"
          value={confirmPassword}
          onChangeText={(v) => {
            setConfirmPassword(v);
            clearFieldError("confirmPassword");
          }}
          error={fieldErrors.confirmPassword}
          editable={!isLoading}
          accessibilityLabel="Campo de confirmação de senha"
        />

        {confirmPassword.length > 0 && (
          <Text
            style={[
              styles["match-hint"],
              {
                color:
                  confirmPassword === password
                    ? colors.successGreen
                    : colors.errorRed,
              },
            ]}
          >
            {confirmPassword === password
              ? "✓ Senhas conferem"
              : "✗ Senhas não conferem"}
          </Text>
        )}

        <View style={styles["terms-row"]}>
          <TouchableOpacity
            style={[
              styles.checkbox,
              acceptedTerms ? styles["checkbox--checked"] : null,
            ]}
            onPress={() => {
              setAcceptedTerms((v) => !v);
              clearFieldError("terms");
            }}
            accessibilityLabel="Aceitar termos e condições"
          >
            {acceptedTerms && (
              <Text style={styles["checkbox__checkmark"]}>✓</Text>
            )}
          </TouchableOpacity>
          <Text style={styles["terms-text"]}>
            Eu li e aceito os{" "}
            <Text style={styles["terms-link"]}>Termos de Uso</Text> e a{" "}
            <Text style={styles["terms-link"]}>Política de Privacidade</Text>
          </Text>
        </View>
        {fieldErrors.terms !== undefined && (
          <Text style={[styles["field-error"], { marginTop: -8 }]}>
            {fieldErrors.terms}
          </Text>
        )}

        <Button
          label="CRIAR CONTA"
          onPress={handleRegister}
          loading={isLoading}
        />

        <FooterRow
          text="Já tem uma conta? "
          linkText="Entrar"
          onPress={() => navigation.navigate("Login")}
        />
      </View>
    </ScreenWrapper>
  );
}
