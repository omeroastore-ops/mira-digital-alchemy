import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/LegalPage";

export const Route = createFileRoute("/cookie-richtlinie")({
  head: () => ({
    meta: [
      { title: "Cookie-Richtlinie — MIRAÉ Lounge" },
      { name: "description", content: "Cookie-Richtlinie der MIRAÉ Hookah Lounge." },
    ],
  }),
  component: () => (
    <LegalPage title="Cookie-Richtlinie" eyebrow="Transparenz">
      <p>
        Diese Cookie-Richtlinie erklärt, was Cookies sind, wie wir sie verwenden und wie Sie Ihre
        Cookie-Einstellungen anpassen können.
      </p>

      <h2>Was sind Cookies?</h2>
      <p>
        Cookies sind kleine Textdateien, die beim Besuch einer Website auf Ihrem Endgerät
        gespeichert werden. Sie helfen uns, die Funktionalität der Website zu verbessern und Ihre
        Präferenzen zu speichern.
      </p>

      <h2>Essentielle Cookies</h2>
      <p>
        Diese Cookies sind für den Betrieb der Website unverzichtbar. Sie speichern z. B. Ihre
        Cookie-Auswahl selbst und ermöglichen die grundlegende Navigation. Diese Cookies können
        nicht deaktiviert werden.
      </p>

      <h2>Funktionale Cookies (Google Maps)</h2>
      <p>
        Erst nach Ihrer Zustimmung über das Cookie-Banner laden wir externe Inhalte wie die
        Google-Maps-Karte. Dabei wird eine Verbindung zu Servern von Google aufgebaut und Ihre
        IP-Adresse übertragen.
      </p>

      <h2>Ihre Auswahl ändern</h2>
      <p>
        Sie können Ihre Cookie-Einstellungen jederzeit ändern, indem Sie die Speicherung in Ihrem
        Browser löschen. Beim nächsten Besuch erscheint das Banner erneut.
      </p>

      <h2>Weitere Informationen</h2>
      <p>
        Detaillierte Hinweise zur Verarbeitung Ihrer personenbezogenen Daten finden Sie in unserer{" "}
        <a href="/datenschutz">Datenschutzerklärung</a>.
      </p>
    </LegalPage>
  ),
});
