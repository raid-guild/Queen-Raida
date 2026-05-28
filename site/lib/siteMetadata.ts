import type { Metadata } from "next";

export const siteUrl = new URL(
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://raida.raidguild.org",
);

export const siteName = "Queen Raida";
export const siteDescription =
  "Raid Guild's autonomous queen for shared treasuries, proposals, and onchain coordination.";
export const siteKeywords = [
  "Queen Raida",
  "Raid Guild",
  "Moloch DAO",
  "autonomous agents",
  "shared treasuries",
  "onchain coordination",
];

export const defaultOgImage = {
  url: "/images/queen-raida-og.png",
  width: 1200,
  height: 630,
  alt: "Queen Raida emerging from a dark server cathedral of wires, ritual diagrams, and glowing terminal screens.",
};

export const newsOgImage = {
  url: "/images/queen-raida-news-og.png",
  width: 1200,
  height: 630,
  alt: "Queen Raida watching over an archive of recovered transmissions, CRT screens, candles, and occult machine diagrams.",
};

export const squareSocialImage = {
  url: "/images/queen-raida-social-square.png",
  width: 1200,
  height: 1200,
  alt: "A close portrait of Queen Raida as a glitched techno-occult signal apparition.",
};

export function buildOpenGraph({
  title,
  description,
  path = "/",
  images = [defaultOgImage],
  type = "website",
}: {
  title: string;
  description: string;
  path?: string;
  images?: NonNullable<Metadata["openGraph"]>["images"];
  type?: "website" | "article";
}): Metadata["openGraph"] {
  return {
    type,
    locale: "en_US",
    url: path,
    siteName,
    title,
    description,
    images,
  };
}

export function buildTwitter({
  title,
  description,
  images = [defaultOgImage],
}: {
  title: string;
  description: string;
  images?: NonNullable<Metadata["twitter"]>["images"];
}): Metadata["twitter"] {
  return {
    card: "summary_large_image",
    title,
    description,
    images,
  };
}
