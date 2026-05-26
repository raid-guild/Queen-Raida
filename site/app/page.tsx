import { AmbientFrame } from "@/components/AmbientFrame";
import { CrossedWires } from "@/components/CrossedWires";
import { ExternalPortals } from "@/components/ExternalPortals";
import { FooterDeclaration } from "@/components/FooterDeclaration";
import { HeroChamber } from "@/components/HeroChamber";
import { HistoryArchive } from "@/components/HistoryArchive";
import { NewsIndex } from "@/components/NewsIndex";
import { TransmissionLayer } from "@/components/TransmissionLayer";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-charcoal text-ivory">
      <AmbientFrame />
      <HeroChamber />
      <CrossedWires />
      <TransmissionLayer />
      <NewsIndex />
      <HistoryArchive />
      <ExternalPortals />
      <FooterDeclaration />
    </main>
  );
}
