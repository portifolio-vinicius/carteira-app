import { routes } from "../config/routes";
import { IUser } from "../types/domain/User";
import {
  ILoginRequest,
  IRegisterRequest,
  IForgotPasswordRequest,
  IResetPasswordRequest,
} from "../types/domain/Auth";
import { IApiResponse } from "../types/shared/ApiResponse";

type UserRecord = IUser & { password: string; resetToken: string | null };

// Wrapper para fetch com tratamento de erros HTTP centralizado
async function fetchJson<T>(url: string, options?: RequestInit): Promise<T> {
  const response = await fetch(url, {
    headers: { "Content-Type": "application/json" },
    ...options,
  });

  if (!response.ok) {
    const text = await response.text();
    throw new Error(text || `HTTP ${response.status}`);
  }

  return response.json() as Promise<T>;
}

// Remove dados sensíveis (senha, resetToken) antes de retornar usuário ao cliente
function toSafeUser(record: UserRecord): IUser {
  return {
    id: record.id,
    name: record.name,
    email: record.email,
    createdAt: record.createdAt,
  };
}

// Busca usuário por email e valida senha antes de autenticar
export async function login(data: ILoginRequest): Promise<IApiResponse<IUser>> {
  const users = await fetchJson<UserRecord[]>(routes.users.byEmail(data.email));

  if (users.length === 0) {
    throw new Error("Email não cadastrado.");
  }

  if (users[0].password !== data.password) {
    throw new Error("Senha incorreta.");
  }

  return { success: true, data: toSafeUser(users[0]) };
}

// Verifica se email já existe antes de criar novo usuário
export async function register(
  data: IRegisterRequest,
): Promise<IApiResponse<IUser>> {
  const existing = await fetchJson<UserRecord[]>(
    routes.users.byEmail(data.email),
  );

  if (existing.length > 0) {
    throw new Error("Este email já está cadastrado.");
  }

  const newUser: Omit<UserRecord, "id"> = {
    name: data.name,
    email: data.email,
    password: data.password,
    createdAt: new Date(),
    resetToken: null,
  };

  const created = await fetchJson<UserRecord>(routes.users.list, {
    method: "POST",
    body: JSON.stringify(newUser),
  });

  return { success: true, data: toSafeUser(created) };
}

// Gera token de reset e armazena no usuário para validação posterior
export async function forgotPassword(
  data: IForgotPasswordRequest,
): Promise<IApiResponse<{ userId: string; resetToken: string }>> {
  const users = await fetchJson<UserRecord[]>(routes.users.byEmail(data.email));

  if (users.length === 0) {
    throw new Error("Email não encontrado.");
  }

  const resetToken = Math.random().toString(36).slice(2, 10).toUpperCase();

  await fetchJson<UserRecord>(routes.users.byId(users[0].id), {
    method: "PATCH",
    body: JSON.stringify({ resetToken }),
  });

  return {
    success: true,
    data: { userId: users[0].id, resetToken },
    message: "Instruções enviadas para o seu email.",
  };
}

// Atualiza senha e limpa token de reset para evitar reuso
export async function resetPassword(
  data: IResetPasswordRequest,
): Promise<IApiResponse<IUser>> {
  const updated = await fetchJson<UserRecord>(routes.users.byId(data.userId), {
    method: "PATCH",
    body: JSON.stringify({ password: data.newPassword, resetToken: null }),
  });

  return {
    success: true,
    data: toSafeUser(updated),
    message: "Senha atualizada com sucesso.",
  };
}

export async function getUsers(): Promise<IApiResponse<IUser[]>> {
  const users = await fetchJson<UserRecord[]>(routes.users.list);
  return { success: true, data: users.map(toSafeUser) };
}

export async function deleteUser(userId: string): Promise<IApiResponse<null>> {
  await fetchJson<Record<string, never>>(routes.users.byId(userId), {
    method: "DELETE",
  });
  return { success: true, data: null };
}
