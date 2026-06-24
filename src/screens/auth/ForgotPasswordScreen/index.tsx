import { useState, useEffect, useRef } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { AuthNavigationProp } from "../../../types/shared/Navigation";
import { forgotPassword, resetPassword } from "../../../api/authApi";
import { ScreenWrapper } from "../../../components/ScreenWrapper";
import { AuthHeader } from "../../../components/AuthHeader";
import { ErrorBanner } from "../../../components/ErrorBanner";
import { FormField } from "../../../components/FormField";
import { PasswordInput } from "../../../components/PasswordInput";
import { Button } from "../../../components/Button";
import { TextLink } from "../../../components/TextLink";
import { styles } from "./styles";

type Props = {
  navigation: AuthNavigationProp<"ForgotPassword">;
};

type Step = "email" | "newPassword" | "done";

const RESEND_COOLDOWN = 60;

export function ForgotPasswordScreen({ navigation }: Props) {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState<string | null>(null);
  const [isSubmittingEmail, setIsSubmittingEmail] = useState(false);
  const [emailApiError, setEmailApiError] = useState<string | null>(null);

  const [userId, setUserId] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");
  const [newPasswordError, setNewPasswordError] = useState<string | null>(null);
  const [confirmNewPasswordError, setConfirmNewPasswordError] = useState<
    string | null
  >(null);
  const [isSubmittingPassword, setIsSubmittingPassword] = useState(false);
  const [passwordApiError, setPasswordApiError] = useState<string | null>(null);

  const [countdown, setCountdown] = useState(RESEND_COOLDOWN);
  const [canResend, setCanResend] = useState(false);
  const countdownRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const [step, setStep] = useState<Step>("email");

  useEffect(() => {
    return () => {
      if (countdownRef.current) clearInterval(countdownRef.current);
    };
  }, []);

  function startCountdown() {
    setCountdown(RESEND_COOLDOWN);
    setCanResend(false);
    if (countdownRef.current) clearInterval(countdownRef.current);

    countdownRef.current = setInterval(() => {
      setCountdown((c) => {
        if (c > 1) return c - 1;

        if (countdownRef.current) clearInterval(countdownRef.current);
        setCanResend(true);
        return 0;
      });
    }, 1000);
  }

  async function handleSendEmail() {
    setEmailApiError(null);

    if (!email.trim()) {
      setEmailError("Email é obrigatório.");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setEmailError("Formato de email inválido.");
      return;
    }
    setEmailError(null);

    setIsSubmittingEmail(true);
    try {
      const response = await forgotPassword({
        email: email.trim().toLowerCase(),
      });
      setUserId(response.data.userId);
      setStep("newPassword");
      startCountdown();
    } catch (err) {
      setEmailApiError(
        err instanceof Error ? err.message : "Erro ao enviar email.",
      );
    } finally {
      setIsSubmittingEmail(false);
    }
  }

  async function handleResend() {
    if (!canResend) return;
    setEmailApiError(null);
    setIsSubmittingEmail(true);
    try {
      const response = await forgotPassword({
        email: email.trim().toLowerCase(),
      });
      setUserId(response.data.userId);
      startCountdown();
    } catch (err) {
      setEmailApiError(
        err instanceof Error ? err.message : "Erro ao reenviar.",
      );
    } finally {
      setIsSubmittingEmail(false);
    }
  }

  async function handleResetPassword() {
    setPasswordApiError(null);

    const newPasswordErr = !newPassword
      ? "Senha é obrigatória."
      : newPassword.length < 6
        ? "Senha deve ter pelo menos 6 caracteres."
        : null;
    setNewPasswordError(newPasswordErr);

    const confirmErr = !confirmNewPassword
      ? "Confirmação é obrigatória."
      : confirmNewPassword !== newPassword
        ? "As senhas não conferem."
        : null;
    setConfirmNewPasswordError(confirmErr);

    if (newPasswordErr || confirmErr) return;

    setIsSubmittingPassword(true);
    try {
      await resetPassword({ userId, newPassword });
      if (countdownRef.current) clearInterval(countdownRef.current);
      setStep("done");
    } catch (err) {
      setPasswordApiError(
        err instanceof Error ? err.message : "Erro ao redefinir senha.",
      );
    } finally {
      setIsSubmittingPassword(false);
    }
  }

  return (
    <ScreenWrapper>
      {step === "email" && (
        <View style={styles.section}>
          <AuthHeader
            icon="🔐"
            title="Recuperar senha"
            subtitle="Informe o email cadastrado e enviaremos as instruções de redefinição."
          />

          <ErrorBanner message={emailApiError} />

          <FormField
            label="Email"
            value={email}
            onChangeText={(v) => {
              setEmail(v);
              setEmailError(null);
            }}
            error={emailError ?? undefined}
            keyboardType="email-address"
            autoCapitalize="none"
            autoCorrect={false}
            editable={!isSubmittingEmail}
            testID="forgot__email-input"
          />

          <Button
            label="ENVIAR INSTRUÇÕES"
            onPress={handleSendEmail}
            loading={isSubmittingEmail}
            testID="forgot__send-btn"
          />

          <TextLink
            onPress={() => navigation.navigate("Login")}
            testID="forgot__back-link"
          >
            ← Voltar ao login
          </TextLink>
        </View>
      )}

      {step === "newPassword" && (
        <View style={styles.section}>
          <AuthHeader
            icon="🔑"
            title="Código enviado!"
            subtitle="Simulando o link de redefinição — defina sua nova senha abaixo."
          />

          <View style={styles["info-card"]}>
            <Text style={styles["info-card__text"]}>
              📧 Email enviado para{" "}
              <Text style={styles["info-card__email"]}>{email}</Text>
            </Text>
          </View>

          <ErrorBanner message={passwordApiError} />

          <PasswordInput
            label="Nova senha"
            value={newPassword}
            onChangeText={(v) => {
              setNewPassword(v);
              setNewPasswordError(null);
            }}
            error={newPasswordError ?? undefined}
            editable={!isSubmittingPassword}
          />

          <PasswordInput
            label="Confirmar nova senha"
            value={confirmNewPassword}
            onChangeText={(v) => {
              setConfirmNewPassword(v);
              setConfirmNewPasswordError(null);
            }}
            error={confirmNewPasswordError ?? undefined}
            editable={!isSubmittingPassword}
          />

          <Button
            label="REDEFINIR SENHA"
            onPress={handleResetPassword}
            loading={isSubmittingPassword}
            testID="forgot__confirm-btn"
          />

          <View style={styles["resend-row"]}>
            <Text style={styles["resend-row__text"]}>Não recebeu? </Text>
            {canResend ? (
              <TouchableOpacity
                onPress={handleResend}
                disabled={isSubmittingEmail}
              >
                <Text style={styles["resend-row__link"]}>Reenviar</Text>
              </TouchableOpacity>
            ) : (
              <Text style={styles["resend-row__countdown"]}>
                Reenviar em {countdown}s
              </Text>
            )}
          </View>

          <TextLink onPress={() => setStep("email")}>← Alterar email</TextLink>
        </View>
      )}

      {step === "done" && (
        <View style={styles.section}>
          <AuthHeader
            icon="✅"
            title="Senha redefinida!"
            subtitle="Sua senha foi atualizada com sucesso. Agora você pode fazer login com a nova senha."
          />

          <Button
            label="IR PARA O LOGIN"
            onPress={() => navigation.navigate("Login")}
          />
        </View>
      )}
    </ScreenWrapper>
  );
}
