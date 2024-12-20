import { createServerClient, type CookieOptions } from "@supabase/ssr";
import { type NextRequest, NextResponse } from "next/server";

export const updateSession = async (request: NextRequest) => {
  try {
    // Crear una nueva instancia de Headers basada en los headers originales
    const newHeaders = new Headers(request.headers);

    // Crear una respuesta inicial sin modificaciones
    let response = NextResponse.next({
      request: {
        headers: newHeaders, // Usar los headers clonados
      },
    });

    // Crear el cliente de Supabase
    const supabase = createServerClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
      {
        cookies: {
          get(name: string) {
            return request.cookies.get(name)?.value;
          },
          set(name: string, value: string, options: CookieOptions) {
            // Actualizar las cookies tanto en la solicitud como en la respuesta
            request.cookies.set({ name, value, ...options });
            response = NextResponse.next({
              request: {
                headers: newHeaders,
              },
            });
            response.cookies.set({ name, value, ...options });
          },
          remove(name: string, options: CookieOptions) {
            // Remover cookies tanto en la solicitud como en la respuesta
            request.cookies.set({ name, value: "", ...options });
            response = NextResponse.next({
              request: {
                headers: newHeaders,
              },
            });
            response.cookies.set({ name, value: "", ...options });
          },
        },
      }
    );

    // Refrescar la sesión si está expirada - requerido para Server Components
    // Más información: https://supabase.com/docs/guides/auth/server-side/nextjs
    await supabase.auth.getUser();

    return response;
  } catch (e) {
    console.error("Error al actualizar la sesión:", e);

    // Retornar una respuesta no modificada si ocurre un error
    return NextResponse.next({
      request: {
        headers: new Headers(request.headers), // Clonar headers originales
      },
    });
  }
};

