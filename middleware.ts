// import { type NextRequest } from "next/server";
// import { updateSession } from "./utils/supabase/middleware";

// const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
// const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

// export async function middleware(request: NextRequest) {
//   if (!supabaseUrl || !supabaseAnonKey) {
//     console.error('Missing Supabase environment variables');
//     throw new Error('Missing Supabase environment variables');
//   }

//   try {
//     console.log('Connecting to Supabase with URL:', supabaseUrl);
//     return await updateSession(request);
//   } catch (error) {
//     console.error('Error during Supabase connection:', error);
//     throw error;
//   }
// }

// export const config = {
//   matcher: [
//     /*
//      * Match all request paths except:
//      * - _next/static (static files)
//      * - _next/image (image optimization files)
//      * - favicon.ico (favicon file)
//      * - images - .svg, .png, .jpg, .jpeg, .gif, .webp
//      * Feel free to modify this pattern to include more paths.
//      */
//     "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)",
//   ],
// };





import { type NextRequest } from "next/server";
import { updateSession } from "./utils/supabase/middleware";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

export async function middleware(request: NextRequest) {
  if (!supabaseUrl || !supabaseAnonKey) {
    console.error("Missing Supabase environment variables");
    throw new Error("Missing Supabase environment variables");
  }

  try {
    console.log("Connecting to Supabase with URL:", supabaseUrl);
    return await updateSession(request);
  } catch (error) {
    console.error("Error during Supabase connection:", error);
    // Devuelve una respuesta personalizada en caso de error
    return new Response("Internal Server Error", { status: 500 });
  }
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)",
  ],
};
