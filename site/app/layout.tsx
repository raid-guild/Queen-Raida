import type { Metadata, Viewport } from "next";
import { Cormorant_Infant, DM_Mono } from "next/font/google";
import {
  buildOpenGraph,
  buildTwitter,
  defaultOgImage,
  siteDescription,
  siteKeywords,
  siteName,
  siteUrl,
  squareSocialImage,
} from "@/lib/siteMetadata";
import "./globals.css";

const cormorant = Cormorant_Infant({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-cormorant",
});

const dmMono = DM_Mono({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-dm-mono",
});

export const metadata: Metadata = {
  metadataBase: siteUrl,
  applicationName: siteName,
  title: {
    default: siteName,
    template: `%s | ${siteName}`,
  },
  description: siteDescription,
  keywords: siteKeywords,
  authors: [{ name: "Raid Guild" }],
  creator: "Raid Guild",
  publisher: "Raid Guild",
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    other: [
      {
        rel: "icon",
        url: "/icon-192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        rel: "icon",
        url: "/icon-512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  },
  manifest: "/manifest.webmanifest",
  openGraph: buildOpenGraph({
    title: siteName,
    description: siteDescription,
    images: [defaultOgImage, squareSocialImage],
  }),
  twitter: buildTwitter({
    title: siteName,
    description: siteDescription,
    images: [defaultOgImage],
  }),
};

export const viewport: Viewport = {
  colorScheme: "dark",
  themeColor: "#070807",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${dmMono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
