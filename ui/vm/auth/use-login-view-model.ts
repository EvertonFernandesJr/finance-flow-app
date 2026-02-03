import { authService } from "@/services/authService";
import { useRouter } from 'expo-router';
import { useState } from "react";

export function useLoginViewModel( service = authService){
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const signIn = async () => {
    if (!email || !password){
      return Error("Preencher todos os campos.")
    }
    setLoading(true);
    const { error } = await service.signIn(email,password)
    alert("Login realizado!")
    setLoading(false);
    if(error){
      return error;
    }
    router.replace("/(tabs)");
  };
  return { email, setEmail, password, setPassword, loading, signIn}
}