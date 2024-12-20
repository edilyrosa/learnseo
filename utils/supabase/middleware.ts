import { createServerClient, type CookieOptions } from "@supabase/ssr";
import { type NextRequest, NextResponse } from "next/server";

export const updateSession = async (request: NextRequest) => {
  try {
    let response = NextResponse.next();

    const supabase = createServerClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
      {
        cookies: {
          getAll() {
            // Devuelve todas las cookies en el formato esperado
            return request.cookies.getAll().map(({ name, value }) => ({
              name,
              value,
            }));
          },
          setAll(cookies: { name: string; value: string }[]) {
            // Ajusta las cookies en la respuesta
            cookies.forEach(({ name, value }) => {
              response.cookies.set(name, value);
            });
          },
        },
      }
    );

    // Refresca la sesión si es necesario
    const { data, error } = await supabase.auth.getUser();
    if (error) {
      console.error("Supabase auth error:", error);
    } else {
      console.log("Supabase user:", data.user);
    }

    return response;
  } catch (error) {
    console.error("Error in updateSession:", error);
    return NextResponse.next();
  }
};
