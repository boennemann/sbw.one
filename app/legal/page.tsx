import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Legal – Stephan Bönnemann-Walenta",
};

export default function Legal() {
  return (
    <main className="animate-page-enter relative mx-auto max-w-2xl px-6 py-16 sm:px-12 selection:bg-[hsl(var(--accent-hue)_60%_65%/0.3)]">
      <Link href="/" className="link font-mono text-sm" aria-label="Back to home page">
        &larr; Back
      </Link>

      <h1 className="mt-12 text-3xl font-bold tracking-tight">Legal</h1>
      <p className="mt-2 text-neutral-500">As required by German law.</p>

      <h2 className="mt-12 text-lg font-semibold">
        Angaben gem&auml;&szlig; &sect; 5 TMG
      </h2>
      <p className="mt-4 leading-relaxed text-neutral-400">
        Stephan B&ouml;nnemann-Walenta
        <br />
        Glonner Str. 5
        <br />
        85640 Putzbrunn
      </p>

      <h2 className="mt-10 text-lg font-semibold">Kontakt</h2>
      <p className="mt-4 leading-relaxed text-neutral-400">
        E-Mail:{" "}
        <a href="mailto:web@sbw.one" className="text-link">
          web@sbw.one
        </a>
      </p>

      <h2 className="mt-10 text-lg font-semibold">
        Verantwortlich f&uuml;r den Inhalt nach &sect; 55 Abs. 2 RStV
      </h2>
      <p className="mt-4 leading-relaxed text-neutral-400">
        Stephan B&ouml;nnemann-Walenta
        <br />
        Glonner Str. 5
        <br />
        85640 Putzbrunn
      </p>

      <p className="mt-8 leading-relaxed text-neutral-400">
        Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren
        vor einer Verbraucherschlichtungsstelle teilzunehmen.
      </p>

      <h3 className="mt-10 text-base font-semibold">
        Haftung f&uuml;r Inhalte
      </h3>
      <p className="mt-4 leading-relaxed text-neutral-400">
        Als Diensteanbieter sind wir gem&auml;&szlig; &sect; 7 Abs.1 TMG
        f&uuml;r eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen
        verantwortlich. Nach &sect;&sect; 8 bis 10 TMG sind wir als
        Diensteanbieter jedoch nicht verpflichtet, &uuml;bermittelte oder
        gespeicherte fremde Informationen zu &uuml;berwachen oder nach
        Umst&auml;nden zu forschen, die auf eine rechtswidrige T&auml;tigkeit
        hinweisen.
      </p>
      <p className="mt-4 leading-relaxed text-neutral-400">
        Verpflichtungen zur Entfernung oder Sperrung der Nutzung von
        Informationen nach den allgemeinen Gesetzen bleiben hiervon
        unber&uuml;hrt. Eine diesbez&uuml;gliche Haftung ist jedoch erst ab dem
        Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung m&ouml;glich.
        Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese
        Inhalte umgehend entfernen.
      </p>

      <h3 className="mt-10 text-base font-semibold">
        Haftung f&uuml;r Links
      </h3>
      <p className="mt-4 leading-relaxed text-neutral-400">
        Unser Angebot enth&auml;lt Links zu externen Websites Dritter, auf
        deren Inhalte wir keinen Einfluss haben. Deshalb k&ouml;nnen wir
        f&uuml;r diese fremden Inhalte auch keine Gew&auml;hr &uuml;bernehmen.
        F&uuml;r die Inhalte der verlinkten Seiten ist stets der jeweilige
        Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten
        wurden zum Zeitpunkt der Verlinkung auf m&ouml;gliche
        Rechtsverst&ouml;&szlig;e &uuml;berpr&uuml;ft. Rechtswidrige Inhalte
        waren zum Zeitpunkt der Verlinkung nicht erkennbar.
      </p>
      <p className="mt-4 leading-relaxed text-neutral-400">
        Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch
        ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei
        Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend
        entfernen.
      </p>

      <h3 className="mt-10 text-base font-semibold">Urheberrecht</h3>
      <p className="mt-4 leading-relaxed text-neutral-400">
        Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen
        Seiten unterliegen dem deutschen Urheberrecht. Die
        Vervielf&auml;ltigung, Bearbeitung, Verbreitung und jede Art der
        Verwertung au&szlig;erhalb der Grenzen des Urheberrechtes bed&uuml;rfen
        der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
        Downloads und Kopien dieser Seite sind nur f&uuml;r den privaten, nicht
        kommerziellen Gebrauch gestattet.
      </p>
      <p className="mt-4 leading-relaxed text-neutral-400">
        Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden,
        werden die Urheberrechte Dritter beachtet. Insbesondere werden Inhalte
        Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine
        Urheberrechtsverletzung aufmerksam werden, bitten wir um einen
        entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden
        wir derartige Inhalte umgehend entfernen.
      </p>
      <p className="mt-4 text-sm text-neutral-600">
        Quelle:{" "}
        <a
          href="https://www.e-recht24.de"
          className="text-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          eRecht24
        </a>
      </p>

      <nav className="mt-16 border-t border-neutral-800/60 pt-8" aria-label="Back navigation">
        <Link href="/" className="link font-mono text-sm" aria-label="Back to home page">
          &larr; Back
        </Link>
      </nav>
    </main>
  );
}
