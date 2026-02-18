import { AuthError, Session } from '@supabase/supabase-js';
import type { SingInData } from './sign-in-data';

export interface IAuthSupabase{
  signIn(
    email:string,
    password: string,
  ): Promise<{
    data: SingInData;
    error: AuthError | null;
  }>
  resetPassword(email:string): Promise<unknown>;
  signOut():Promise<{error:AuthError| null}>;
  getSession(): Promise<Session | null>;
}