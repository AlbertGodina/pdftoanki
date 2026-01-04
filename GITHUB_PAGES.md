# Guia per Publicar a GitHub Pages

## Pas 1: Crear el Repositori a GitHub

1. Ves a [github.com](https://github.com) i inicia sessió
2. Fes clic a "New repository" (botó verd)
3. Omple els camps:
   - **Repository name**: `pdf-to-anki-ca`
   - **Description**: "Converteix PDFs en flashcards d'Anki amb IA"
   - **Public** (per poder usar GitHub Pages gratuïtament)
   - ❌ NO marquis "Add a README file" (ja el tenim)
4. Fes clic a "Create repository"

## Pas 2: Pujar el Codi al Repositori

Obre una terminal i executa aquestes comandes:

```bash
# Navega al directori del projecte
cd pdf-to-anki-ca

# Inicialitza el repositori Git
git init

# Afegeix tots els arxius
git add .

# Fes el primer commit
git commit -m "Initial commit: Aplicació PDF a Anki en català"

# Connecta amb el repositori remot (canvia [el-teu-usuari] pel teu nom d'usuari)
git remote add origin https://github.com/[el-teu-usuari]/pdf-to-anki-ca.git

# Puja els arxius
git branch -M main
git push -u origin main
```

## Pas 3: Activar GitHub Pages

1. Al teu repositori a GitHub, fes clic a **Settings** (configuració)
2. Al menú lateral esquerre, fes clic a **Pages**
3. A la secció "Build and deployment":
   - **Source**: Selecciona "Deploy from a branch"
   - **Branch**: Selecciona "main" i "/ (root)"
   - Fes clic a **Save**
4. Espera uns minuts (normalment 2-5 minuts)
5. Refresca la pàgina i veuràs un missatge:
   "Your site is live at https://[el-teu-usuari].github.io/pdf-to-anki-ca/"

## Pas 4: Verifica que Funciona

1. Obre l'URL: `https://[el-teu-usuari].github.io/pdf-to-anki-ca/`
2. Hauries de veure l'aplicació funcionant!
3. Prova-la amb un PDF per assegurar-te que tot funciona correctament

## Actualitzar l'Aplicació

Quan facis canvis al codi, actualitza el repositori:

```bash
# Afegeix els canvis
git add .

# Fes commit
git commit -m "Descripció dels canvis"

# Puja els canvis
git push
```

GitHub Pages s'actualitzarà automàticament en pocs minuts.

## Solució de Problemes

### El lloc no es carrega
- Espera uns minuts més (pot trigar fins a 10 minuts la primera vegada)
- Verifica que la branca sigui "main" a la configuració de Pages
- Comprova que l'arxiu `index.html` estigui a l'arrel del repositori

### Error 404
- Assegura't que l'URL sigui correcta: `https://[usuari].github.io/[nom-repo]/`
- Verifica que el repositori sigui públic
- Comprova que GitHub Pages estigui activat a Settings → Pages

### Els canvis no es veuen
- Neteja la cache del navegador (Ctrl+Shift+R o Cmd+Shift+R)
- Espera uns minuts després de fer push
- Verifica que el commit s'hagi pujat correctament a GitHub

## Domini Personalitzat (Opcional)

Si vols utilitzar un domini propi (ex: `ankipdf.cat`):

1. Compra el domini
2. A GitHub Pages settings, afegeix el domini personalitzat
3. Configura els registres DNS al teu proveïdor:
   ```
   Type: CNAME
   Name: www
   Value: [el-teu-usuari].github.io
   ```
4. Espera que es propaguin els canvis DNS (pot trigar 24-48h)

## Estadístiques d'Ús (Opcional)

Per afegir Google Analytics:

1. Crea un compte a [analytics.google.com](https://analytics.google.com)
2. Obté el teu ID de seguiment
3. Afegeix aquest codi abans de `</head>` a `index.html`:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

## Compartir l'Aplicació

Un cop publicada, pots compartir-la de diverses maneres:

### Al README
L'URL ja està al README.md, només cal actualitzar `[el-teu-usuari]` amb el teu nom d'usuari real.

### Xarxes socials
```
🎓 Nova eina per estudiar!

Converteix PDFs en flashcards d'Anki automàticament amb IA 🤖

✅ 100% en català
✅ Gratuït i open source
✅ Genera flashcards intel·ligents

Prova-la: https://[usuari].github.io/pdf-to-anki-ca/
```

### Comunitats
- Reddit: r/Anki, r/Catalunya, r/languagelearning
- Fòrums d'estudiants
- Grups de Telegram/WhatsApp
- Discord d'estudiants

## Badge per al README

Afegeix aquest badge al README per mostrar l'estat de GitHub Pages:

```markdown
[![GitHub Pages](https://img.shields.io/badge/demo-live-brightgreen)](https://[usuari].github.io/pdf-to-anki-ca/)
```

Resultat: ![GitHub Pages](https://img.shields.io/badge/demo-live-brightgreen)

---

**Nota**: Canvia sempre `[el-teu-usuari]` pel teu nom d'usuari real de GitHub!
