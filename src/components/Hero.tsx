import { Embers } from "./Embers";
import { SmokeEffect } from "./SmokeEffect";
import { ScrollReveal, ScrollRevealItem } from "./ScrollReveal";
import { Magnetic } from "./Magnetic";
import lounge1 from "@/assets/lounge-1.jpeg.asset.json";

const HERO_CONTENT = {
  headline: "Dein Abend. Deine Atmosphäre.",
  subheadline:
    "Erlebe entspannte Momente, ausgewählte Shishas und besondere Drinks in stilvollem Ambiente.",
};

export function Hero() {
  const lounge1Url = lounge1.url.startsWith("/")
    ? `${import.meta.env.BASE_URL.replace(/\/$/, "")}${lounge1.url}`
    : lounge1.url;

  return (
    <section className="relative min-h-[100svh] flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img src={lounge1Url} alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 hero-overlay" />
      </div>

      <SmokeEffect />
      <Embers count={24} />

      <div className="relative z-10 text-center px-6 max-w-5xl">
        <ScrollReveal stagger={true} delay={0.2} animateOnMount={true}>
          <ScrollRevealItem>
            <div className="eyebrow opacity-90">Seit 2025 · München</div>
          </ScrollRevealItem>

          <ScrollRevealItem>
            <h1 className="display hero-title">
              Willkommen in der
              <br />
              <em className="block mt-3">MIRAÉ</em>
              <span className="hero-subtitle">— HOOKAH LOUNGE —</span>
            </h1>
          </ScrollRevealItem>

          <ScrollRevealItem>
            <div className="mt-8 max-w-2xl mx-auto">
              <h2 className="font-serif text-2xl md:text-3xl text-cream tracking-wide mb-3">
                {HERO_CONTENT.headline}
              </h2>
              <p className="hero-description">{HERO_CONTENT.subheadline}</p>
            </div>
          </ScrollRevealItem>

          <ScrollRevealItem>
            <div className="mt-14">
              <Magnetic>
                <a href="#karte" className="btn-bronze">
                  <span>Speisekarte entdecken</span>
                  <span className="text-bronze">→</span>
                </a>
              </Magnetic>
            </div>
          </ScrollRevealItem>
        </ScrollReveal>
      </div>

      {/* Bottom corner ornaments */}
      <div className="hero-ornament left">N 48.10° · E 11.51°</div>
      <div className="hero-ornament right">EST · MMXXV</div>
    </section>
  );
}
