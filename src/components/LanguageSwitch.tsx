import Link from "next/link";
import { SUPPORTED_LOCALES, type Locale } from "@/lib/i18n";

export default function LanguageSwitch({ locale }: { locale: Locale }) {
  return (
    <div className="flex items-center gap-1 text-sm font-bold tracking-widest">
      {SUPPORTED_LOCALES.map((code) =>
        code === locale ? (
          <span key={code} aria-current="true" className="px-1.5 text-british-racing-green">
            {code.toUpperCase()}
          </span>
        ) : (
          <Link
            key={code}
            href={`/${code}`}
            aria-label={code === "pl" ? "Polski" : "English"}
            className="pressable rounded-md px-1.5 text-charcoal/40 transition-colors duration-300 hover:text-british-racing-green"
          >
            {code.toUpperCase()}
          </Link>
        )
      )}
    </div>
  );
}