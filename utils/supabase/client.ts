import { createBrowserClient } from "@supabase/ssr";

export const createClient = () => {
  console.log("URL de Supabase:", process.env.NEXT_PUBLIC_SUPABASE_URL);
  console.log("Clave pública:", process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY);

  return createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
  );
};
