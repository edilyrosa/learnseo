import { NextResponse } from "next/server";

// Si no necesitas manejar GET requests para este propósito, puedes eliminar este archivo.
export async function GET(request: Request) {
  return NextResponse.json({ message: "This route is not in use." });
}
