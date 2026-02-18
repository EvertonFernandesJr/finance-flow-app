import { authStyles } from "@/shared/styles/auth-styles";
import { ThemedText } from "@/shared/themes/themed-text";
import { ThemedView } from "@/shared/themes/themed-view";
import Button from "@/ui/shared/components/Button";
import { ThemedInputForm } from "@/ui/shared/components/input/themedInputForm";
import AntDesign from "@expo/vector-icons/AntDesign";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  KeyboardAvoidingView,
  Platform,
  TouchableOpacity,
  View,
} from "react-native";
import { z } from "zod";
import { useAuth } from "../vm/useAuth";

import { Colors } from "@/shared/constants/Theme";
import React, { useState } from "react";
import { useColorScheme } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const schema = z.object({
  email: z
    .string({
      error: "O email é obrigatório!",
    })
    .nonempty("O email é obrigatório!"),
  password: z
    .string({
      error: "A senha é obrigatória!",
    })
    .nonempty("A senha é obrigatória!")
    .min(6, "A senha deve ter pelo menos 6 caracteres!"),
});

export const LoginView = () => {
  const { signIn } = useAuth();
  const [isLoading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const theme = useColorScheme() ?? "light";
  const { control, handleSubmit, formState } = useForm({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (formData: { email: string; password: string }) => {
    const { email, password } = formData;

    await signIn(email, password);
  };

  return (
    <SafeAreaView edges={["top", "bottom"]} style={authStyles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={authStyles.content}
      >
        <ThemedView
          style={{
            flex: 1,
            paddingHorizontal: 24,
            justifyContent: "center",
          }}
        >
          <View style={authStyles.header}>
            <ThemedText type="title">FinanceFlow</ThemedText>
            <ThemedText type="subtitle">Faça Login para acessar</ThemedText>
          </View>

          <View style={authStyles.form}>
            <ThemedInputForm
              control={control}
              name="email"
              label="Email"
              placeholder="Digite seu email"
              keyboardType="email-address"
              autoCapitalize="none"
            />
            <ThemedInputForm
              control={control}
              name="password"
              label="Senha"
              placeholder="Digite sua senha"
              secureTextEntry={!showPassword}
              error={formState?.errors.password?.message}
              rightElement={
                <TouchableOpacity
                  style={authStyles.eyeButton}
                  onPress={() => setShowPassword(prev => !prev)}
                >
                  <AntDesign
                    name={showPassword ? "eye" : "eye-invisible"}
                    size={20}
                    color={Colors[theme].icon}
                  />
                </TouchableOpacity>
              }
            />
            <Button
              isLoading={isLoading}
              title="Login"
              onPress={handleSubmit(onSubmit)}
            ></Button>
          </View>
        </ThemedView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};
