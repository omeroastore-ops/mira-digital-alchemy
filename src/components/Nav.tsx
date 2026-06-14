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
    <header className={`nav-header ${scrolled ? "nav-header-scrolled" : ""}`}>
      <div className="container-max py-5 flex items-center justify-between">
        <Link to="/" className="group">
          <div className="font-display text-xl tracking-[0.3em] text-cream group-hover-bronze-bright transition">MIRAÉ</div>
          <div className="font-display text-[0.55rem] tracking-[0.5em] text-bronze mt-0.5">HOOKAH · LOUNGE</div>
        </Link>
        <nav className="hidden md-flex items-center gap-10 text-[0.7rem] font-display uppercase tracking-[0.32em] nav-links">
          <a href={`${import.meta.env.BASE_URL}#karte`}>Die Karte</a>
          <a href={`${import.meta.env.BASE_URL}#atmosphaere`}>Atmosphäre</a>
          <a href={`${import.meta.env.BASE_URL}#location`}>Location</a>
        </nav>
        <a href="tel:+4915775068238" className="hidden md-inline text-[0.7rem] font-display uppercase tracking-[0.3em] text-bronze-bright hover-cream transition">+49 1577 506 8238</a>
      </div>
    </header>
  );
}
