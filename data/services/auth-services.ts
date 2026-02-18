import { ResetPasswordData } from "@/domain/model/auth/reset-password-data";
import { Session } from "@supabase/supabase-js";
import { supabase } from "./supabase/supabase-client";

export const authService = {
  async signIn(email: string, password: string){
    return await supabase.auth.signInWithPassword({email, password})
  },
  async signOut(){
    return await supabase.auth.signOut();
  },
  async getSession(){
    return await supabase.auth.getSession();
  },
  async resetPassword(email: string): Promise<ResetPasswordData>{
    return await supabase.auth.resetPasswordForEmail(email);
  },
  onAuthStateChange(callback: (session: Session | null) => void) {
    return supabase.auth.onAuthStateChange((_event, session) => {
      callback(session);
    });
  }
};