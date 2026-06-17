import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { useRef, useEffect, useState } from "react";
import { motion, useMotionValue, useSpring, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { u as useConsent } from "./router-DMigN5U-.js";
import "@tanstack/react-query";
import "@tanstack/react-router";
function Embers({ count = 24, speedMultiplier = 1 }) {
  const canvasRef = useRef(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    let animationFrameId;
    let width = canvas.width = canvas.parentElement?.clientWidth || window.innerWidth;
    let height = canvas.height = canvas.parentElement?.clientHeight || window.innerHeight;
    class EmberParticle {
      x;
      y;
      size;
      speedY;
      speedX;
      opacity;
      maxOpacity;
      fadeSpeed;
      wobbleSpeed;
      wobbleVal;
      constructor() {
        this.reset();
        this.y = Math.random() * height;
      }
      reset() {
        this.x = Math.random() * width;
        this.y = height + 10;
        this.size = 0.8 + Math.random() * 1.5;
        this.speedY = -(0.4 + Math.random() * 0.5) * speedMultiplier;
        this.speedX = (Math.random() - 0.5) * 0.25;
        this.opacity = 0;
        this.maxOpacity = 0.3 + Math.random() * 0.5;
        this.fadeSpeed = 5e-3 + Math.random() * 0.01;
        this.wobbleSpeed = 5e-3 + Math.random() * 0.01;
        this.wobbleVal = Math.random() * 100;
      }
      update() {
        this.y += this.speedY;
        this.wobbleVal += this.wobbleSpeed;
        this.x += this.speedX + Math.sin(this.wobbleVal) * 0.15;
        if (this.opacity < this.maxOpacity && this.y > height * 0.1) {
          this.opacity += this.fadeSpeed;
        } else if (this.y <= height * 0.2) {
          this.opacity -= this.fadeSpeed * 1.2;
        }
        if (this.y < -10 || this.opacity <= 0 || this.x < -10 || this.x > width + 10) {
          this.reset();
        }
      }
      draw(c) {
        if (this.opacity <= 0) return;
        c.save();
        const grad = c.createRadialGradient(this.x, this.y, 0, this.x, this.y, this.size * 2.2);
        grad.addColorStop(0, `rgba(232, 112, 58, ${this.opacity})`);
        grad.addColorStop(0.3, `rgba(232, 112, 58, ${this.opacity * 0.45})`);
        grad.addColorStop(1, "rgba(232, 112, 58, 0)");
        c.fillStyle = grad;
        c.beginPath();
        c.arc(this.x, this.y, this.size * 2.2, 0, Math.PI * 2);
        c.fill();
        c.restore();
      }
    }
    const particles = Array.from({ length: count }, () => new EmberParticle());
    const handleResize = () => {
      const parent = canvas.parentElement;
      if (!parent) return;
      width = canvas.width = parent.clientWidth;
      height = canvas.height = parent.clientHeight;
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    const render = () => {
      ctx.clearRect(0, 0, width, height);
      particles.forEach((p) => {
        p.update();
        p.draw(ctx);
      });
      animationFrameId = requestAnimationFrame(render);
    };
    render();
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
    };
  }, [count, speedMultiplier]);
  return /* @__PURE__ */ jsx("canvas", { ref: canvasRef, className: "absolute inset-0 w-full h-full pointer-events-none z-[3]" });
}
function SmokeEffect() {
  const canvasRef = useRef(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    let animationFrameId;
    let width = canvas.width = window.innerWidth;
    let height = canvas.height = window.innerHeight;
    class SmokeParticle {
      x;
      y;
      vx;
      vy;
      alpha;
      radius;
      growth;
      life;
      maxLife;
      wobbleSpeed;
      wobbleRange;
      constructor() {
        this.reset();
        this.y = Math.random() * height;
        this.alpha = 0;
      }
      reset() {
        this.x = width * 0.25 + Math.random() * (width * 0.5);
        this.y = height + 100;
        this.vx = (Math.random() - 0.5) * 0.2;
        this.vy = -0.35 - Math.random() * 0.45;
        this.alpha = 0;
        this.radius = 100 + Math.random() * 120;
        this.growth = 0.06 + Math.random() * 0.08;
        this.life = 0;
        this.maxLife = 500 + Math.random() * 300;
        this.wobbleSpeed = 3e-3 + Math.random() * 4e-3;
        this.wobbleRange = 0.15 + Math.random() * 0.25;
      }
      update() {
        this.x += this.vx + Math.sin(this.life * this.wobbleSpeed) * this.wobbleRange;
        this.y += this.vy;
        this.radius += this.growth;
        this.life++;
        const halfLife = this.maxLife * 0.4;
        if (this.life < halfLife) {
          this.alpha = this.life / halfLife;
        } else {
          this.alpha = 1 - (this.life - halfLife) / (this.maxLife - halfLife);
        }
        if (this.life >= this.maxLife || this.y < -this.radius) {
          this.reset();
        }
      }
      draw(c) {
        if (this.alpha <= 0) return;
        c.save();
        const grad = c.createRadialGradient(this.x, this.y, 0, this.x, this.y, this.radius);
        const baseAlpha = this.alpha * 0.04;
        grad.addColorStop(0, `rgba(232, 220, 200, ${baseAlpha})`);
        grad.addColorStop(0.3, `rgba(232, 220, 200, ${baseAlpha * 0.6})`);
        grad.addColorStop(0.6, `rgba(232, 220, 200, ${baseAlpha * 0.25})`);
        grad.addColorStop(1, "rgba(232, 220, 200, 0)");
        c.fillStyle = grad;
        c.beginPath();
        c.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        c.fill();
        c.restore();
      }
    }
    const particles = Array.from({ length: 20 }, () => new SmokeParticle());
    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", handleResize);
    const render = () => {
      ctx.clearRect(0, 0, width, height);
      particles.forEach((p) => {
        p.update();
        p.draw(ctx);
      });
      animationFrameId = requestAnimationFrame(render);
    };
    render();
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return /* @__PURE__ */ jsx(
    "canvas",
    {
      ref: canvasRef,
      className: "absolute inset-0 w-full h-full pointer-events-none mix-blend-screen z-[4]",
      style: { opacity: 0.85 }
    }
  );
}
function ScrollReveal({
  children,
  delay = 0,
  duration = 1.2,
  yOffset = 30,
  stagger = false,
  animateOnMount = false
}) {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.12,
        delayChildren: delay
      }
    }
  };
  const itemVariants = {
    hidden: { opacity: 0, y: yOffset },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration,
        ease: [0.2, 0.8, 0.2, 1]
        // Luxury smooth cinematic ease-out
      }
    }
  };
  const triggerProps = animateOnMount ? { animate: "visible" } : { whileInView: "visible", viewport: { once: true, amount: 0.05 } };
  if (stagger) {
    return /* @__PURE__ */ jsx(
      motion.div,
      {
        initial: "hidden",
        ...triggerProps,
        variants: containerVariants,
        className: "w-full",
        children
      }
    );
  }
  return /* @__PURE__ */ jsx(motion.div, { initial: "hidden", ...triggerProps, variants: itemVariants, className: "w-full", children });
}
function ScrollRevealItem({ children }) {
  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1.2,
        ease: [0.2, 0.8, 0.2, 1]
      }
    }
  };
  return /* @__PURE__ */ jsx(motion.div, { variants: itemVariants, children });
}
function Magnetic({ children }) {
  const ref = useRef(null);
  const [hovered, setHovered] = useState(false);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springConfig = { damping: 18, stiffness: 120, mass: 0.5 };
  const springX = useSpring(x, springConfig);
  const springY = useSpring(y, springConfig);
  const handleMouseMove = (e) => {
    if (!ref.current) return;
    const { clientX, clientY } = e;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const centerX = left + width / 2;
    const centerY = top + height / 2;
    const distanceX = clientX - centerX;
    const distanceY = clientY - centerY;
    const pullX = distanceX * 0.35;
    const pullY = distanceY * 0.35;
    x.set(pullX);
    y.set(pullY);
    setHovered(true);
  };
  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
    setHovered(false);
  };
  return /* @__PURE__ */ jsx(
    motion.div,
    {
      ref,
      onMouseMove: handleMouseMove,
      onMouseLeave: handleMouseLeave,
      style: { x: springX, y: springY },
      className: "inline-block",
      children
    }
  );
}
const url$1 = "/lounge-1.jpeg";
const lounge1 = {
  url: url$1
};
const HERO_CONTENT = {
  headline: "Dein Abend. Deine Atmosphäre.",
  subheadline: "Erlebe entspannte Momente, ausgewählte Shishas und besondere Drinks in stilvollem Ambiente."
};
function Hero() {
  const lounge1Url = lounge1.url.startsWith("/") ? `${"/mira-digital-alchemy/".replace(/\/$/, "")}${lounge1.url}` : lounge1.url;
  return /* @__PURE__ */ jsxs("section", { className: "relative min-h-[100svh] flex items-center justify-center overflow-hidden", children: [
    /* @__PURE__ */ jsxs("div", { className: "absolute inset-0", children: [
      /* @__PURE__ */ jsx("img", { src: lounge1Url, alt: "", className: "w-full h-full object-cover" }),
      /* @__PURE__ */ jsx("div", { className: "absolute inset-0 hero-overlay" })
    ] }),
    /* @__PURE__ */ jsx(SmokeEffect, {}),
    /* @__PURE__ */ jsx(Embers, { count: 24 }),
    /* @__PURE__ */ jsx("div", { className: "relative z-10 text-center px-6 max-w-5xl", children: /* @__PURE__ */ jsxs(ScrollReveal, { stagger: true, delay: 0.2, animateOnMount: true, children: [
      /* @__PURE__ */ jsx(ScrollRevealItem, { children: /* @__PURE__ */ jsx("div", { className: "eyebrow opacity-90", children: "Seit 2025 · München" }) }),
      /* @__PURE__ */ jsx(ScrollRevealItem, { children: /* @__PURE__ */ jsxs("h1", { className: "display hero-title", children: [
        "Willkommen in der",
        /* @__PURE__ */ jsx("br", {}),
        /* @__PURE__ */ jsx("em", { className: "block mt-3", children: "MIRAÉ" }),
        /* @__PURE__ */ jsx("span", { className: "hero-subtitle", children: "— HOOKAH LOUNGE —" })
      ] }) }),
      /* @__PURE__ */ jsx(ScrollRevealItem, { children: /* @__PURE__ */ jsxs("div", { className: "mt-8 max-w-2xl mx-auto", children: [
        /* @__PURE__ */ jsx("h2", { className: "font-serif text-2xl md:text-3xl text-cream tracking-wide mb-3", children: HERO_CONTENT.headline }),
        /* @__PURE__ */ jsx("p", { className: "hero-description", children: HERO_CONTENT.subheadline })
      ] }) }),
      /* @__PURE__ */ jsx(ScrollRevealItem, { children: /* @__PURE__ */ jsx("div", { className: "mt-14", children: /* @__PURE__ */ jsx(Magnetic, { children: /* @__PURE__ */ jsxs("a", { href: "#karte", className: "btn-bronze", children: [
        /* @__PURE__ */ jsx("span", { children: "Speisekarte entdecken" }),
        /* @__PURE__ */ jsx("span", { className: "text-bronze", children: "→" })
      ] }) }) }) })
    ] }) }),
    /* @__PURE__ */ jsx("div", { className: "hero-ornament left", children: "N 48.10° · E 11.51°" }),
    /* @__PURE__ */ jsx("div", { className: "hero-ornament right", children: "EST · MMXXV" })
  ] });
}
const url = "/lounge-2.jpeg";
const lounge2 = {
  url
};
function Atmosphere() {
  const sectionRef = useRef(null);
  const lounge1Url = lounge1.url.startsWith("/") ? `${"/mira-digital-alchemy/".replace(/\/$/, "")}${lounge1.url}` : lounge1.url;
  const lounge2Url = lounge2.url.startsWith("/") ? `${"/mira-digital-alchemy/".replace(/\/$/, "")}${lounge2.url}` : lounge2.url;
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });
  const yParallax1 = useTransform(scrollYProgress, [0, 1], [-40, 40]);
  const yParallax2 = useTransform(scrollYProgress, [0, 1], [35, -35]);
  const floatTransition1 = {
    duration: 8,
    repeat: Infinity,
    ease: "easeInOut"
  };
  const floatTransition2 = {
    duration: 10,
    repeat: Infinity,
    ease: "easeInOut",
    delay: 0.6
  };
  return /* @__PURE__ */ jsxs(
    "section",
    {
      ref: sectionRef,
      id: "atmosphaere",
      className: "relative py-32 px-6 md-px-12 overflow-hidden",
      children: [
        /* @__PURE__ */ jsx(Embers, { count: 12, speedMultiplier: 0.7 }),
        /* @__PURE__ */ jsxs("div", { className: "container-max grid md-grid-cols-12 gap-12 md-gap-16 items-center relative z-10", children: [
          /* @__PURE__ */ jsxs("div", { className: "md-col-span-7 md-order-1", children: [
            /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-5 gap-3 md-hidden", children: [
              /* @__PURE__ */ jsx(
                motion.div,
                {
                  className: "frame-bronze col-span-4 aspect-[4/5] shadow-[0_20px_50px_rgba(0,0,0,0.6)] overflow-hidden",
                  animate: { y: [-4, 4, -4] },
                  transition: floatTransition1,
                  children: /* @__PURE__ */ jsx(
                    motion.img,
                    {
                      src: lounge2Url,
                      alt: "MIRAÉ Lounge Interieur",
                      className: "object-cover w-full h-full",
                      style: { y: yParallax1, scale: 1.15 }
                    }
                  )
                }
              ),
              /* @__PURE__ */ jsx(
                motion.div,
                {
                  className: "frame-bronze col-span-3 col-start-3 -mt-10 aspect-square shadow-[0_20px_50px_rgba(0,0,0,0.7)] overflow-hidden",
                  animate: { y: [4, -4, 4] },
                  transition: floatTransition2,
                  children: /* @__PURE__ */ jsx(
                    motion.img,
                    {
                      src: lounge1Url,
                      alt: "MIRAÉ Sitzbereich",
                      className: "object-cover w-full h-full",
                      style: { y: yParallax2, scale: 1.15 }
                    }
                  )
                }
              )
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "hidden md-block atmosphere-desktop-wrapper", children: [
              /* @__PURE__ */ jsx(
                motion.div,
                {
                  className: "frame-bronze absolute top-0 left-0 shadow-[0_30px_80px_rgba(0,0,0,0.6)] overflow-hidden",
                  style: { width: "68%", height: "70%" },
                  animate: { y: [-6, 6, -6] },
                  transition: floatTransition1,
                  children: /* @__PURE__ */ jsx(
                    motion.img,
                    {
                      src: lounge2Url,
                      alt: "MIRAÉ Lounge Interieur",
                      className: "object-cover w-full h-full",
                      style: { y: yParallax1, scale: 1.18 }
                    }
                  )
                }
              ),
              /* @__PURE__ */ jsx(
                motion.div,
                {
                  className: "frame-bronze absolute bottom-0 right-0 shadow-[0_30px_80px_rgba(0,0,0,0.7)] overflow-hidden",
                  style: { width: "55%", height: "55%" },
                  animate: { y: [6, -6, 6] },
                  transition: floatTransition2,
                  children: /* @__PURE__ */ jsx(
                    motion.img,
                    {
                      src: lounge1Url,
                      alt: "MIRAÉ Sitzbereich",
                      className: "object-cover w-full h-full",
                      style: { y: yParallax2, scale: 1.18 }
                    }
                  )
                }
              ),
              /* @__PURE__ */ jsx(
                "div",
                {
                  className: "absolute font-display text-[0.55rem] tracking-[0.6em] text-bronze rotate-90 origin-left",
                  style: { top: "58%", left: "55%" },
                  children: "— ATMOSPHÈRE —"
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "md-col-span-5 md-pl-6 md-order-2", children: /* @__PURE__ */ jsxs(ScrollReveal, { stagger: true, delay: 0.15, children: [
            /* @__PURE__ */ jsx(ScrollRevealItem, { children: /* @__PURE__ */ jsx("div", { className: "eyebrow", children: "Die Philosophie" }) }),
            /* @__PURE__ */ jsx(ScrollRevealItem, { children: /* @__PURE__ */ jsxs("h2", { className: "display text-4xl md-text-6xl mt-6", style: { lineHeight: 1.05 }, children: [
              "Wo der ",
              /* @__PURE__ */ jsx("em", { children: "Rauch" }),
              /* @__PURE__ */ jsx("br", {}),
              "zur Sprache wird."
            ] }) }),
            /* @__PURE__ */ jsx(ScrollRevealItem, { children: /* @__PURE__ */ jsx("div", { className: "mt-8 w-16 h-px bg-bronze" }) }),
            /* @__PURE__ */ jsx(ScrollRevealItem, { children: /* @__PURE__ */ jsxs("div", { className: "mt-8 space-y-6 text-dim leading-loose font-serif text-lg", children: [
              /* @__PURE__ */ jsx("p", { children: "MIRAÉ ist kein Ort, den man zufällig betritt. Hinter samtigen Vorhängen und Bronzelicht öffnet sich ein Refugium — für jene, die das Außergewöhnliche im Detail suchen." }),
              /* @__PURE__ */ jsx("p", { children: "Handverlesene Tabake. Hauseigene Kreationen. Ein Service, der die Stille respektiert. Jeder Zug, jeder Schluck — eine kleine Zeremonie." })
            ] }) }),
            /* @__PURE__ */ jsx(ScrollRevealItem, { children: /* @__PURE__ */ jsxs("div", { className: "mt-12 stats-grid stat-box", children: [
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("div", { className: "font-display text-3xl text-bronze-bright", children: "10+" }),
                /* @__PURE__ */ jsx("div", { className: "text-[0.65rem] uppercase tracking-[0.3em] text-dim mt-2", children: "Sorten" })
              ] }),
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("div", { className: "font-display text-3xl text-bronze-bright", children: "VIP" }),
                /* @__PURE__ */ jsx("div", { className: "text-[0.65rem] uppercase tracking-[0.3em] text-dim mt-2", children: "Lounge" })
              ] }),
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("div", { className: "font-display text-3xl text-bronze-bright", children: "03:00" }),
                /* @__PURE__ */ jsx("div", { className: "text-[0.65rem] uppercase tracking-[0.3em] text-dim mt-2", children: "Bis Spät" })
              ] })
            ] }) })
          ] }) })
        ] })
      ]
    }
  );
}
const MENU = [
  {
    id: "softdrinks",
    title: "Softdrinks",
    subtitle: "Erfrischungen",
    items: [
      { name: "Coca Cola", size: "0,33l", price: "3,90 €" },
      { name: "Fanta", size: "0,33l", price: "3,90 €" },
      { name: "Sprite", size: "0,33l", price: "3,90 €" },
      { name: "Paulaner Spezi", size: "0,33l", price: "3,90 €" },
      { name: "Paulaner Spezi Zero", size: "0,33l", price: "3,90 €" },
      // TEMPORARY PRICE: Same as normal Paulaner Spezi, awaiting client confirmation
      { name: "Schwarze Dose", size: "0,33l", price: "4,50 €" },
      { name: "Moloko", size: "0,33l", price: "4,50 €" },
      { name: "Red Bull", size: "0,25l", price: "3,90 €" },
      { name: "Wasser Still / Sprudel", size: "0,33l", price: "3,90 €" },
      { name: "Wasser Still / Sprudel", size: "0,75l", price: "6,90 €" },
      { name: "Schweppes", size: "0,20l", price: "3,50 €" },
      { name: "Saft Pur", size: "0,40l", price: "4,50 €" },
      { name: "Saftschorlen", size: "0,40l", price: "3,90 €" }
    ]
  },
  {
    id: "tee",
    title: "Tee",
    subtitle: "Heiße Aufgüsse",
    items: [
      { name: "Hausgemachter EisTee", price: "3,90 €" },
      { name: "Kamillen Tee", price: "3,40 €" },
      { name: "Früchte Tee", price: "3,40 €" },
      { name: "Schwarz Tee", price: "3,40 €" },
      { name: "Zitrone – Ingwer Tee", price: "3,40 €" },
      { name: "MIRAÉ Tee", price: "3,90 €" }
    ]
  },
  {
    id: "alkoholfrei",
    title: "Alkoholfreie Getränke",
    subtitle: "Signature Mocktails",
    items: [
      { name: "Lillet Berry", price: "6,90 €" },
      { name: "Hugo", price: "6,90 €" },
      { name: "Limetten Spritz", price: "6,90 €" },
      { name: "Peach Lady", price: "6,90 €" },
      { name: "Coconut Kiss", price: "7,90 €" },
      { name: "Virgin Caipi", price: "7,90 €" },
      { name: "FloBi", price: "7,90 €" },
      { name: "Virgin Mojito", price: "7,90 €" },
      { name: "Virgin Sunrise", price: "7,90 €" },
      { name: "Spring Paradis", price: "7,90 €" }
    ],
    note: "Weitere Aperitifs / Cocktails auf Anfrage"
  },
  {
    id: "kaffee",
    title: "Kaffee",
    subtitle: "Die Espresso-Bar",
    items: [
      { name: "Espresso", price: "2,20 €" },
      { name: "Espresso Macchiato", price: "2,50 €" },
      { name: "Doppio Espresso", price: "3,50 €" },
      { name: "Doppio Macchiato", price: "3,70 €" },
      { name: "Kaffee Crema", price: "3,00 €" },
      { name: "Cappuccino", price: "3,20 €" },
      { name: "Milchkaffee", price: "3,80 €" },
      { name: "Latte Macchiato", price: "3,90 €" },
      { name: "Ice Kaffee", price: "4,90 €" },
      { name: "Ice Latte", price: "4,90 €" },
      { name: "Chai Latte", price: "3,60 €" },
      { name: "Matcha Latte", price: "4,20 €" },
      { name: "Ice Matcha Latte", price: "4,90 €" },
      { name: "Heisse Schokolade", price: "3,90 €" },
      { name: "Heisse Weiße Schokolade", price: "3,90 €" }
    ],
    note: "Optional auch mit Hafermilch · +0,50 €"
  },
  {
    id: "snacks",
    title: "Snacks & Desserts",
    subtitle: "Kleine Begleiter",
    items: [
      { name: "Obstteller", price: "8,90 €" },
      { name: "Nachos mit Dip", price: "4,90 €" },
      { name: "Nachos mit Käse überbacken", price: "5,90 €" },
      { name: "Sucuk-Käse Toast", price: "5,90 €" },
      { name: "Popcorn Homemade XL", price: "4,90 €" },
      { name: "Dips extra je", price: "0,80 €" },
      { name: "Schokoladensoufflé", price: "4,90 €" },
      { name: "Pistaziensoufflé", price: "5,90 €" },
      { name: "Lotus-Cheesecake", price: "6,90 €" }
    ]
  },
  {
    id: "shisha",
    title: "Shisha",
    subtitle: "Das Herzstück",
    items: [
      { name: "Bruderherz", price: "14 €" },
      { name: "Palm 5", price: "14 €" },
      { name: "Sternenstaub", price: "14 €" },
      { name: "Black Nana", price: "14 €" },
      { name: "Löwenherz", price: "14 €" },
      { name: "Lemon Chill", price: "14 €" },
      { name: "African Queen", price: "14 €" },
      { name: "Grüne Minze", price: "14 €" },
      { name: "Love66", price: "14 €" },
      { name: "Blackbox-Ananas", price: "14 €" },
      { name: "ICE Kaktus", price: "14 €" },
      { name: "ICE Bonbon", price: "14 €" },
      { name: "MIRAÉ Spezial", price: "18 €" }
    ],
    note: "Weitere Sorten auf Anfrage"
  }
];
function Menu() {
  const [active, setActive] = useState(MENU[0].id);
  const sectionRefs = useRef({});
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-30% 0px -55% 0px", threshold: 0 }
    );
    Object.values(sectionRefs.current).forEach((el) => el && obs.observe(el));
    return () => obs.disconnect();
  }, []);
  const scrollTo = (id) => {
    const el = sectionRefs.current[id];
    if (el) {
      const y = el.getBoundingClientRect().top + window.scrollY - 120;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };
  return /* @__PURE__ */ jsxs("section", { id: "karte", className: "relative py-32 px-6 md-px-12 overflow-hidden", children: [
    /* @__PURE__ */ jsx(Embers, { count: 16, speedMultiplier: 0.6 }),
    /* @__PURE__ */ jsxs("div", { className: "container-max relative z-10", children: [
      /* @__PURE__ */ jsx("div", { className: "text-center mb-20", children: /* @__PURE__ */ jsxs(ScrollReveal, { stagger: true, delay: 0.1, children: [
        /* @__PURE__ */ jsx(ScrollRevealItem, { children: /* @__PURE__ */ jsx("div", { className: "eyebrow", children: "Die Karte" }) }),
        /* @__PURE__ */ jsx(ScrollRevealItem, { children: /* @__PURE__ */ jsxs("h2", { className: "display text-5xl md-text-7xl mt-6", children: [
          /* @__PURE__ */ jsx("em", { children: "Carte" }),
          " de la Maison"
        ] }) }),
        /* @__PURE__ */ jsx(ScrollRevealItem, { children: /* @__PURE__ */ jsx(
          "div",
          {
            className: "mt-8 mx-auto w-24 h-px",
            style: {
              background: "linear-gradient(to right, transparent, var(--color-bronze), transparent)"
            }
          }
        ) }),
        /* @__PURE__ */ jsx(ScrollRevealItem, { children: /* @__PURE__ */ jsx("p", { className: "mt-8 text-dim max-w-xl mx-auto leading-relaxed text-[0.95rem]", children: "Sorgfältig kuratiert. Geschmackvoll abgestimmt. Jeder Posten ist ein Versprechen — von der ersten Brise bis zum letzten Schluck." }) })
      ] }) }),
      /* @__PURE__ */ jsx("div", { className: "menu-sticky-nav -mx-6 -mx-12 px-6 md-px-12", children: /* @__PURE__ */ jsx("div", { className: "menu-sticky-wrapper", children: MENU.map((c) => /* @__PURE__ */ jsx(
        "button",
        {
          onClick: () => scrollTo(c.id),
          className: `menu-tab ${active === c.id ? "active" : ""}`,
          children: c.title
        },
        c.id
      )) }) }),
      /* @__PURE__ */ jsx("div", { className: "space-y-24", children: MENU.map((cat, idx) => /* @__PURE__ */ jsx(
        "div",
        {
          id: cat.id,
          ref: (el) => {
            sectionRefs.current[cat.id] = el;
          },
          className: "scroll-mt-32",
          children: /* @__PURE__ */ jsxs(ScrollReveal, { stagger: true, delay: 0.1, children: [
            /* @__PURE__ */ jsx(ScrollRevealItem, { children: /* @__PURE__ */ jsxs(
              "div",
              {
                className: `flex items-baseline gap-6 mb-10 ${idx % 2 ? "md-flex-row-reverse md-text-right" : ""}`,
                children: [
                  /* @__PURE__ */ jsxs("div", { children: [
                    /* @__PURE__ */ jsx("div", { className: "eyebrow", children: cat.subtitle }),
                    /* @__PURE__ */ jsx("h3", { className: "display text-4xl md-text-5xl mt-3", children: /* @__PURE__ */ jsx("em", { children: cat.title }) })
                  ] }),
                  /* @__PURE__ */ jsx(
                    "div",
                    {
                      className: "hidden md-block flex-1 h-px",
                      style: {
                        background: "linear-gradient(to right, rgba(184,137,90,0.4), transparent)"
                      }
                    }
                  )
                ]
              }
            ) }),
            /* @__PURE__ */ jsx(ScrollRevealItem, { children: /* @__PURE__ */ jsx("ul", { className: "space-y-4", children: cat.items.map((item, i) => /* @__PURE__ */ jsxs("li", { className: "flex items-baseline group", children: [
              /* @__PURE__ */ jsxs("span", { className: "font-serif text-lg md-text-xl text-cream group-hover-bronze-bright transition relative menu-item-name inline-block", children: [
                item.name,
                item.size && /* @__PURE__ */ jsx("span", { className: "text-xs tracking-wider ml-3 text-dim font-sans", children: item.size })
              ] }),
              /* @__PURE__ */ jsx("span", { className: "hairline" }),
              /* @__PURE__ */ jsx("span", { className: "font-display tracking-widest text-sm md-text-base text-bronze-bright whitespace-nowrap", children: item.price })
            ] }, i)) }) }),
            cat.note && /* @__PURE__ */ jsx(ScrollRevealItem, { children: /* @__PURE__ */ jsx("p", { className: "mt-6 italic text-sm text-dim font-serif", children: cat.note }) })
          ] })
        },
        cat.id
      )) })
    ] })
  ] });
}
const GALLERY_IMAGES = Array.from({ length: 10 }, (_, i) => i + 1);
function Gallery() {
  const [activeIndex, setActiveIndex] = useState(null);
  const getImageUrl = (id) => {
    const basePath = "/mira-digital-alchemy/".replace(/\/$/, "");
    return `${basePath}/images/gallery-${id}.jpg`;
  };
  const handlePrev = (e) => {
    e?.stopPropagation();
    setActiveIndex(
      (prev) => prev !== null ? prev === 0 ? GALLERY_IMAGES.length - 1 : prev - 1 : null
    );
  };
  const handleNext = (e) => {
    e?.stopPropagation();
    setActiveIndex(
      (prev) => prev !== null ? prev === GALLERY_IMAGES.length - 1 ? 0 : prev + 1 : null
    );
  };
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (activeIndex === null) return;
      if (e.key === "Escape") setActiveIndex(null);
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "ArrowRight") handleNext();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeIndex]);
  useEffect(() => {
    if (activeIndex !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [activeIndex]);
  return /* @__PURE__ */ jsxs("section", { id: "galerie", className: "gallery-section scroll-mt-32 px-6 md-px-12", children: [
    /* @__PURE__ */ jsxs("div", { className: "container-max relative z-10", children: [
      /* @__PURE__ */ jsx("div", { className: "text-center mb-20", children: /* @__PURE__ */ jsxs(ScrollReveal, { stagger: true, delay: 0.15, children: [
        /* @__PURE__ */ jsx(ScrollRevealItem, { children: /* @__PURE__ */ jsx("div", { className: "eyebrow", children: "Galerie" }) }),
        /* @__PURE__ */ jsx(ScrollRevealItem, { children: /* @__PURE__ */ jsxs("h2", { className: "display text-5xl md-text-7xl mt-6", children: [
          "Impressionen aus dem ",
          /* @__PURE__ */ jsx("em", { children: "MIRAÉ" })
        ] }) }),
        /* @__PURE__ */ jsx(ScrollRevealItem, { children: /* @__PURE__ */ jsx(
          "div",
          {
            className: "mt-8 mx-auto w-24 h-px",
            style: {
              background: "linear-gradient(to right, transparent, var(--color-amber), transparent)"
            }
          }
        ) })
      ] }) }),
      /* @__PURE__ */ jsx(ScrollReveal, { stagger: true, delay: 0.1, children: /* @__PURE__ */ jsx("div", { className: "gallery-grid", children: GALLERY_IMAGES.map((id, idx) => /* @__PURE__ */ jsx(ScrollRevealItem, { children: /* @__PURE__ */ jsx(
        "div",
        {
          className: "gallery-item",
          onClick: () => setActiveIndex(idx),
          role: "button",
          tabIndex: 0,
          "aria-label": `Bild ${id} vergrößern`,
          children: /* @__PURE__ */ jsx("img", { src: getImageUrl(id), alt: `MIRAÉ Galerie Bild ${id}`, loading: "lazy" })
        }
      ) }, id)) }) })
    ] }),
    /* @__PURE__ */ jsx(AnimatePresence, { children: activeIndex !== null && /* @__PURE__ */ jsxs(
      motion.div,
      {
        className: "lightbox-overlay",
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        exit: { opacity: 0 },
        onClick: () => setActiveIndex(null),
        children: [
          /* @__PURE__ */ jsxs(
            "button",
            {
              className: "lightbox-close",
              onClick: () => setActiveIndex(null),
              "aria-label": "Schließen",
              children: [
                /* @__PURE__ */ jsx(X, { size: 18 }),
                /* @__PURE__ */ jsx("span", { children: "Schließen" })
              ]
            }
          ),
          /* @__PURE__ */ jsx(
            "button",
            {
              className: "lightbox-nav-btn prev",
              onClick: handlePrev,
              "aria-label": "Vorheriges Bild",
              children: /* @__PURE__ */ jsx(ChevronLeft, { size: 24 })
            }
          ),
          /* @__PURE__ */ jsx(
            motion.div,
            {
              className: "lightbox-content",
              initial: { scale: 0.95, opacity: 0 },
              animate: { scale: 1, opacity: 1 },
              exit: { scale: 0.95, opacity: 0 },
              transition: { type: "spring", damping: 25, stiffness: 200 },
              onClick: (e) => e.stopPropagation(),
              children: /* @__PURE__ */ jsx(
                "img",
                {
                  src: getImageUrl(GALLERY_IMAGES[activeIndex]),
                  alt: `MIRAÉ Galerie Detail ${GALLERY_IMAGES[activeIndex]}`,
                  className: "lightbox-image"
                }
              )
            }
          ),
          /* @__PURE__ */ jsx(
            "button",
            {
              className: "lightbox-nav-btn next",
              onClick: handleNext,
              "aria-label": "Nächstes Bild",
              children: /* @__PURE__ */ jsx(ChevronRight, { size: 24 })
            }
          )
        ]
      }
    ) })
  ] });
}
function Location() {
  const { consent, setConsent } = useConsent();
  const mapAllowed = consent === "accepted";
  return /* @__PURE__ */ jsxs("section", { id: "location", className: "relative py-32 px-6 md-px-12 overflow-hidden", children: [
    /* @__PURE__ */ jsx(Embers, { count: 12, speedMultiplier: 0.6 }),
    /* @__PURE__ */ jsxs("div", { className: "container-max relative z-10", children: [
      /* @__PURE__ */ jsx("div", { className: "text-center mb-20", children: /* @__PURE__ */ jsxs(ScrollReveal, { stagger: true, delay: 0.1, children: [
        /* @__PURE__ */ jsx(ScrollRevealItem, { children: /* @__PURE__ */ jsx("div", { className: "eyebrow", children: "Besuchen Sie uns" }) }),
        /* @__PURE__ */ jsx(ScrollRevealItem, { children: /* @__PURE__ */ jsxs("h2", { className: "display text-5xl md-text-7xl mt-6", children: [
          /* @__PURE__ */ jsx("em", { children: "Finden" }),
          " Sie uns"
        ] }) }),
        /* @__PURE__ */ jsx(ScrollRevealItem, { children: /* @__PURE__ */ jsx(
          "div",
          {
            className: "mt-8 mx-auto w-24 h-px",
            style: {
              background: "linear-gradient(to right, transparent, var(--color-bronze), transparent)"
            }
          }
        ) })
      ] }) }),
      /* @__PURE__ */ jsxs("div", { className: "grid grid-2 gap-12 md-gap-16 items-center", children: [
        /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsxs(ScrollReveal, { stagger: true, delay: 0.15, children: [
          /* @__PURE__ */ jsxs(ScrollRevealItem, { children: [
            /* @__PURE__ */ jsx("div", { className: "eyebrow", children: "Adresse" }),
            /* @__PURE__ */ jsxs("p", { className: "font-serif text-2xl md-text-3xl mt-4 leading-relaxed text-cream", children: [
              "Friedrichshafener Str. 17",
              /* @__PURE__ */ jsx("br", {}),
              "81243 München",
              /* @__PURE__ */ jsx("br", {}),
              "Deutschland"
            ] })
          ] }),
          /* @__PURE__ */ jsx(ScrollRevealItem, { children: /* @__PURE__ */ jsxs("div", { className: "mt-12 phone-grid", children: [
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("div", { className: "eyebrow", children: "Telefon" }),
              /* @__PURE__ */ jsx(
                "a",
                {
                  href: "tel:+4915775068238",
                  className: "mt-3 block font-serif text-xl text-bronze-bright hover-cream transition",
                  children: "+49 1577 5068238"
                }
              )
            ] }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("div", { className: "eyebrow", children: "WhatsApp" }),
              /* @__PURE__ */ jsx(
                "a",
                {
                  href: "https://wa.me/4915775068238",
                  target: "_blank",
                  rel: "noreferrer",
                  className: "mt-3 block font-serif text-xl text-bronze-bright hover-cream transition",
                  children: "Direktnachricht"
                }
              )
            ] })
          ] }) }),
          /* @__PURE__ */ jsx(ScrollRevealItem, { children: /* @__PURE__ */ jsxs("div", { className: "mt-12 stat-box", children: [
            /* @__PURE__ */ jsx("div", { className: "eyebrow mb-5", children: "Öffnungszeiten" }),
            /* @__PURE__ */ jsxs("div", { className: "space-y-2 font-serif text-lg", children: [
              /* @__PURE__ */ jsxs("div", { className: "flex justify-between", children: [
                /* @__PURE__ */ jsx("span", { className: "text-dim", children: "Montag – Donnerstag" }),
                /* @__PURE__ */ jsx("span", { children: "18:00 – 01:00" })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "flex justify-between", children: [
                /* @__PURE__ */ jsx("span", { className: "text-dim", children: "Freitag" }),
                /* @__PURE__ */ jsx("span", { children: "18:00 – 03:00" })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "flex justify-between", children: [
                /* @__PURE__ */ jsx("span", { className: "text-dim", children: "Samstag" }),
                /* @__PURE__ */ jsx("span", { children: "17:00 – 03:00" })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "flex justify-between", children: [
                /* @__PURE__ */ jsx("span", { className: "text-dim", children: "Sonntag" }),
                /* @__PURE__ */ jsx("span", { children: "16:00 – 01:00" })
              ] })
            ] })
          ] }) })
        ] }) }),
        /* @__PURE__ */ jsx(ScrollReveal, { delay: 0.3, children: /* @__PURE__ */ jsx("div", { className: "frame-bronze location-map-container shadow-[0_30px_80px_rgba(0,0,0,0.6)]", children: mapAllowed ? /* @__PURE__ */ jsx(
          "iframe",
          {
            title: "MIRAÉ Lounge Standort",
            src: "https://www.google.com/maps?q=Friedrichshafener+Str.+17,+81243+München&output=embed",
            className: "w-full h-full grayscale-[0.6] contrast-[1.1]",
            loading: "lazy",
            referrerPolicy: "no-referrer-when-downgrade"
          }
        ) : /* @__PURE__ */ jsxs("div", { className: "location-map-wrapper", children: [
          /* @__PURE__ */ jsx("div", { className: "location-map-grid" }),
          /* @__PURE__ */ jsxs(
            "svg",
            {
              width: "48",
              height: "48",
              viewBox: "0 0 24 24",
              fill: "none",
              stroke: "currentColor",
              strokeWidth: "1",
              className: "text-bronze relative",
              children: [
                /* @__PURE__ */ jsx("path", { d: "M12 22s-8-7.58-8-13a8 8 0 1116 0c0 5.42-8 13-8 13z" }),
                /* @__PURE__ */ jsx("circle", { cx: "12", cy: "9", r: "3" })
              ]
            }
          ),
          /* @__PURE__ */ jsx("p", { className: "mt-6 font-serif text-lg text-cream max-w-sm relative leading-relaxed", children: "Bitte akzeptieren Sie die Cookies, um die Google Maps Karte zu laden." }),
          /* @__PURE__ */ jsx(Magnetic, { children: /* @__PURE__ */ jsx(
            "button",
            {
              onClick: () => setConsent("accepted"),
              className: "btn-bronze mt-8 relative",
              style: { padding: "0.8rem 1.6rem" },
              children: /* @__PURE__ */ jsx("span", { children: "Cookies akzeptieren" })
            }
          ) })
        ] }) }) })
      ] })
    ] })
  ] });
}
function Index() {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(Hero, {}),
    /* @__PURE__ */ jsx(Atmosphere, {}),
    /* @__PURE__ */ jsx(Menu, {}),
    /* @__PURE__ */ jsx(Gallery, {}),
    /* @__PURE__ */ jsx(Location, {})
  ] });
}
export {
  Index as component
};
