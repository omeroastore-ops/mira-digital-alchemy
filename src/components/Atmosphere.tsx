import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ScrollReveal, ScrollRevealItem } from "./ScrollReveal";
import { Embers } from "./Embers";
import lounge2 from "@/assets/lounge-2.jpeg.asset.json";
import lounge1 from "@/assets/lounge-1.jpeg.asset.json";

export function Atmosphere() {
  const sectionRef = useRef<HTMLDivElement>(null);

  const lounge1Url = lounge1.url.startsWith("/")
    ? `${import.meta.env.BASE_URL.replace(/\/$/, "")}${lounge1.url}`
    : lounge1.url;
  const lounge2Url = lounge2.url.startsWith("/")
    ? `${import.meta.env.BASE_URL.replace(/\/$/, "")}${lounge2.url}`
    : lounge2.url;

  // Track the scroll progress of the section relative to the viewport
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Calculate parallax offsets (images slide in opposite directions inside their frames)
  const yParallax1 = useTransform(scrollYProgress, [0, 1], [-40, 40]);
  const yParallax2 = useTransform(scrollYProgress, [0, 1], [35, -35]);

  // Breathing animation speeds (offset slightly to feel natural and asynchronous)
  const floatTransition1 = {
    duration: 8,
    repeat: Infinity,
    ease: "easeInOut",
  };

  const floatTransition2 = {
    duration: 10,
    repeat: Infinity,
    ease: "easeInOut",
    delay: 0.6,
  };

  return (
    <section
      ref={sectionRef}
      id="atmosphaere"
      className="relative py-32 px-6 md-px-12 overflow-hidden"
    >
      {/* Background ambient embers */}
      <Embers count={12} speedMultiplier={0.7} />

      <div className="container-max grid md-grid-cols-12 gap-12 md-gap-16 items-center relative z-10">
        {/* Mobile: stacked grid; Desktop: asymmetric overlap */}
        <div className="md-col-span-7 md-order-1">
          {/* Mobile layout */}
          <div className="grid grid-cols-5 gap-3 md-hidden">
            <motion.div
              className="frame-bronze col-span-4 aspect-[4/5] shadow-[0_20px_50px_rgba(0,0,0,0.6)] overflow-hidden"
              animate={{ y: [-4, 4, -4] }}
              transition={floatTransition1}
            >
              <motion.img
                src={lounge2Url}
                alt="MIRAÉ Lounge Interieur"
                className="object-cover w-full h-full"
                style={{ y: yParallax1, scale: 1.15 }}
              />
            </motion.div>
            <motion.div
              className="frame-bronze col-span-3 col-start-3 -mt-10 aspect-square shadow-[0_20px_50px_rgba(0,0,0,0.7)] overflow-hidden"
              animate={{ y: [4, -4, 4] }}
              transition={floatTransition2}
            >
              <motion.img
                src={lounge1Url}
                alt="MIRAÉ Sitzbereich"
                className="object-cover w-full h-full"
                style={{ y: yParallax2, scale: 1.15 }}
              />
            </motion.div>
          </div>

          {/* Desktop layout */}
          <div className="hidden md-block atmosphere-desktop-wrapper">
            <motion.div
              className="frame-bronze absolute top-0 left-0 shadow-[0_30px_80px_rgba(0,0,0,0.6)] overflow-hidden"
              style={{ width: "68%", height: "70%" }}
              animate={{ y: [-6, 6, -6] }}
              transition={floatTransition1}
            >
              <motion.img
                src={lounge2Url}
                alt="MIRAÉ Lounge Interieur"
                className="object-cover w-full h-full"
                style={{ y: yParallax1, scale: 1.18 }}
              />
            </motion.div>
            <motion.div
              className="frame-bronze absolute bottom-0 right-0 shadow-[0_30px_80px_rgba(0,0,0,0.7)] overflow-hidden"
              style={{ width: "55%", height: "55%" }}
              animate={{ y: [6, -6, 6] }}
              transition={floatTransition2}
            >
              <motion.img
                src={lounge1Url}
                alt="MIRAÉ Sitzbereich"
                className="object-cover w-full h-full"
                style={{ y: yParallax2, scale: 1.18 }}
              />
            </motion.div>
            <div
              className="absolute font-display text-[0.55rem] tracking-[0.6em] text-bronze rotate-90 origin-left"
              style={{ top: "58%", left: "55%" }}
            >
              — ATMOSPHÈRE —
            </div>
          </div>
        </div>

        <div className="md-col-span-5 md-pl-6 md-order-2">
          <ScrollReveal stagger={true} delay={0.15}>
            <ScrollRevealItem>
              <div className="eyebrow">Die Philosophie</div>
            </ScrollRevealItem>

            <ScrollRevealItem>
              <h2 className="display text-4xl md-text-6xl mt-6" style={{ lineHeight: 1.05 }}>
                Wo der <em>Rauch</em>
                <br />
                zur Sprache wird.
              </h2>
            </ScrollRevealItem>

            <ScrollRevealItem>
              <div className="mt-8 w-16 h-px bg-bronze" />
            </ScrollRevealItem>

            <ScrollRevealItem>
              <div className="mt-8 space-y-6 text-dim leading-loose font-serif text-lg">
                <p>
                  MIRAÉ ist kein Ort, den man zufällig betritt. Hinter samtigen Vorhängen und
                  Bronzelicht öffnet sich ein Refugium — für jene, die das Außergewöhnliche im
                  Detail suchen.
                </p>
                <p>
                  Handverlesene Tabake. Hauseigene Kreationen. Ein Service, der die Stille
                  respektiert. Jeder Zug, jeder Schluck — eine kleine Zeremonie.
                </p>
              </div>
            </ScrollRevealItem>

            <ScrollRevealItem>
              <div className="mt-12 stats-grid stat-box">
                <div>
                  <div className="font-display text-3xl text-bronze-bright">10+</div>
                  <div className="text-[0.65rem] uppercase tracking-[0.3em] text-dim mt-2">
                    Sorten
                  </div>
                </div>
                <div>
                  <div className="font-display text-3xl text-bronze-bright">VIP</div>
                  <div className="text-[0.65rem] uppercase tracking-[0.3em] text-dim mt-2">
                    Lounge
                  </div>
                </div>
                <div>
                  <div className="font-display text-3xl text-bronze-bright">03:00</div>
                  <div className="text-[0.65rem] uppercase tracking-[0.3em] text-dim mt-2">
                    Bis Spät
                  </div>
                </div>
              </div>
            </ScrollRevealItem>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
