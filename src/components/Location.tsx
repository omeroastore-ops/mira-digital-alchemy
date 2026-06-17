import { useConsent } from "./CookieBanner";
import { ScrollReveal, ScrollRevealItem } from "./ScrollReveal";
import { Magnetic } from "./Magnetic";
import { Embers } from "./Embers";

export function Location() {
  const { consent, setConsent } = useConsent();
  const mapAllowed = consent === "accepted";

  return (
    <section id="location" className="relative py-32 px-6 md-px-12 overflow-hidden">
      {/* Background embers */}
      <Embers count={12} speedMultiplier={0.6} />

      <div className="container-max relative z-10">
        <div className="text-center mb-20">
          <ScrollReveal stagger={true} delay={0.1}>
            <ScrollRevealItem>
              <div className="eyebrow">Besuchen Sie uns</div>
            </ScrollRevealItem>
            <ScrollRevealItem>
              <h2 className="display text-5xl md-text-7xl mt-6">
                <em>Finden</em> Sie uns
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
          </ScrollReveal>
        </div>

        <div className="grid grid-2 gap-12 md-gap-16 items-center">
          <div>
            <ScrollReveal stagger={true} delay={0.15}>
              <ScrollRevealItem>
                <div className="eyebrow">Adresse</div>
                <p className="font-serif text-2xl md-text-3xl mt-4 leading-relaxed text-cream">
                  Friedrichshafener Str. 17
                  <br />
                  81243 München
                  <br />
                  Deutschland
                </p>
              </ScrollRevealItem>

              <ScrollRevealItem>
                <div className="mt-12 phone-grid">
                  <div>
                    <div className="eyebrow">Telefon</div>
                    <a
                      href="tel:+4915775068238"
                      className="mt-3 block font-serif text-xl text-bronze-bright hover-cream transition"
                    >
                      +49 1577 5068238
                    </a>
                  </div>
                  <div>
                    <div className="eyebrow">WhatsApp</div>
                    <a
                      href="https://wa.me/4915775068238"
                      target="_blank"
                      rel="noreferrer"
                      className="mt-3 block font-serif text-xl text-bronze-bright hover-cream transition"
                    >
                      Direktnachricht
                    </a>
                  </div>
                </div>
              </ScrollRevealItem>

              <ScrollRevealItem>
                <div className="mt-12 stat-box">
                  <div className="eyebrow mb-5">Öffnungszeiten</div>
                  <div className="space-y-2 font-serif text-lg">
                    <div className="flex justify-between">
                      <span className="text-dim">Montag – Donnerstag</span>
                      <span>18:00 – 01:00</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-dim">Freitag</span>
                      <span>18:00 – 03:00</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-dim">Samstag</span>
                      <span>17:00 – 03:00</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-dim">Sonntag</span>
                      <span>16:00 – 01:00</span>
                    </div>
                  </div>
                </div>
              </ScrollRevealItem>
            </ScrollReveal>
          </div>

          <ScrollReveal delay={0.3}>
            <div className="frame-bronze location-map-container shadow-[0_30px_80px_rgba(0,0,0,0.6)]">
              {mapAllowed ? (
                <iframe
                  title="MIRAÉ Lounge Standort"
                  src="https://www.google.com/maps?q=Friedrichshafener+Str.+17,+81243+München&output=embed"
                  className="w-full h-full grayscale-[0.6] contrast-[1.1]"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              ) : (
                <div className="location-map-wrapper">
                  <div className="location-map-grid" />
                  <svg
                    width="48"
                    height="48"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1"
                    className="text-bronze relative"
                  >
                    <path d="M12 22s-8-7.58-8-13a8 8 0 1116 0c0 5.42-8 13-8 13z" />
                    <circle cx="12" cy="9" r="3" />
                  </svg>
                  <p className="mt-6 font-serif text-lg text-cream max-w-sm relative leading-relaxed">
                    Bitte akzeptieren Sie die Cookies, um die Google Maps Karte zu laden.
                  </p>
                  <Magnetic>
                    <button
                      onClick={() => setConsent("accepted")}
                      className="btn-bronze mt-8 relative"
                      style={{ padding: "0.8rem 1.6rem" }}
                    >
                      <span>Cookies akzeptieren</span>
                    </button>
                  </Magnetic>
                </div>
              )}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
