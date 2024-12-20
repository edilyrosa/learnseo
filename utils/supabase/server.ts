import { createServerClient, type CookieOptionsWithName } from "@supabase/ssr";
import { cookies } from "next/headers";

export const createClient = () => {
  const cookieStore = cookies();

  return createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        get(name: string) {
          // Recupera una cookie por nombre
          return cookieStore.get(name)?.value || null;
        },
        set(name: string, value: string, options?: CookieOptionsWithName) {
          try {
            // Establece una cookie con nombre, valor y opciones
            cookieStore.set({ name, value, ...options });
          } catch (error) {
            // Manejo de errores al establecer cookies en componentes del servidor
            console.error(`Error setting cookie "${name}":`, error);
          }
        },
        remove(name: string, options?: CookieOptionsWithName) {
          try {
            // Borra la cookie configurándola con un valor vacío
            cookieStore.set({ name, value: "", ...options });
          } catch (error) {
            // Manejo de errores al eliminar cookies en componentes del servidor
            console.error(`Error removing cookie "${name}":`, error);
          }
        },
      },
    }
  );
};
