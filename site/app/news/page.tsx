import Image from "next/image";
import { AmbientFrame } from "@/components/AmbientFrame";
import { NewsArchive } from "@/components/NewsArchive";
import { getAllNews } from "@/lib/news";

export const metadata = {
  title: "Recovered News | Queen Raida",
  description: "Recovered transmissions from Queen Raida's machine memory.",
};

export default async function NewsPage() {
  const articles = await getAllNews();

  return (
    <main className="news-archive-page relative min-h-screen overflow-hidden bg-charcoal text-ivory">
      <AmbientFrame />
      <Image
        src="/images/queen-raida-computer-world.png"
        alt=""
        fill
        priority
        sizes="100vw"
        className="fixed inset-0 object-cover object-center opacity-[0.94]"
      />
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_62%_28%,rgba(7,8,7,0.08),transparent_24rem),linear-gradient(180deg,rgba(7,8,7,0.28),rgba(7,8,7,0.52)_58%,rgba(7,8,7,0.82)),linear-gradient(90deg,rgba(7,8,7,0.72),rgba(7,8,7,0.22)_52%,rgba(7,8,7,0.58))]" />
      <div className="wire-shadow fixed inset-0 opacity-20" />
      <NewsArchive articles={articles} />
    </main>
  );
}
