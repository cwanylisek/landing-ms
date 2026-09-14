import JsonLd from "@/components/JsonLd";
import LangSetter from "@/components/LangSetter";
import type { Locale } from "@/lib/i18n";

export default async function LocaleLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;

  return (
    <>
      <LangSetter locale={locale as Locale} />
      <main className="flex min-h-screen flex-col flex-1">{children}</main>
      <JsonLd locale={locale as Locale} />
    </>
  );
}
