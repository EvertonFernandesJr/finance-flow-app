import { authRepository } from "@/data/repo/auth-repository";
import { Session, User } from "@supabase/supabase-js";
import { router } from "expo-router";
import React, { createContext, useContext, useEffect, useState } from "react";
import { ActivityIndicator, View } from "react-native";

interface AuthContextProps {
  session: Session | null;
  user: User | null;
  isAuthenticated: boolean;
  signIn: (email: string, password: string) => Promise<void>;
  resetPassword: (email: string) => Promise<void>;
  signOut: () => Promise<void>;
}

const AuthContext = createContext({} as AuthContextProps);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [session, setSession] = useState<Session | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isInitializing, setIsInitializing] = useState(true);

  useEffect(() => {
    authRepository
      .getSession()
      .then(session => {
        setSession(session);
        setIsInitializing(false);
      })
      .catch(err => {
        console.log(">>> getSession ERRO:", err);
        setIsInitializing(false);
      });
  }, []);

  async function signIn(email: string, password: string) {
    setIsLoading(true);
    const { error } = await authRepository.signIn(email, password);

    if (error) {
      const message = error?.status as number as unknown as string;
      setIsLoading(false);
      alert("email ou senha incorretos");
    } else {
      setIsLoading(false);
      router.replace("/(tabs)");
    }
  }
  async function resetPassword(email: string) {
    setIsLoading(true);
    const { error } = await authRepository.resetPassword(email);

    if (error) {
      const message = error?.status as number as unknown as string;
      alert(message);
    } else {
      alert("Acesse o link enviado ao seu email e gere uma nova senha!");
      setIsLoading(false);
    }
  }
  async function signOut() {
    setIsLoading(true);
    const { error } = await authRepository.signOut();

    if (error) {
      const message = error?.status as number as unknown as string;
      alert(message);
    }
    setIsLoading(false);
    router.replace("/(auth)/login");
  }
  if (isInitializing)
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" />
      </View>
    );

  return (
    <AuthContext.Provider
      value={{
        session,
        user: session?.user || null,
        isAuthenticated: !!session,
        signIn,
        resetPassword,
        signOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth tem que estar dentro do AuthProvider");
  return context;
}
