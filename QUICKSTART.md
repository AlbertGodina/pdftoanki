# 🚀 Inici Ràpid - PDF a Anki

## Opció 1: Utilitzar directament (més ràpid)

1. Descomprimeix l'arxiu `pdf-to-anki-ca.zip`
2. Obre el fitxer `index.html` amb el teu navegador
3. Introdueix la teva API key d'Anthropic
4. Carrega un PDF i genera flashcards!

⚠️ **Nota**: Algunes funcionalitats poden no funcionar correctament si obres l'arxiu localment (per limitacions de seguretat del navegador). Per una experiència completa, segueix l'Opció 2 o 3.

## Opció 2: Servidor local (recomanat)

### Amb Python (si el tens instal·lat):
```bash
cd pdf-to-anki-ca
python -m http.server 8000
```
Després obre: http://localhost:8000

### Amb Node.js (si el tens instal·lat):
```bash
cd pdf-to-anki-ca
npx serve
```
Després obre l'URL que et mostri (normalment http://localhost:3000)

## Opció 3: Publicar a GitHub Pages (permanent)

Segueix la guia completa a `GITHUB_PAGES.md`

### Resum ràpid:
```bash
cd pdf-to-anki-ca
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/[usuari]/pdf-to-anki-ca.git
git push -u origin main
```

Després activa GitHub Pages a Settings → Pages del repositori.

## 🔑 Obtenir una API Key de Google Gemini (GRATUÏTA!)

1. Ves a https://aistudio.google.com/app/apikey
2. Inicia sessió amb el teu compte de Google
3. Fes clic a "Create API Key"
4. Selecciona un projecte o crea'n un de nou
5. Copia la clau (comença amb `AIza...`)
6. Enganxa-la a l'aplicació

💰 **És 100% GRATUÏT!** Google ofereix:
- 1,500 peticions al dia
- 1 milló de tokens al dia
- Suficient per processar molts PDFs sense cost

## 📱 Primer ús de l'aplicació

1. **Introdueix l'API key**: Només cal fer-ho un cop
2. **Carrega un PDF**: Arrossega'l o selecciona'l
3. **Tria les opcions**:
   - Tipus de flashcards (Q&A, cloze, etc.)
   - Nombre de flashcards (recomanat: 20-30)
4. **Genera**: Fes clic a "Generar Flashcards"
5. **Revisa**: Comprova les flashcards generades
6. **Descarrega**: Baixa l'arxiu .apkg
7. **Importa a Anki**: Obre Anki → Arxiu → Importar

## 🆘 Problemes comuns

### "API key no vàlida"
- Verifica que comenci amb `AIza`
- Comprova que l'API key estigui activa a Google AI Studio
- Assegura't que no hagis superat la quota diària (molt difícil amb la quota gratuïta)

### "No s'extreu text del PDF"
- Assegura't que sigui un PDF amb text (no escanejat)
- Prova amb un PDF més petit

### "Error de CORS"
- Utilitza un servidor local (Opció 2) en lloc d'obrir l'arxiu directament

### L'aplicació no carrega
- Comprova la consola del navegador (F12)
- Assegura't que tens connexió a internet
- Prova amb un altre navegador

## 📚 Recursos addicionals

- **Documentació tècnica**: Llegeix `DOCS.md`
- **Exemples d'ús**: Consulta `EXAMPLES.md`
- **Contribuir**: Veure `CONTRIBUTING.md`
- **Issues/Bugs**: Obre un issue a GitHub

## 💡 Consells

✅ **Millors resultats amb**:
- PDFs amb text ben estructurat
- Documents de 5-20 pàgines
- 20-30 flashcards per generació
- Varietat de tipus de flashcards

❌ **Evita**:
- PDFs escanejats sense OCR
- Documents molt llargs (>50 pàgines) d'una vegada
- Massa flashcards (>50) en una sola generació

## 🎯 Següents passos

1. Prova amb un PDF senzill primer
2. Experimenta amb diferents opcions
3. Importa les flashcards a Anki
4. Comença a estudiar!
5. Comparteix l'eina amb altres estudiants

---

**Tens preguntes?** Obre un issue a GitHub!
**T'ha agradat?** Deixa una estrella ⭐ al repositori!
