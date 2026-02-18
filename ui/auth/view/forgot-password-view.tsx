import { authStyles } from "@/shared/styles/auth-styles";
import { ThemedText } from "@/shared/themes/themed-text";
import { ThemedView } from "@/shared/themes/themed-view";
import { useAuth } from "@/ui/auth/vm/useAuth";
import Button from "@/ui/shared/components/Button";
import { ThemedInputForm } from "@/ui/shared/components/input/themedInputForm";
import { zodResolver } from "@hookform/resolvers/zod";
import { router } from "expo-router";
import { useForm } from "react-hook-form";
import {
  KeyboardAvoidingView,
  Platform,
  TouchableOpacity,
  View,
} from "react-native";
import { z } from "zod";

import React, { useState } from "react";
import { useColorScheme } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const schema = z.object({
  email: z
    .string({
      error: "O email é obrigatório",
    })
    .nonempty("O email é obrigatório"),
});

export const ForgotPasswordView = () => {
  const { resetPassword } = useAuth();
  const [isLoading, setLoading] = useState(false);
  const theme = useColorScheme ?? "light";
  const { control, handleSubmit, formState } = useForm({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data: { email: string }) => {
    const { email } = data;

    try {
      setLoading(true);
      await resetPassword(email);
    } finally {
      setLoading(false);
    }
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
            <ThemedText type="title">Lembrar senha</ThemedText>
            <ThemedText type="subtitle">
              Complete o campo abaixo para receber o link de recureração no seu
              email
            </ThemedText>
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

            <TouchableOpacity
              style={authStyles.link}
              onPress={() => router.replace("/(auth)/login")}
            >
              <ThemedText type="link">Login</ThemedText>
            </TouchableOpacity>

            <Button
              isLoading={isLoading}
              title="Enviar"
              onPress={handleSubmit(onSubmit)}
            ></Button>
          </View>
        </ThemedView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};
