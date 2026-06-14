import { Embers } from "./Embers";
import lounge1 from "@/assets/lounge-1.jpeg.asset.json";

export function Hero() {
  return (
    <section className="relative min-h-[100svh] flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img src={lounge1.url} alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-[rgba(10,8,7,0.7)] via-[rgba(10,8,7,0.55)] to-[var(--color-onyx)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(10,8,7,0.85)_100%)]" />
      </div>

      <div className="smoke" />
      <Embers count={32} />

      <div className="relative z-10 text-center px-6 max-w-5xl">
        <div className="eyebrow opacity-90">Seit 2020 · München</div>

        <h1 className="display text-[2.6rem] sm:text-6xl md:text-7xl lg:text-[5.5rem] mt-10 leading-[0.95]">
          Willkommen in der<br />
          <em className="block mt-3">MIRAÉ</em>
          <span className="block mt-1 font-display text-[0.85rem] md:text-base tracking-[0.6em] text-[var(--color-bronze)]">— HOOKAH LOUNGE —</span>
        </h1>

        <p className="mt-10 text-[var(--color-cream-dim)] max-w-xl mx-auto leading-loose text-[0.95rem] md:text-base">
          Eine verborgene Welt aus warmem Bronzelicht, samtiger Stille und sorgfältig kuratiertem Rauch. Ein Abend, der bleibt.
        </p>

        <div className="mt-14">
          <a href="#karte" className="btn-bronze">
            <span>Speisekarte entdecken</span>
            <span className="text-[var(--color-bronze)]">→</span>
          </a>
        </div>
      </div>

      {/* Bottom corner ornaments */}
      <div className="absolute bottom-8 left-8 hidden md:block text-[0.6rem] font-display tracking-[0.5em] text-[var(--color-bronze-dim)]">N 48.10° · E 11.51°</div>
      <div className="absolute bottom-8 right-8 hidden md:block text-[0.6rem] font-display tracking-[0.5em] text-[var(--color-bronze-dim)]">EST · MMXX</div>
    </section>
  );
}
