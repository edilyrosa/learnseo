import { createServerClient, type CookieOptions } from "@supabase/ssr";
import { cookies } from "next/headers";

export const createClient = () => {
  const cookieStore = cookies();

  return createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        get(name: string) {
          return cookieStore.get(name)?.value;
        },
        set(name: string, value: string, options: CookieOptions) {
          try {
            cookieStore.set({ name, value, ...options });
          } catch (error) {
            // The `set` method was called from a Server Component.
            // This can be ignored if you have middleware refreshing
            // user sessions.
          }
        },
        remove(name: string, options: CookieOptions) {
          try {
            cookieStore.set({ name, value: "", ...options });
          } catch (error) {
            // The `delete` method was called from a Server Component.
            // This can be ignored if you have middleware refreshing
            // user sessions.
          }
        },
      },
    },
  );
};













// import { createServerClient, SupabaseClient, CookieOptions } from "@supabase/ssr";

// export const createClient = (): SupabaseClient => {
//   const cookieStore = createServerClient({ cookies: {} });

//   return createServerClient(
//     process.env.NEXT_PUBLIC_SUPABASE_URL!,
//     process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
//     {
//       headers: {
//         cookie: cookieStore.get("cookie-name") || "",
//       },
//       autoRefreshToken: true,
//       persistSession: true,
//       detectSessionInUrl: false,
//       localStorage: false,
//       axios: {
//         baseURL: process.env.NEXT_PUBLIC_SUPABASE_URL!,
//         headers: {
//           "Content-Type": "application/json",
//           apikey: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
//         },
//       },
//     }
//   );
// };