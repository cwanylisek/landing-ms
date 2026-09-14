import { Metadata } from "next";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Specializations from "@/components/Specializations";
import Pricing from "@/components/Pricing";
import Faq from "@/components/Faq";
import Contact from "@/components/Contact";
import { SUPPORTED_LOCALES, DEFAULT_LOCALE, getTranslations, type Locale } from "@/lib/i18n";

export function generateStaticParams() {
  return SUPPORTED_LOCALES.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = getTranslations(locale);
  const isPl = locale === DEFAULT_LOCALE;
  const canonical = `https://www.trener-personalny.pl/${locale}`;

  return {
    title: t.meta.title,
    description: t.meta.description,
    alternates: {
      canonical,
      languages: { pl: "https://www.trener-personalny.pl/pl/", en: "https://www.trener-personalny.pl/en/" },
    },
    openGraph: {
      title: t.meta.title,
      description: t.meta.description,
      url: canonical,
      siteName: isPl
        ? "Maria — Trener Personalny Poznań"
        : "Maria — Personal Trainer Poznań",
      locale: isPl ? "pl_PL" : "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: t.meta.title,
      description: t.meta.description,
    },
    robots: { index: true, follow: true },
  };
}

export default async function LocalePage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const t = getTranslations(locale);

  return (
    <>
      <Hero t={t} locale={locale} />
      <About t={t} />
      <Specializations t={t} locale={locale} />
      <Pricing t={t} locale={locale} />
      <Faq t={t} />
      <Contact t={t} locale={locale} />
    </>
  );
}
