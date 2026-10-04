import Link from "next/link";
import LanguageSwitch from "./LanguageSwitch";
import MobileNav from "./MobileNav";
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
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4 md:px-10">
      <div className="glass-nav mx-auto flex max-w-[1184px] items-center justify-between gap-3 rounded-[22px] px-4 py-3 md:px-6">
        <Link
          href={`/${locale}`}
          className="pressable flex items-center gap-2.5 rounded-lg text-lg font-extrabold tracking-tight text-british-racing-green transition-opacity duration-300 hover:opacity-75"
        >
          <svg aria-hidden="true" viewBox="0 0 28 28" className="nav-mark" fill="none"><rect width="28" height="28" rx="9" fill="#00331F" /><path d="M7 20V8l7 8 7-8v12" stroke="#95D5B2" strokeWidth="1.8" strokeLinejoin="round" /></svg>
          Maria
        </Link>

        <nav aria-label={locale === "pl" ? "Nawigacja główna" : "Main navigation"} className="hidden items-center gap-1 lg:flex">
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

        <div className="flex items-center gap-2">
          <LanguageSwitch locale={locale} />
          <MobileNav links={links} locale={locale} />
        </div>
      </div>
    </header>
  );
}
