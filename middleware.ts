import { NextResponse } from "next/server";

export function middleware() {
  return NextResponse.next(); // Continúa la solicitud sin aplicar ninguna lógica
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"], // Aplica a todas las rutas, excepto los activos estáticos
};
