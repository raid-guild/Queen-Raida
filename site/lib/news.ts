import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

const newsDirectory = path.join(process.cwd(), "data");
const fallbackImage = "/images/queen-raida-computer-world.png";
const fallbackImageAlt =
  "A dark computer-world cathedral filled with wires, terminal panes, and signal fog.";

export type NewsLink = {
  label: string;
  href: string;
};

export type NewsArticle = {
  slug: string;
  title: string;
  date: string;
  kicker: string;
  excerpt: string;
  status: string;
  image: string;
  imageAlt: string;
  tags: string[];
  externalLinks: NewsLink[];
  content: string;
  html: string;
};

type NewsFrontmatter = {
  title?: string;
  slug?: string;
  date?: string;
  kicker?: string;
  excerpt?: string;
  status?: string;
  image?: string;
  imageAlt?: string;
  tags?: string[];
  externalLinks?: NewsLink[];
};

function getMarkdownFiles() {
  if (!fs.existsSync(newsDirectory)) {
    return [];
  }

  return fs
    .readdirSync(newsDirectory)
    .filter((fileName) => fileName.endsWith(".md"));
}

function deriveSlug(fileName: string, data: NewsFrontmatter) {
  if (data.slug) {
    return data.slug;
  }

  return fileName
    .replace(/\.md$/, "")
    .replace(/^\d{8}-/, "")
    .toLowerCase();
}

function firstHeading(content: string) {
  const heading = content.match(/^#\s+(.+)$/m);
  return heading?.[1] ?? "Recovered Signal";
}

async function markdownToHtml(content: string) {
  const processed = await remark().use(html).process(content);
  return processed.toString();
}

async function readArticle(fileName: string): Promise<NewsArticle> {
  const fullPath = path.join(newsDirectory, fileName);
  const raw = fs.readFileSync(fullPath, "utf8");
  const { content, data } = matter(raw);
  const frontmatter = data as NewsFrontmatter;
  const title = frontmatter.title ?? firstHeading(content);

  return {
    slug: deriveSlug(fileName, frontmatter),
    title,
    date: frontmatter.date ?? "1970-01-01",
    kicker: frontmatter.kicker ?? "Recovered Signal",
    excerpt: frontmatter.excerpt ?? "A recovered transmission from Queen Raida's machine memory.",
    status: frontmatter.status ?? "transmission-recovered",
    image: frontmatter.image ?? fallbackImage,
    imageAlt: frontmatter.imageAlt ?? fallbackImageAlt,
    tags: frontmatter.tags ?? [],
    externalLinks: frontmatter.externalLinks ?? [],
    content,
    html: await markdownToHtml(content),
  };
}

export async function getAllNews() {
  const articles = await Promise.all(getMarkdownFiles().map(readArticle));

  return articles.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  );
}

export async function getLatestNews(limit = 3) {
  const articles = await getAllNews();
  return articles.slice(0, limit);
}

export async function getNewsBySlug(slug: string) {
  const articles = await getAllNews();
  return articles.find((article) => article.slug === slug) ?? null;
}

export function getAllNewsSlugs() {
  return getMarkdownFiles().map((fileName) => {
    const raw = fs.readFileSync(path.join(newsDirectory, fileName), "utf8");
    const { data } = matter(raw);

    return {
      slug: deriveSlug(fileName, data as NewsFrontmatter),
    };
  });
}

export function formatNewsDate(date: string) {
  return new Intl.DateTimeFormat("en", {
    month: "short",
    day: "2-digit",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(date));
}
