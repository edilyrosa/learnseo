// import { NextRequest, NextResponse } from 'next/server';
// import { createServerClient } from '@supabase/ssr';

// // Middleware para actualizar la sesión del usuario en cada solicitud
// export const updateSession = async (request: NextRequest) => {
//   try {
//     // Crear una respuesta normal
//     let response = NextResponse.next();

//     // Crear cliente de Supabase
//     const supabase = createServerClient(
//       process.env.NEXT_PUBLIC_SUPABASE_URL!,
//       process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
//       {
//         cookies: {
//           // Acceder a las cookies del request
//           get(name: string) {
//             return request.cookies.get(name)?.value;
//           },
//           set(name: string, value: string, options: any) {
//             response.cookies.set({ name, value, ...options });
//           },
//           remove(name: string, options: any) {
//             response.cookies.set({ name, value: "", ...options });
//           },
//         },
//       }
//     );

//     // Verificar si el usuario está autenticado
//     const { data, error } = await supabase.auth.getUser();

//     if (error) {
//       // Si hay un error al obtener el usuario (por ejemplo, sesión no encontrada), loguear el error y continuar
//       console.error('Supabase auth error:', error);
//     } else {
//       // Si el usuario está autenticado, loguear la información del usuario
//       console.log('Supabase user:', data.user);
//     }

//     // Continuar con el flujo sin redirigir
//     return response;

//   } catch (error) {
//     // Si ocurre un error, loguearlo y continuar con la respuesta
//     console.error('Error en updateSession:', error);
//     return NextResponse.next();
//   }
// };
