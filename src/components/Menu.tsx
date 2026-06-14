import { useEffect, useRef, useState } from "react";
import { MENU } from "@/lib/menu-data";

export function Menu() {
  const [active, setActive] = useState(MENU[0].id);
  const sectionRefs = useRef<Record<string, HTMLDivElement | null>>({});

  useEffect(() => {
    const obs = new IntersectionObserver(
      entries => {
        entries.forEach(e => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-30% 0px -55% 0px", threshold: 0 }
    );
    Object.values(sectionRefs.current).forEach(el => el && obs.observe(el));
    return () => obs.disconnect();
  }, []);

  const scrollTo = (id: string) => {
    const el = sectionRefs.current[id];
    if (el) {
      const y = el.getBoundingClientRect().top + window.scrollY - 120;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <section id="karte" className="relative py-32 px-6 md:px-12 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <div className="eyebrow">Die Karte</div>
          <h2 className="display text-5xl md:text-7xl mt-6">
            <em>Carte</em> de la Maison
          </h2>
          <div className="mt-8 mx-auto w-24 h-px bg-gradient-to-r from-transparent via-[var(--color-bronze)] to-transparent" />
          <p className="mt-8 text-[var(--color-cream-dim)] max-w-xl mx-auto leading-relaxed text-[0.95rem]">
            Sorgfältig kuratiert. Geschmackvoll abgestimmt. Jeder Posten ist ein Versprechen — von der ersten Brise bis zum letzten Schluck.
          </p>
        </div>

        {/* Sticky tab nav */}
        <div className="sticky top-[72px] z-30 -mx-6 md:-mx-12 px-6 md:px-12 py-3 mb-12 bg-gradient-to-b from-[var(--color-onyx)] via-[var(--color-onyx)] to-transparent backdrop-blur-sm">
          <div className="flex gap-7 md:gap-10 overflow-x-auto justify-start md:justify-center border-b border-[rgba(184,137,90,0.15)]" style={{ scrollbarWidth: "none" }}>
            {MENU.map(c => (
              <button key={c.id} onClick={() => scrollTo(c.id)} className={`menu-tab ${active === c.id ? "active" : ""}`}>
                {c.title}
              </button>
            ))}
          </div>
        </div>

        <div className="space-y-24">
          {MENU.map((cat, idx) => (
            <div
              key={cat.id}
              id={cat.id}
              ref={el => { sectionRefs.current[cat.id] = el; }}
              className="scroll-mt-32"
            >
              <div className={`flex items-baseline gap-6 mb-10 ${idx % 2 ? "md:flex-row-reverse md:text-right" : ""}`}>
                <div>
                  <div className="eyebrow">{cat.subtitle}</div>
                  <h3 className="display text-4xl md:text-5xl mt-3"><em>{cat.title}</em></h3>
                </div>
                <div className="hidden md:block flex-1 h-px bg-gradient-to-r from-[rgba(184,137,90,0.4)] to-transparent" />
              </div>

              <ul className="space-y-4">
                {cat.items.map((item, i) => (
                  <li key={i} className="flex items-baseline group">
                    <span className="font-serif text-lg md:text-xl text-[var(--color-cream)] group-hover:text-[var(--color-bronze-bright)] transition">
                      {item.name}
                      {item.size && <span className="text-[0.75rem] tracking-wider ml-3 text-[var(--color-cream-dim)] font-sans">{item.size}</span>}
                    </span>
                    <span className="hairline" />
                    <span className="font-display tracking-widest text-sm md:text-base text-[var(--color-bronze-bright)] whitespace-nowrap">
                      {item.price}
                    </span>
                  </li>
                ))}
              </ul>

              {cat.note && (
                <p className="mt-6 italic text-sm text-[var(--color-cream-dim)] font-serif">{cat.note}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
