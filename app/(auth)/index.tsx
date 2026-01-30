import { useRouter } from "expo-router";
import { useState } from "react";
import {
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export default function Index() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleLogin = () => {
    if (!email || !password) {
      alert("preencha todos os campos");
      return;
    }
    alert("Login realizado!");
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.kview}
    >
      <View style={styles.view}>
        <Text style={styles.text}>Login</Text>

        <TextInput
          style={styles.input}
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          returnKeyType="done"
        />
        <TextInput
          style={styles.input}
          value={password}
          onChangeText={setPassword}
          placeholder="Password"
          secureTextEntry
          returnKeyType="done"
        />
        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text>{"Login"}</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  text: {
    margin: 10,
    fontSize: 20,
  },
  text2: {
    marginTop: 10,
    fontSize: 9,
  },
  input: {
    borderWidth: 1,
    borderColor: "black",
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
  kview: {
    flex: 1,
  },
});
