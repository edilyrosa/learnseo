// utils/supabase/middleware.ts

import { createServerClient } from "@supabase/ssr";
import { type NextRequest, NextResponse } from "next/server";

export const updateSession = async (request: NextRequest) => {
  try {
    console.log("Cookies en la solicitud:", request.cookies.getAll());

    let response = NextResponse.next();

    const supabase = createServerClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
      {
        cookies: {
          getAll() {
            return request.cookies.getAll();
          },
          setAll(cookies) {
            cookies.forEach(({ name, value, ...options }) => {
              response.cookies.set({ name, value, ...options });
            });
          },
        },
      }
    );

    // Verifica la sesión del usuario
    const { data, error } = await supabase.auth.getUser();
    if (error) {
      console.error("Error de autenticación de Supabase:", error.message);

      if (error.name === "AuthSessionMissingError") {
        console.log("No se encontró sesión activa. Redirigiendo a login...");
        return NextResponse.redirect(new URL("/login", request.url));
      }
    } else {
      console.log("Usuario autenticado:", data.user);
    }

    return response;
  } catch (error) {
    console.error("Error en updateSession:", error);
    return NextResponse.next();
  }
};
