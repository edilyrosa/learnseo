import Link from "next/link";
export default function AuthButton() {
  return (
    <div className="flex items-center gap-4">
      {/* Cambiar texto y funcionalidad según sea necesario */}
      <Link
        href="/"
        className="py-2 px-3 flex rounded-md no-underline bg-btn-background hover:bg-btn-background-hover"
      >
        Home
      </Link>
    </div>
  );
}
