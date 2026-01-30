import { supabase } from "../supabase/supabaseClient";

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
};