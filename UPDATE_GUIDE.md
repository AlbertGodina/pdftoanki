# 🎉 Actualització a Google Gemini (GRATUÏT!)

## Què ha canviat?

L'aplicació ara utilitza **Google Gemini Flash 2.0** en lloc d'Anthropic Claude. Això significa:

✅ **100% GRATUÏT** - No cal targeta de crèdit  
✅ **1,500 peticions al dia** gratis  
✅ **1 milió de tokens al dia** gratis  
✅ **Més ràpid** que Claude  
✅ **Excel·lent qualitat** en la generació de flashcards  

## Com actualitzar el teu repositori GitHub

### Opció 1: Amb Git (recomanat)

Si ja tens el repositori clonat:

```bash
# Navega al directori del projecte
cd pdf-to-anki-ca

# Reemplaça tots els arxius amb els nous
# (descarrega i descomprimeix el ZIP primer, després:)
cp -r /ruta/al/nou/pdf-to-anki-ca/* .

# Afegeix els canvis
git add .

# Fes commit
git commit -m "Actualització v1.1.0: Migració a Google Gemini (gratuït)"

# Puja els canvis
git push origin main
```

### Opció 2: Des de la web de GitHub

1. Ves al teu repositori a GitHub
2. Per cada arxiu modificat:
   - Fes clic a l'arxiu
   - Fes clic a l'icona del llàpis (Edit)
   - Copia i enganxa el contingut nou
   - Fes "Commit changes"

**Arxius que han canviat:**
- `index.html` - Interfície actualitzada
- `app.js` - Nova integració amb Gemini
- `README.md` - Documentació actualitzada
- `QUICKSTART.md` - Noves instruccions
- `DOCS.md` - Documentació tècnica
- `CHANGELOG.md` - Historial de versions
- `package.json` - Metadata

### Opció 3: Des de zero

Si prefereixes començar de nou:

```bash
# Elimina el repositori antic (opcional)
rm -rf pdf-to-anki-ca

# Descomprimeix el nou ZIP
unzip pdf-to-anki-ca.zip
cd pdf-to-anki-ca

# Inicialitza Git
git init
git add .
git commit -m "v1.1.0: Aplicació amb Google Gemini gratuït"

# Connecta amb GitHub
git remote add origin https://github.com/[usuari]/pdf-to-anki-ca.git
git branch -M main
git push -u origin main --force
```

## 🔑 Nova API Key necessària

⚠️ **IMPORTANT**: Ara necessites una API key de **Google Gemini** en lloc d'Anthropic.

### Com obtenir-la (GRATUÏT):

1. Ves a: https://aistudio.google.com/app/apikey
2. Inicia sessió amb el teu compte de Google
3. Fes clic a "Create API Key"
4. Copia la clau (comença amb `AIza...`)
5. Enganxa-la a l'aplicació

**No necessites targeta de crèdit!** 🎉

## Verificar que funciona

1. Espera uns minuts després de fer push
2. Visita: `https://[usuari].github.io/pdf-to-anki-ca/`
3. Hauries de veure el nou formulari que demana "API Key de Google Gemini"
4. Introdueix la teva API key gratuïta
5. Prova amb un PDF!

## Beneficis de la migració

| Característica | Anthropic Claude | Google Gemini |
|----------------|------------------|---------------|
| **Cost** | $0.01-0.05 per PDF | **GRATUÏT** |
| **Quota diària** | Depèn de crèdits | 1,500 peticions |
| **Velocitat** | Ràpid | Més ràpid |
| **Qualitat** | Excel·lent | Excel·lent |
| **Setup** | Targeta crèdit | Només compte Google |

## Problemes?

### "L'aplicació encara demana API key d'Anthropic"
- Neteja la cache del navegador (Ctrl+Shift+R)
- Espera uns minuts més després del push
- Verifica que els arxius s'hagin pujat correctament

### "API key no vàlida"
- Assegura't que comenci amb `AIza`
- Verifica que l'hagis copiat completament
- Prova de crear una nova API key

### Els canvis no es veuen
- GitHub Pages pot trigar 5-10 minuts en actualitzar
- Neteja la cache del navegador
- Prova en una finestra d'incògnit

## Preguntes Freqüents

**P: Necessito eliminar la meva API key d'Anthropic?**  
R: No, però ja no es farà servir. Pots eliminar-la de l'aplicació si vols.

**P: Les flashcards seran de la mateixa qualitat?**  
R: Sí! Gemini Flash 2.0 genera flashcards d'excel·lent qualitat, sovint comparables o millors que Claude.

**P: Hi ha algun límit d'ús?**  
R: Sí, 1,500 peticions al dia, però això és més que suficient per processar desenes de PDFs diàriament.

**P: Puc seguir usant Claude si vull?**  
R: Teòricament sí, però hauries de mantenir la versió antiga. La nova versió està optimitzada per Gemini.

---

**Gaudeix de la teva aplicació totalment gratuïta!** 🎓✨
