import type { AuthError } from '@supabase/supabase-js';

export type ResetPasswordData =
  | {
      data: {};
      error: null;
    }
  | { data: null; error: AuthError };