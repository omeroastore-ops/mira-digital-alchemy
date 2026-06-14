import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/LegalPage";

export const Route = createFileRoute("/impressum")({
  head: () => ({ meta: [{ title: "Impressum — MIRAÉ Lounge" }, { name: "description", content: "Impressum & Anbieterkennzeichnung der MIRAÉ Hookah Lounge." }] }),
  component: () => (
    <LegalPage title="Impressum" eyebrow="Anbieterkennzeichnung">
      <h2>Angaben gemäß § 5 TMG</h2>
      <p>MIRAÉ Hookah Lounge<br/>Friedrichshafener Str. 17<br/>81243 München<br/>Deutschland</p>

      <h2>Kontakt</h2>
      <p>Telefon: <a href="tel:+4915775068238">+49 1577 5068238</a><br/>WhatsApp: <a href="https://wa.me/4915775068238">Direktnachricht</a></p>

      <h2>Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV</h2>
      <p>Geschäftsführung der MIRAÉ Lounge<br/>Friedrichshafener Str. 17, 81243 München</p>

      <h2>Haftungsausschluss</h2>
      <p>Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen. Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich.</p>

      <h2>Urheberrecht</h2>
      <p>Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.</p>
    </LegalPage>
  ),
});
