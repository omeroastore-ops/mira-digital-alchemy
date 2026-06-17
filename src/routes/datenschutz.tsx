import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/LegalPage";

export const Route = createFileRoute("/datenschutz")({
  head: () => ({
    meta: [
      { title: "Datenschutz — MIRAÉ Lounge" },
      { name: "description", content: "Datenschutzerklärung der MIRAÉ Hookah Lounge." },
    ],
  }),
  component: () => (
    <LegalPage title="Datenschutz" eyebrow="Erklärung gemäß DSGVO">
      <p>
        Wir freuen uns über Ihr Interesse an der MIRAÉ Lounge. Der Schutz Ihrer persönlichen Daten
        ist uns ein wichtiges Anliegen. Nachfolgend informieren wir Sie über die Erhebung,
        Verarbeitung und Nutzung Ihrer Daten gemäß der Datenschutz-Grundverordnung (DSGVO).
      </p>

      <h2>1. Verantwortlicher</h2>
      <p>
        MIRAÉ Hookah Lounge
        <br />
        Friedrichshafener Str. 17
        <br />
        81243 München
        <br />
        Telefon: +49 1577 5068238
      </p>

      <h2>2. Erhebung allgemeiner Informationen</h2>
      <p>
        Beim Aufruf unserer Website werden automatisch Informationen allgemeiner Natur erfasst (z.
        B. IP-Adresse, Browsertyp, Datum und Uhrzeit des Zugriffs). Diese Daten lassen keine
        unmittelbaren Rückschlüsse auf Ihre Person zu.
      </p>

      <h2>3. Cookies</h2>
      <p>
        Unsere Website verwendet Cookies. Sie können selbst entscheiden, ob Sie alle Cookies
        akzeptieren oder nur essentielle. Details finden Sie in unserer{" "}
        <a href="/cookie-richtlinie">Cookie-Richtlinie</a>.
      </p>

      <h2>4. Google Maps</h2>
      <p>
        Wir binden Kartenmaterial des Dienstes „Google Maps" der Google Ireland Limited erst nach
        Ihrer ausdrücklichen Einwilligung ein. Hierbei werden Ihre IP-Adresse und Standortdaten an
        Google übertragen.
      </p>

      <h2>5. Ihre Rechte</h2>
      <p>
        Sie haben jederzeit das Recht auf Auskunft, Berichtigung, Löschung, Einschränkung der
        Verarbeitung, Datenübertragbarkeit und Widerspruch. Kontaktieren Sie uns dazu telefonisch
        oder per WhatsApp.
      </p>

      <h2>6. Beschwerderecht</h2>
      <p>
        Sie haben das Recht, sich bei der zuständigen Aufsichtsbehörde (Bayerisches Landesamt für
        Datenschutzaufsicht) zu beschweren.
      </p>
    </LegalPage>
  ),
});
