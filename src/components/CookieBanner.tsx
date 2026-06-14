import { useEffect, useState } from "react";

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
    <div className="fixed bottom-0 left-0 right-0 z-[100] px-4 pb-4 pointer-events-none">
      <div className="pointer-events-auto mx-auto max-w-5xl border border-[rgba(184,137,90,0.3)] bg-[rgba(10,8,7,0.92)] backdrop-blur-xl p-5 md:p-6 flex flex-col md:flex-row gap-5 md:items-center md:justify-between shadow-[0_-10px_40px_rgba(0,0,0,0.6)]">
        <div className="text-sm leading-relaxed text-[var(--color-cream-dim)] max-w-2xl">
          <p className="font-display uppercase tracking-[0.3em] text-[0.65rem] text-[var(--color-bronze)] mb-2">Cookies & Privatsphäre</p>
          Wir verwenden Cookies, um Ihr Erlebnis zu verfeinern. Google Maps wird erst geladen, wenn Sie zustimmen.{" "}
          <a href="/#/cookie-richtlinie" className="underline underline-offset-4 hover:text-[var(--color-bronze-bright)]">Mehr erfahren</a>
        </div>
        <div className="flex gap-3 flex-shrink-0">
          <button onClick={() => setConsent("essential")} className="px-5 py-3 text-[0.7rem] font-display uppercase tracking-[0.25em] border border-[rgba(184,137,90,0.3)] text-[var(--color-cream-dim)] hover:text-[var(--color-cream)] hover:border-[var(--color-bronze)] transition">Nur Essentielle</button>
          <button onClick={() => setConsent("accepted")} className="px-5 py-3 text-[0.7rem] font-display uppercase tracking-[0.25em] bg-[var(--color-bronze)] text-[var(--color-onyx)] hover:bg-[var(--color-bronze-bright)] transition">Alle Akzeptieren</button>
        </div>
      </div>
    </div>
  );
}
