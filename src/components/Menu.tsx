import { useEffect, useRef, useState } from "react";
import { MENU } from "@/lib/menu-data";
import { ScrollReveal, ScrollRevealItem } from "./ScrollReveal";
import { Embers } from "./Embers";

export function Menu() {
  const [active, setActive] = useState(MENU[0].id);
  const sectionRefs = useRef<Record<string, HTMLDivElement | null>>({});

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-30% 0px -55% 0px", threshold: 0 },
    );
    Object.values(sectionRefs.current).forEach((el) => el && obs.observe(el));
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
    <section id="karte" className="relative py-32 px-6 md-px-12 overflow-hidden">
      {/* Background embers */}
      <Embers count={16} speedMultiplier={0.6} />

      <div className="container-max relative z-10">
        <div className="text-center mb-20">
          <ScrollReveal stagger={true} delay={0.1}>
            <ScrollRevealItem>
              <div className="eyebrow">Die Karte</div>
            </ScrollRevealItem>
            <ScrollRevealItem>
              <h2 className="display text-5xl md-text-7xl mt-6">
                <em>Carte</em> de la Maison
              </h2>
            </ScrollRevealItem>
            <ScrollRevealItem>
              <div
                className="mt-8 mx-auto w-24 h-px"
                style={{
                  background:
                    "linear-gradient(to right, transparent, var(--color-bronze), transparent)",
                }}
              />
            </ScrollRevealItem>
            <ScrollRevealItem>
              <p className="mt-8 text-dim max-w-xl mx-auto leading-relaxed text-[0.95rem]">
                Sorgfältig kuratiert. Geschmackvoll abgestimmt. Jeder Posten ist ein Versprechen —
                von der ersten Brise bis zum letzten Schluck.
              </p>
            </ScrollRevealItem>
          </ScrollReveal>
        </div>

        {/* Sticky tab nav */}
        <div className="menu-sticky-nav -mx-6 -mx-12 px-6 md-px-12">
          <div className="menu-sticky-wrapper">
            {MENU.map((c) => (
              <button
                key={c.id}
                onClick={() => scrollTo(c.id)}
                className={`menu-tab ${active === c.id ? "active" : ""}`}
              >
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
              ref={(el) => {
                sectionRefs.current[cat.id] = el;
              }}
              className="scroll-mt-32"
            >
              <ScrollReveal stagger={true} delay={0.1}>
                <ScrollRevealItem>
                  <div
                    className={`flex items-baseline gap-6 mb-10 ${idx % 2 ? "md-flex-row-reverse md-text-right" : ""}`}
                  >
                    <div>
                      <div className="eyebrow">{cat.subtitle}</div>
                      <h3 className="display text-4xl md-text-5xl mt-3">
                        <em>{cat.title}</em>
                      </h3>
                    </div>
                    <div
                      className="hidden md-block flex-1 h-px"
                      style={{
                        background: "linear-gradient(to right, rgba(184,137,90,0.4), transparent)",
                      }}
                    />
                  </div>
                </ScrollRevealItem>

                <ScrollRevealItem>
                  <ul className="space-y-4">
                    {cat.items.map((item, i) => (
                      <li key={i} className="flex items-baseline group">
                        <span className="font-serif text-lg md-text-xl text-cream group-hover-bronze-bright transition relative menu-item-name inline-block">
                          {item.name}
                          {item.size && (
                            <span className="text-xs tracking-wider ml-3 text-dim font-sans">
                              {item.size}
                            </span>
                          )}
                        </span>
                        <span className="hairline" />
                        <span className="font-display tracking-widest text-sm md-text-base text-bronze-bright whitespace-nowrap">
                          {item.price}
                        </span>
                      </li>
                    ))}
                  </ul>
                </ScrollRevealItem>

                {cat.note && (
                  <ScrollRevealItem>
                    <p className="mt-6 italic text-sm text-dim font-serif">{cat.note}</p>
                  </ScrollRevealItem>
                )}
              </ScrollReveal>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
