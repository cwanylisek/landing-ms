import { notFound } from "next/navigation";
import JsonLd from "@/components/JsonLd";
import LangSetter from "@/components/LangSetter";
import Nav from "@/components/Nav";
import { getTranslations, isValidLocale } from "@/lib/i18n";

export default async function LocaleLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;

  if (!isValidLocale(locale)) {
    notFound();
  }

  const t = getTranslations(locale);

  return (
    <>
      <LangSetter locale={locale} />
      <Nav locale={locale} t={t} />
      <main className="flex min-h-screen flex-col flex-1">{children}</main>
      <JsonLd locale={locale} />
    </>
  );
}