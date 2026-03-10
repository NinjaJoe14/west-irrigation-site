import type { Metadata } from "next";

interface MetaOptions {
  title: string;
  description: string;
  keywords?: string;
  url?: string;
}

export function createMetadata(options: MetaOptions): Metadata {
  const { title, description, keywords = "", url = "" } = options;
  const baseUrl = "https://www.westirrigationservices.com";
  const fullUrl = url ? `${baseUrl}${url}` : baseUrl;

  return {
    title,
    description,
    keywords,
    alternates: { canonical: fullUrl },
    openGraph: {
      title,
      description,
      url: fullUrl,
      siteName: "West Irrigation Services",
      type: "website",
      images: [
        {
          url: `${baseUrl}/og-image.jpg`,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [`${baseUrl}/og-image.jpg`],
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}