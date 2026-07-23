# Refertrack — sito beta

Pagina che annuncia la beta pubblica di [Refertrack](https://github.com/matteolubinu/refertrack-ios), app per tracciare l'andamento degli esami del sangue nel tempo (iPhone).

Sito statico (HTML/CSS/JS, nessuna dipendenza) pubblicato con GitHub Pages.

## Prima di andare live

Incolla il link pubblico TestFlight in cima a `script.js` (`TESTFLIGHT_URL`). Finché resta `"#"` i bottoni "Scarica la beta" sono visibilmente disattivi (e lo dicono se toccati).

Il link pubblico si crea su App Store Connect → l'app → TestFlight → gruppo di test pubblico → "Link pubblico".

## Struttura
- `index.html` — pagina unica
- `styles.css` — design system (token colori/tipografia dell'app)
- `script.js` — link TestFlight, tema, reveal in scroll, menu mobile, accordion FAQ
- `assets/screens/` — screenshot dell'app (dati demo, nessun dato reale)

## Sviluppo locale
```bash
python3 -m http.server 8000
# poi apri http://localhost:8000
```
