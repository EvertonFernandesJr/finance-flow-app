import { ThemedText } from "@/shared/themes/themed-text";
import { ThemedView } from "@/shared/themes/themed-view";
import { useAuth } from "@/ui/auth/vm/useAuth";
import Button from "@/ui/shared/components/Button";
import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomeScreen() {
  const { user, signOut } = useAuth();

  const handleLogout = async () => {
    await signOut();
    // TODO: navegar para login
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ThemedView
        style={{ flex: 1, paddingHorizontal: 24, justifyContent: "center" }}
      >
        <View style={{ gap: 16 }}>
          <ThemedText type="title">Bem-vindo!</ThemedText>
          <ThemedText>Email: {user?.email}</ThemedText>
          <Button title="Logout" onPress={handleLogout} />
        </View>
      </ThemedView>
    </SafeAreaView>
  );
}
