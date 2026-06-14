import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 40);
    on(); window.addEventListener("scroll", on);
    return () => window.removeEventListener("scroll", on);
  }, []);
  return (
    <header className={`fixed top-0 inset-x-0 z-50 transition-all duration-700 ${scrolled ? "bg-[rgba(10,8,7,0.85)] backdrop-blur-xl border-b border-[rgba(184,137,90,0.15)]" : ""}`}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-5 flex items-center justify-between">
        <Link to="/" className="group">
          <div className="font-display text-xl tracking-[0.3em] text-[var(--color-cream)] group-hover:text-[var(--color-bronze-bright)] transition">MIRAÉ</div>
          <div className="font-display text-[0.55rem] tracking-[0.5em] text-[var(--color-bronze)] mt-0.5">HOOKAH · LOUNGE</div>
        </Link>
        <nav className="hidden md:flex items-center gap-10 text-[0.7rem] font-display uppercase tracking-[0.32em] text-[var(--color-cream-dim)]">
          <a href="/#karte" className="hover:text-[var(--color-bronze-bright)] transition">Die Karte</a>
          <a href="/#atmosphaere" className="hover:text-[var(--color-bronze-bright)] transition">Atmosphäre</a>
          <a href="/#location" className="hover:text-[var(--color-bronze-bright)] transition">Location</a>
        </nav>
        <a href="tel:+4915775068238" className="hidden md:inline text-[0.7rem] font-display uppercase tracking-[0.3em] text-[var(--color-bronze-bright)] hover:text-[var(--color-cream)] transition">+49 1577 506 8238</a>
      </div>
    </header>
  );
}
