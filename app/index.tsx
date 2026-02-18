import { useAuth } from "@/ui/auth/vm/useAuth";
import { Redirect } from "expo-router";

export default function Index() {
  const { isAuthenticated } = useAuth();

  if (isAuthenticated) {
    return <Redirect href="/(tabs)" />;
  }

  return <Redirect href="/(auth)/login" />;
}
