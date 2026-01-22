import { useRouter } from "expo-router";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function index() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => router.navigate("/(auth)")}
      >
        <Text>Sair</Text>
      </TouchableOpacity>
      <Text style={styles.rootText}>Você está logado</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  rootText: {
    color: "black",
    fontSize: 30,
  },
  button: {
    right: 150,
    bottom: 325,
    width: 37,
    height: 30,
    borderWidth: 1,
    borderColor: "black",
    alignItems: "center",
    justifyContent: "center",
    margin: 5,
    borderRadius: 10,
  },
});
