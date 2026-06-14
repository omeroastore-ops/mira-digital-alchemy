import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";

const KEY = "mirae-cookie-consent";

export type ConsentState = "accepted" | "essential" | null;

export function useConsent() {
  const [consent, setConsent] = useState<ConsentState>(null);
  useEffect(() => {
    try {
      const v = localStorage.getItem(KEY) as ConsentState;
      if (v === "accepted" || v === "essential") setConsent(v);
    } catch {}
  }, []);
  const set = (v: ConsentState) => {
    setConsent(v);
    try { if (v) localStorage.setItem(KEY, v); else localStorage.removeItem(KEY); } catch {}
  };
  return { consent, setConsent: set };
}

export function CookieBanner() {
  const { consent, setConsent } = useConsent();
  if (consent) return null;
  return (
    <div className="cookie-banner-wrap">
      <div className="cookie-banner-content">
        <div className="text-sm leading-relaxed text-dim max-w-2xl">
          <p className="font-display uppercase tracking-[0.3em] text-[0.65rem] text-bronze mb-2">Cookies & Privatsphäre</p>
          Wir verwenden Cookies, um Ihr Erlebnis zu verfeinern. Google Maps wird erst geladen, wenn Sie zustimmen.{" "}
          <Link to="/cookie-richtlinie" className="underline underline-offset-4 hover-bronze-bright">Mehr erfahren</Link>
        </div>
        <div className="flex gap-3 flex-shrink-0">
          <button onClick={() => setConsent("essential")} className="cookie-banner-btn-secondary">Nur Essentielle</button>
          <button onClick={() => setConsent("accepted")} className="cookie-banner-btn-primary">Alle Akzeptieren</button>
        </div>
      </div>
    </div>
  );
}
