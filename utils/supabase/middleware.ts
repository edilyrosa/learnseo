// utils/supabase/middleware.ts

import { createServerClient } from "@supabase/ssr";
import { type NextRequest, NextResponse } from "next/server";

export const updateSession = async (request: NextRequest) => {
  try {
    // No redirigir si ya estamos en la página de login
    const isLoginPage = request.nextUrl.pathname === "/login"; 
    if (isLoginPage) {
      return NextResponse.next(); // No redirigir si ya estamos en /login
    }

    let response = NextResponse.next(); // Respuesta predeterminada

    const supabase = createServerClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
      {
        cookies: {
          getAll() {
            return request.cookies.getAll(); // Obtener todas las cookies
          },
          setAll(cookies) {
            cookies.forEach(({ name, value, ...options }) => {
              response.cookies.set({ name, value, ...options });
            });
          },
        },
      }
    );

    // Verificar si hay sesión de usuario
    const { data, error } = await supabase.auth.getUser();
    if (error || !data?.user) {
      console.error("Error de autenticación de Supabase:", error?.message || "No hay usuario autenticado");

      // Si no hay sesión, redirigir a la página de login
      return NextResponse.redirect(new URL("/login", request.url));
    } else {
      console.log("Usuario autenticado:", data.user);
    }

    return response;
  } catch (error) {
    console.error("Error en updateSession:", error);
    return NextResponse.next();
  }
};
