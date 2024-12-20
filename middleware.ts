// import { createServerClient } from "@supabase/ssr";
// import { type NextRequest, NextResponse } from "next/server";

// export const updateSession = async (request: NextRequest) => {
//   try {
//     let response = NextResponse.next({
//       request: {
//         // Normaliza los headers a un objeto plano
//         headers: Object.fromEntries(request.headers.entries()),
//       },
//     });

//     const supabase = createServerClient(
//       process.env.NEXT_PUBLIC_SUPABASE_URL!,
//       process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
//       {
//         cookies: {
//           get(name: string) {
//             return request.cookies.get(name)?.value;
//           },
//           set(name: string, value: string, options) {
//             request.cookies.set({ name, value, ...options });
//             response.cookies.set({ name, value, ...options });
//           },
//           remove(name: string, options) {
//             request.cookies.set({ name, value: "", ...options });
//             response.cookies.set({ name, value: "", ...options });
//           },
//         },
//       }
//     );

//     await supabase.auth.getUser();
//     return response;
//   } catch (e) {
//     console.error("Error in middleware:", e);
//     return NextResponse.next({
//       request: {
//         headers: Object.fromEntries(request.headers.entries()),
//       },
//     });
//   }
// };


import { type NextRequest } from "next/server";
import { updateSession } from "@/utils/supabase/middleware";

export async function middleware(request: NextRequest) {
  return await updateSession(request);
}

export const config = {
  matcher: [
    /*
     * Match all request paths except:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - images - .svg, .png, .jpg, .jpeg, .gif, .webp
     * Feel free to modify this pattern to include more paths.
     */
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)",
  ],
};
