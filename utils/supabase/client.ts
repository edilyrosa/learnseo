// utils/supabase/client.ts
import { createPagesBrowserClient } from '@supabase/auth-helpers-nextjs';
import { Database } from './types';

export const createSupabaseClient = () => {
  return createPagesBrowserClient<Database>({
    supabaseUrl: process.env.NEXT_PUBLIC_SUPABASE_URL!,
    supabaseKey: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
  });
};

// Ejemplo de obtención de usuario sin redirección
export const getUser = async () => {
  const supabase = createSupabaseClient();
  const user = await supabase.auth.getUser();

  if (user.data) {
    console.log('User logged in:', user.data);
  } else {
    console.log('No user logged in');
  }
};
