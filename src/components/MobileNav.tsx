"use client";

import { useRef } from "react";
import type { Locale } from "@/lib/i18n";

export default function MobileNav({ links, locale }: { links: { href: string; label: string }[]; locale: Locale }) {
  const menu = useRef<HTMLDetailsElement>(null);

  return (
    <details ref={menu} className="mobile-menu lg:hidden">
      <summary aria-label={locale === "pl" ? "Menu nawigacji" : "Navigation menu"}>
        <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M4 8h16M4 16h16" /></svg>
      </summary>
      <nav aria-label={locale === "pl" ? "Nawigacja mobilna" : "Mobile navigation"}>
        {links.map((link) => <a key={link.href} href={link.href} onClick={() => { if (menu.current) menu.current.open = false; }}>{link.label}</a>)}
      </nav>
    </details>
  );
}
