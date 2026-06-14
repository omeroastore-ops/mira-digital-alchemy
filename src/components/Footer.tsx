import { Link } from "@tanstack/react-router";

export function Footer() {
  return (
    <footer className="footer-wrap px-6 md-px-12">
      <div className="container-max grid-3">
        <div>
          <div className="font-display text-2xl tracking-[0.25em] text-cream">MIRAÉ</div>
          <div className="font-display text-[0.6rem] tracking-[0.5em] text-bronze mt-2">HOOKAH · LOUNGE</div>
          <p className="mt-6 text-sm text-dim leading-relaxed max-w-xs">
            Ein verborgener Rückzugsort für Genießer. Geschmack, Rauch und Stille — perfektioniert.
          </p>
        </div>
        <div>
          <div className="eyebrow mb-5">Kontakt</div>
          <div className="text-sm text-dim space-y-2 leading-relaxed">
            <div>Friedrichshafener Str. 17</div>
            <div>81243 München</div>
            <a href="tel:+4915775068238" className="block mt-3 text-bronze-bright hover-cream transition">+49 1577 5068238</a>
          </div>
          <div className="flex gap-4 mt-6">
            <a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram" className="social-link">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-bronze-bright"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="0.5" fill="currentColor"/></svg>
            </a>
            <a href="https://wa.me/4915775068238" target="_blank" rel="noreferrer" aria-label="WhatsApp" className="social-link">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="text-bronze-bright"><path d="M17.5 14.4c-.3-.1-1.7-.8-2-.9-.3-.1-.5-.1-.7.1-.2.3-.7.9-.9 1.1-.2.2-.3.2-.6.1-.3-.1-1.2-.4-2.3-1.4-.9-.8-1.4-1.7-1.6-2-.2-.3 0-.5.1-.6.1-.1.3-.3.4-.5.1-.2.2-.3.3-.5.1-.2 0-.4 0-.5 0-.1-.7-1.6-.9-2.2-.2-.6-.5-.5-.7-.5h-.5c-.2 0-.5.1-.7.3-.2.3-.9.9-.9 2.2 0 1.3.9 2.5 1 2.7.1.2 1.8 2.8 4.4 3.9.6.3 1.1.4 1.5.5.6.2 1.2.2 1.6.1.5-.1 1.5-.6 1.7-1.2.2-.6.2-1.1.1-1.2-.1-.1-.3-.2-.5-.3zM12 2C6.5 2 2 6.5 2 12c0 1.8.5 3.5 1.3 5L2 22l5.2-1.4c1.4.8 3 1.2 4.7 1.2 5.5 0 10-4.5 10-10S17.5 2 12 2zm0 18.2c-1.5 0-3-.4-4.3-1.2l-.3-.2-3.1.8.8-3-.2-.3c-.8-1.3-1.3-2.9-1.3-4.5C3.6 7.4 7.4 3.6 12 3.6c4.6 0 8.4 3.8 8.4 8.4s-3.8 8.2-8.4 8.2z"/></svg>
            </a>
          </div>
        </div>
        <div>
          <div className="eyebrow mb-5">Öffnungszeiten</div>
          <div className="text-sm text-dim space-y-1.5 leading-relaxed">
            <div className="flex justify-between"><span>Mo – Do</span><span className="text-cream">17:00 – 01:00</span></div>
            <div className="flex justify-between"><span>Fr – Sa</span><span className="text-cream">15:00 – 03:00</span></div>
            <div className="flex justify-between"><span>So</span><span className="text-cream">17:00 – 01:00</span></div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div>© {new Date().getFullYear()} MIRAÉ Lounge. Alle Rechte vorbehalten.</div>
        <div className="flex gap-6">
          <Link to="/impressum" className="hover-bronze-bright transition">Impressum</Link>
          <Link to="/datenschutz" className="hover-bronze-bright transition">Datenschutz</Link>
          <Link to="/cookie-richtlinie" className="hover-bronze-bright transition">Cookie-Richtlinie</Link>
        </div>
      </div>
    </footer>
  );
}
