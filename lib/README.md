# Offline-Drittlibs für gf-tool

Bei der Erstinstallation müssen die folgenden JavaScript-Bibliotheken einmal manuell in diesen Ordner kopiert werden. Sie werden danach offline mit dem Tool ausgeliefert — keine Internet-Abrufe im laufenden Betrieb.

## Benötigte Dateien

| Datei | Version | Quelle |
|---|---|---|
| `jspdf.umd.min.js` | aus VG-Tool kopiert | (bereits enthalten) |
| `pdf.min.js` | pdf.js 3.11.174 | https://github.com/mozilla/pdf.js/releases/tag/v3.11.174 |
| `pdf.worker.min.js` | pdf.js 3.11.174 | (im gleichen Release-Asset enthalten) |
| `fflate.min.js` | fflate 0.8.2 | https://github.com/101arendt/fflate/releases/tag/v0.8.2 (UMD-Build) |

## Empfohlener Bezug

1. Lade das offizielle pdf.js-Release-Archiv `pdfjs-3.11.174-legacy-dist.zip` von der GitHub-Releases-Seite des Mozilla-pdf.js-Repos
2. Entpacke und kopiere `build/pdf.min.js` + `build/pdf.worker.min.js` hier hin
3. Lade fflate UMD-Bundle aus dem GitHub-Release oder via `npm pack fflate@0.8.2` und kopiere `umd/index.js` hier als `fflate.min.js` hin

## Integritäts-Prüfung

Nach dem Kopieren sind in der Datei `tools/lib-hashes.json` (folgt) die erwarteten SHA-256-Summen hinterlegt — das Tool prüft sie beim Start in einer Debug-Konsolenausgabe und warnt bei Abweichung.

## Was NICHT geht

- Kein automatischer Download aus dem Tool heraus (Datenschutz, Behörden-Netz)
- Keine Verwendung anderer Versionen ohne Anpassung der Tests
