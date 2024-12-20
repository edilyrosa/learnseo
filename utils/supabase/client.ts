import { createPagesBrowserClient } from '@supabase/auth-helpers-nextjs'; // Importa la nueva función recomendada
import { Database } from './types'; // Asegúrate de importar correctamente tu tipo de base de datos

export const createSupabaseClient = () => {
  // Usamos createPagesBrowserClient para crear el cliente de Supabase
  return createPagesBrowserClient<Database>({
    supabaseUrl: process.env.NEXT_PUBLIC_SUPABASE_URL!,
    supabaseKey: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
  });
};
