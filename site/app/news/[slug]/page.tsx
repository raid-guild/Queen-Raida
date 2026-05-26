import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { AmbientFrame } from "@/components/AmbientFrame";
import { NewsArticle } from "@/components/NewsArticle";
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
    };
  }

  return {
    title: `${article.title} | Queen Raida`,
    description: article.excerpt,
    openGraph: {
      title: article.title,
      description: article.excerpt,
      images: [article.image],
    },
  };
}

export default async function ArticlePage({ params }: NewsPageProps) {
  const { slug } = await params;
  const article = await getNewsBySlug(slug);

  if (!article) {
    notFound();
  }

  return (
    <main className="relative min-h-screen overflow-hidden bg-charcoal text-ivory">
      <AmbientFrame />
      <NewsArticle article={article} />
    </main>
  );
}
