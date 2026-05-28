import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { AmbientFrame } from "@/components/AmbientFrame";
import { NewsArticle } from "@/components/NewsArticle";
import { buildTwitter, newsOgImage, siteName } from "@/lib/siteMetadata";
import { getAllNewsSlugs, getNewsBySlug } from "@/lib/news";

type NewsPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return getAllNewsSlugs();
}

export async function generateMetadata({
  params,
}: NewsPageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = await getNewsBySlug(slug);

  if (!article) {
    return {
      title: "Signal Not Found | Queen Raida",
      alternates: {
        canonical: `/news/${slug}`,
      },
    };
  }

  const path = `/news/${article.slug}`;
  const title = `${article.title} | ${siteName}`;

  return {
    title: article.title,
    description: article.excerpt,
    alternates: {
      canonical: path,
    },
    openGraph: {
      type: "article",
      title: article.title,
      description: article.excerpt,
      url: path,
      siteName,
      locale: "en_US",
      publishedTime: article.date,
      tags: article.tags,
      images: [newsOgImage],
    },
    twitter: buildTwitter({
      title,
      description: article.excerpt,
      images: [newsOgImage],
    }),
  };
}

export default async function ArticlePage({ params }: NewsPageProps) {
  const { slug } = await params;
  const article = await getNewsBySlug(slug);

  if (!article) {
    notFound();
  }

  return (
    <main className="relative min-h-screen overflow-x-hidden bg-charcoal text-ivory">
      <AmbientFrame />
      <NewsArticle article={article} />
    </main>
  );
}
