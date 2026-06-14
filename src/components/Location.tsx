import { useConsent } from "./CookieBanner";

export function Location() {
  const { consent, setConsent } = useConsent();
  const mapAllowed = consent === "accepted";

  return (
    <section id="location" className="relative py-32 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <div className="eyebrow">Besuchen Sie uns</div>
          <h2 className="display text-5xl md:text-7xl mt-6"><em>Finden</em> Sie uns</h2>
          <div className="mt-8 mx-auto w-24 h-px bg-gradient-to-r from-transparent via-[var(--color-bronze)] to-transparent" />
        </div>

        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          <div>
            <div className="eyebrow">Adresse</div>
            <p className="font-serif text-2xl md:text-3xl mt-4 leading-relaxed text-[var(--color-cream)]">
              Friedrichshafener Str. 17<br />81243 München<br />Deutschland
            </p>

            <div className="mt-12 grid grid-cols-2 gap-8">
              <div>
                <div className="eyebrow">Telefon</div>
                <a href="tel:+4915775068238" className="mt-3 block font-serif text-xl text-[var(--color-bronze-bright)] hover:text-[var(--color-cream)] transition">+49 1577 5068238</a>
              </div>
              <div>
                <div className="eyebrow">WhatsApp</div>
                <a href="https://wa.me/4915775068238" target="_blank" rel="noreferrer" className="mt-3 block font-serif text-xl text-[var(--color-bronze-bright)] hover:text-[var(--color-cream)] transition">Direktnachricht</a>
              </div>
            </div>

            <div className="mt-12 border-t border-[rgba(184,137,90,0.2)] pt-8">
              <div className="eyebrow mb-5">Öffnungszeiten</div>
              <div className="space-y-2 font-serif text-lg">
                <div className="flex justify-between"><span className="text-[var(--color-cream-dim)]">Montag – Donnerstag</span><span>17:00 – 01:00</span></div>
                <div className="flex justify-between"><span className="text-[var(--color-cream-dim)]">Freitag – Samstag</span><span>15:00 – 03:00</span></div>
                <div className="flex justify-between"><span className="text-[var(--color-cream-dim)]">Sonntag</span><span>17:00 – 01:00</span></div>
              </div>
            </div>
          </div>

          <div className="frame-bronze h-[460px] md:h-[560px] shadow-[0_30px_80px_rgba(0,0,0,0.6)]">
            {mapAllowed ? (
              <iframe
                title="MIRAÉ Lounge Standort"
                src="https://www.google.com/maps?q=Friedrichshafener+Str.+17,+81243+München&output=embed"
                className="w-full h-full grayscale-[0.6] contrast-[1.1]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            ) : (
              <div className="w-full h-full bg-[var(--color-charcoal)] flex flex-col items-center justify-center p-10 text-center relative overflow-hidden">
                <div className="absolute inset-0 opacity-30" style={{
                  backgroundImage: "linear-gradient(rgba(184,137,90,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(184,137,90,0.15) 1px, transparent 1px)",
                  backgroundSize: "40px 40px",
                }} />
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="text-[var(--color-bronze)] relative">
                  <path d="M12 22s-8-7.58-8-13a8 8 0 1116 0c0 5.42-8 13-8 13z"/><circle cx="12" cy="9" r="3"/>
                </svg>
                <p className="mt-6 font-serif text-lg text-[var(--color-cream)] max-w-sm relative leading-relaxed">
                  Bitte akzeptieren Sie die Cookies, um die Google Maps Karte zu laden.
                </p>
                <button onClick={() => setConsent("accepted")} className="btn-bronze mt-8 relative" style={{padding:"0.8rem 1.6rem"}}>
                  <span>Cookies akzeptieren</span>
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
