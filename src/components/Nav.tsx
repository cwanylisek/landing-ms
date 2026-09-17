import Link from "next/link";
import LanguageSwitch from "./LanguageSwitch";
import type { Locale } from "@/lib/i18n";

export default function Nav({
  locale,
  t,
}: {
  locale: Locale;
  t: Record<string, unknown>;
}) {
  const nav = t.nav as {
    home: string;
    about: string;
    specializations: string;
    pricing: string;
    faq: string;
    contact: string;
  };

  const links = [
    { href: "#about", label: nav.about },
    { href: "#specializations", label: nav.specializations },
    { href: "#pricing", label: nav.pricing },
    { href: "#faq", label: nav.faq },
    { href: "#contact", label: nav.contact },
  ];

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-3 md:px-6">
      <div className="glass-nav mx-auto flex max-w-5xl items-center justify-between gap-3 rounded-2xl px-4 py-2.5 md:px-5">
        <Link
          href={`/${locale}`}
          className="pressable flex items-center gap-2 font-extrabold tracking-tight text-british-racing-green transition-opacity duration-300 hover:opacity-75"
        >
          <span
            aria-hidden="true"
            className="h-2.5 w-2.5 rounded-full bg-gradient-to-br from-forest-accent to-british-racing-green"
          />
          Maria
        </Link>

        <nav aria-label={nav.home} className="hidden items-center gap-1 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="pressable rounded-full px-3.5 py-1.5 text-sm font-bold text-charcoal/75 transition-[color,background-color,transform] duration-300 hover:bg-british-racing-green/10 hover:text-british-racing-green active:scale-95"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <LanguageSwitch locale={locale} />
      </div>
    </header>
  );
}