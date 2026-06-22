import { createContext, useContext, useState, ReactNode } from "react";
import { IUser } from "../types/domain/User";
import { ILoginRequest, IRegisterRequest } from "../types/domain/Auth";
import { login as apiLogin, register as apiRegister } from "../api/authApi";

interface AuthContextData {
  user: IUser | null;
  isAuthenticated: boolean;
  signIn: (data: ILoginRequest) => Promise<void>;
  signUp: (data: IRegisterRequest) => Promise<void>;
  signOut: () => void;
}

const AuthContext = createContext<AuthContextData | null>(null);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<IUser | null>(null);

  async function signIn(data: ILoginRequest): Promise<void> {
    const response = await apiLogin(data);
    setUser(response.data);
  }

  async function signUp(data: IRegisterRequest): Promise<void> {
    const response = await apiRegister(data);
    setUser(response.data);
  }

  function signOut(): void {
    setUser(null);
  }

  return (
    <AuthContext.Provider
      value={{ user, isAuthenticated: user !== null, signIn, signUp, signOut }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth(): AuthContextData {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth deve ser usado dentro de AuthProvider");
  }
  return context;
}
