import { NextRequest, NextResponse } from 'next/server';
import { createServerClient } from '@supabase/ssr';

export const updateSession = async (request: NextRequest) => {
  try {
    let response = NextResponse.next(); // Continúa sin redirigir

    const supabase = createServerClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
      {
        cookies: {
          get(name: string) {
            return request.cookies.get(name)?.value;
          },
          set(name: string, value: string, options: any) {
            response.cookies.set({ name, value, ...options });
          },
          remove(name: string, options: any) {
            response.cookies.set({ name, value: "", ...options });
          },
        },
      }
    );

    // Verifica si hay sesión
    const { data, error } = await supabase.auth.getUser();
    if (error) {
      console.error('Supabase auth error:', error);
    } else {
      console.log('Supabase user:', data.user);
    }

    // No se realiza ninguna redirección, solo se continúa el flujo
    return response;
  } catch (error) {
    console.error('Error in updateSession:', error);
    return NextResponse.next();
  }
};
