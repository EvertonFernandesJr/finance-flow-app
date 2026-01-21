import { useState } from "react";
import {
  Alert,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

import { useRouter } from "expo-router";
import { supabase } from "../supabase/client";

export default function Index() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSignUp = async () => {
    if (!email || !password) {
      alert("Preencha todos os campos");
      return;
    }
    setLoading(true);
    try {
      const { error } = await supabase.auth.signUp({
        email,
        password,
      });

      if (error) {
        Alert.alert("Erro", error.message);
        return;
      }
      Alert.alert("Sucesso", "Conta criada! Verifique email");
    } catch (error: any) {
      console.error("SignUp error:", error);
      Alert.alert("Erro", error?.message || "Algo deu errado");
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.view}>
      <Text style={styles.text}>Sign Up</Text>

      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        editable={!loading}
      />
      <TextInput
        style={styles.input}
        value={password}
        onChangeText={setPassword}
        placeholder="Password"
        secureTextEntry
        editable={!loading}
      />
      <TouchableOpacity
        style={styles.button}
        onPress={handleSignUp}
        disabled={loading}
      >
        <Text>{loading ? "Carregando..." : "Criar Conta"}</Text>
      </TouchableOpacity>
      <Text style={styles.text2}>Possui uma conta?</Text>
      <TouchableOpacity style={styles.button} onPress={() => router.back()}>
        <Text>Ir para Login</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    marginBottom: 10,
  },
  text2: {
    marginTop: 10,
    fontSize: 9,
  },
  input: {
    borderWidth: 1,
    borderColor: "black",
    alignItems: "center",
    justifyContent: "center",
    margin: 5,
    width: "80%",
    borderRadius: 10,
  },
  view: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    width: 120,
    height: 30,
    borderWidth: 1,
    borderColor: "black",
    alignItems: "center",
    justifyContent: "center",
    margin: 5,
    borderRadius: 10,
  },
});
