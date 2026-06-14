import lounge2 from "@/assets/lounge-2.jpeg.asset.json";
import lounge1 from "@/assets/lounge-1.jpeg.asset.json";

export function Atmosphere() {
  return (
    <section id="atmosphaere" className="relative py-32 px-6 md:px-12 overflow-hidden">
      <div className="max-w-7xl mx-auto grid md:grid-cols-12 gap-12 md:gap-16 items-center">
        {/* Mobile: stacked grid; Desktop: asymmetric overlap */}
        <div className="md:col-span-7 md:order-1">
          {/* Mobile layout */}
          <div className="grid grid-cols-5 gap-3 md:hidden">
            <div className="frame-bronze col-span-4 aspect-[4/5] shadow-[0_20px_50px_rgba(0,0,0,0.6)]">
              <img src={lounge2.url} alt="MIRAÉ Lounge Interieur" className="object-cover" />
            </div>
            <div className="frame-bronze col-span-3 col-start-3 -mt-10 aspect-square shadow-[0_20px_50px_rgba(0,0,0,0.7)]">
              <img src={lounge1.url} alt="MIRAÉ Sitzbereich" className="object-cover" />
            </div>
          </div>
          {/* Desktop layout */}
          <div className="hidden md:block relative h-[640px]">
            <div className="frame-bronze absolute top-0 left-0 w-[68%] h-[70%] shadow-[0_30px_80px_rgba(0,0,0,0.6)]">
              <img src={lounge2.url} alt="MIRAÉ Lounge Interieur" className="object-cover" />
            </div>
            <div className="frame-bronze absolute bottom-0 right-0 w-[55%] h-[55%] shadow-[0_30px_80px_rgba(0,0,0,0.7)]">
              <img src={lounge1.url} alt="MIRAÉ Sitzbereich" className="object-cover" />
            </div>
            <div className="absolute top-[58%] left-[55%] font-display text-[0.55rem] tracking-[0.6em] text-[var(--color-bronze)] rotate-90 origin-left">— ATMOSPHÈRE —</div>
          </div>
        </div>

        <div className="md:col-span-5 md:pl-6 md:order-2">
          <div className="eyebrow">Die Philosophie</div>
          <h2 className="display text-4xl md:text-6xl mt-6 leading-[1.05]">
            Wo der <em>Rauch</em><br/>zur Sprache wird.
          </h2>
          <div className="mt-8 w-16 h-px bg-[var(--color-bronze)]" />

          <div className="mt-8 space-y-6 text-[var(--color-cream-dim)] leading-loose font-serif text-lg">
            <p>
              MIRAÉ ist kein Ort, den man zufällig betritt. Hinter samtigen Vorhängen und Bronzelicht öffnet sich ein Refugium — für jene, die das Außergewöhnliche im Detail suchen.
            </p>
            <p>
              Handverlesene Tabake. Hauseigene Kreationen. Ein Service, der die Stille respektiert. Jeder Zug, jeder Schluck — eine kleine Zeremonie.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-3 gap-4 border-t border-[rgba(184,137,90,0.2)] pt-8">
            <div>
              <div className="font-display text-3xl text-[var(--color-bronze-bright)]">10+</div>
              <div className="text-[0.65rem] uppercase tracking-[0.3em] text-[var(--color-cream-dim)] mt-2">Sorten</div>
            </div>
            <div>
              <div className="font-display text-3xl text-[var(--color-bronze-bright)]">VIP</div>
              <div className="text-[0.65rem] uppercase tracking-[0.3em] text-[var(--color-cream-dim)] mt-2">Lounge</div>
            </div>
            <div>
              <div className="font-display text-3xl text-[var(--color-bronze-bright)]">03:00</div>
              <div className="text-[0.65rem] uppercase tracking-[0.3em] text-[var(--color-cream-dim)] mt-2">Bis Spät</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
