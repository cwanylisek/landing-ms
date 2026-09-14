import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-cream px-6">
      <h1 className="text-6xl font-bold text-british-racing-green mb-4">404</h1>
      <p className="text-muted-text text-lg mb-8">
        Strona nie została znaleziona.
      </p>
      <Link
        href="/pl"
        className="rounded-full bg-british-racing-green px-6 py-3 font-semibold text-white transition-all hover:bg-british-racing-green-light"
      >
        Powrót do strony
      </Link>
    </div>
  );
}
