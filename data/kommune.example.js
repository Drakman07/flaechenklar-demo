/* =====================================================================
 * data/kommune.example.js — Stammdaten der Kommune(n)  [DEMO-Vorlage]
 * ---------------------------------------------------------------------
 * Neutrale Muster-Vorlage fuer die oeffentliche Browser-Demo. Kopiere
 * diese Datei zu data/kommune.js und passe die Werte an — ODER, bequemer:
 * erzeuge sie direkt im Tool ueber den Knopf "Stammdaten-Datei erzeugen"
 * (Anschrift, Wappen, Sachbearbeiter selbst pflegen; auch mehrere
 * Gemeinden fuer eine Verwaltungsgemeinschaft).
 *
 * Wird als Vorbelegung fuer neue Projekte, im Aufmassprotokoll-Deckblatt
 * und im Beitragsbescheid-Briefkopf verwendet.
 *
 * KEINE Bauherr- oder Bauantrags-Daten — nur Behoerden-Eigendaten,
 * DSGVO-unkritisch.
 * ===================================================================== */

// -- Empfohlene Mehr-Profil-Form (Verwaltungsgemeinschaft-faehig) --------
// GF.kommune.* normalisiert beides; ein spaeter geoeffnetes Projekt friert
// die gewaehlte Gemeinde ein (Schema v5), bleibt also korrekt.
window.GF_KOMMUNE = {
  schemaVersion: 2,
  defaultProfilId: 'p-muster',
  profile: [
    {
      id: 'p-muster',                    // stabile, namensunabhaengige ID
      name: 'Mustergemeinde',
      anschrift: { strasse: 'Musterstrasse 1', plz: '12345', ort: 'Musterhausen' },
      bundesland: 'Bayern',
      // Wappen als eingebettete Base64-DataURL (der "Stammdaten"-Dialog erzeugt sie).
      // Leer lassen, wenn kein Wappen gedruckt werden soll.
      wappen: null,
      defaultSachbearbeiter: '',
      // Telefon/E-Mail des Sachbearbeiters -- werden im Bescheid rechts oben
      // im Briefkopf abgedruckt (Ansprechpartner-Block). Optional.
      defaultSachbearbeiterTelefon: '',
      defaultSachbearbeiterEmail: '',
      // Amtsbezeichnung fuer die Unterschriftszeile des Beitragsbescheids
      // (z. B. "Kämmerer", "Leiter des Bauamts"). Optional, leer = Fallback
      // "Sachbearbeiter/in".
      defaultUnterschriftAmtsbezeichnung: ''
      // Optional (nur mit Beitragsbescheid-Modul): dauerhafte Saetze je Gemeinde.
      // Werden beim Erstellen eines Bescheids automatisch vorbefuellt. Am besten
      // ueber den "Stammdaten"-Dialog pflegen (Abschnitt "Beitragsbescheid-Saetze").
      // bescheid: {
      //   wasserversorgung: { satzungName: 'BGS-WAS vom ...', satzungVom: '2020-01-01',
      //                       beitragssatzGrundstueckProQM: 3.50, beitragssatzGeschossflaecheProQM: 12.00 },
      //   entwaesserung:    { satzungName: 'BGS-EWS vom ...', satzungVom: '2020-01-01',
      //                       beitragssatzGrundstueckProQM: 4.20, beitragssatzGeschossflaecheProQM: 14.00 }
      // }
    }
    // Weitere Gemeinden derselben Verwaltungsgemeinschaft hier ergaenzen.
  ]
};

// -- Alt-Einzelform (weiterhin gueltig) ----------------------------------
// window.GF_KOMMUNE = {
//   name: 'Mustergemeinde',
//   anschrift: { strasse: 'Musterstrasse 1', plz: '12345', ort: 'Musterhausen' },
//   bundesland: 'Bayern',
//   wappenPfad: 'data/wappen.jpg',   // Dateipfad statt eingebettetem Wappen
//   defaultSachbearbeiter: ''
// };
