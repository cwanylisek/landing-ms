import Link from "next/link";
import type { Locale } from "@/lib/i18n";

export default function LanguageSwitch({ locale }: { locale: Locale }) {
  const otherLocale = locale === "pl" ? "en" : "pl";
  return (
    <div className="flex items-center justify-center gap-2">
      <Link
        href={`/${otherLocale}`}
        className={`rounded-full px-4 py-2 text-sm font-medium transition-all ${
          locale === otherLocale
            ? "bg-british-racing-green text-white"
            : "text-british-racing-green/60 hover:text-british-racing-green"
        }`}
      >
        {otherLocale === "pl" ? "🇵🇱 Polski" : "🇬🇧 English"}
      </Link>
    </div>
  );
}
