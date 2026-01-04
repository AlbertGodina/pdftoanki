# PDF a Anki - Generador de Flashcards amb IA

Una aplicació web que converteix documents PDF en flashcards d'Anki automàticament utilitzant intel·ligència artificial.

## 🌟 Característiques

- 📄 **Importació de PDFs**: Carrega qualsevol document PDF
- 🤖 **Generació automàtica amb IA**: Utilitza Google Gemini (gratuït!) per extreure conceptes clau
- 🎯 **Flashcards intel·ligents**: Crea preguntes i respostes, cloze deletions i més
- 📦 **Export a Anki**: Genera arxius .apkg listos per importar
- 🇨🇦 **Interfície en català**: Totalment localitzada
- 💰 **100% GRATUÏT**: Utilitza l'API gratuïta de Google Gemini

## 🚀 Com utilitzar-ho

### Opció 1: Utilitzar online (GitHub Pages)

1. Visita la pàgina web: `https://[el-teu-usuari].github.io/pdf-to-anki-ca/`
2. Obté una API key gratuïta de Google Gemini: https://aistudio.google.com/app/apikey
3. Introdueix la teva API key
4. Carrega un PDF
5. Genera les flashcards
6. Descarrega l'arxiu .apkg

### Opció 2: Executar localment

```bash
# Clona el repositori
git clone https://github.com/[el-teu-usuari]/pdf-to-anki-ca.git
cd pdf-to-anki-ca

# Obre l'aplicació
# Opció A: Amb Python
python -m http.server 8000

# Opció B: Amb Node.js
npx serve

# Visita http://localhost:8000
```

## 🔑 Configuració de l'API Key (Gratuïta!)

Necessitaràs una API key de Google Gemini (100% gratuïta):

1. Visita [Google AI Studio](https://aistudio.google.com/app/apikey)
2. Inicia sessió amb el teu compte de Google
3. Fes clic a "Create API Key"
4. Copia la clau (comença amb `AIza...`)
5. Introdueix-la a l'aplicació (es guarda localment al navegador)

**Nota**: L'API key mai es comparteix amb cap servidor extern, només s'utilitza directament des del teu navegador cap a Google.

### 💰 És realment gratuït?

**Sí!** Google Gemini ofereix una quota gratuïta molt generosa:
- 1,500 peticions al dia (gratuït)
- 1 milió de tokens al dia
- Suficient per processar desenes de PDFs diàriament

## 📋 Requisits

- Navegador web modern (Chrome, Firefox, Safari, Edge)
- API key de Google Gemini (gratuïta)
- Connexió a internet

## 🛠️ Tecnologies utilitzades

- HTML5 + CSS3 + JavaScript (Vanilla)
- [PDF.js](https://mozilla.github.io/pdf.js/) - Extracció de text dels PDFs
- [JSZip](https://stuvjs.github.io/jszip/) - Creació d'arxius .apkg
- API de Google Gemini Flash 2.0 - Generació intel·ligent de flashcards (gratuïta)

## 📖 Com funciona

1. **Extracció**: PDF.js extreu el text del document
2. **Anàlisi**: Claude analitza el contingut i identifica conceptes clau
3. **Generació**: Es creen flashcards amb diferents formats (Q&A, cloze, etc.)
4. **Exportació**: Es genera un arxiu .apkg compatible amb Anki

## 🎨 Tipus de flashcards

- **Pregunta/Resposta**: Preguntes directes amb respostes
- **Cloze Deletion**: Text amb buits per omplir
- **Definicions**: Conceptes i les seves definicions
- **Llistes**: Enumeracions i classificacions

## 🤝 Contribuir

Les contribucions són benvingudes! Si vols millorar el projecte:

1. Fes un fork del repositori
2. Crea una branca per la teva feature (`git checkout -b feature/millora`)
3. Commit els teus canvis (`git commit -am 'Afegeix nova funcionalitat'`)
4. Push a la branca (`git push origin feature/millora`)
5. Obre un Pull Request

## 📝 Llicència

Aquest projecte està sota la llicència MIT. Consulta l'arxiu [LICENSE](LICENSE) per més detalls.

## ⚠️ Avís legal

Aquest és un projecte independent i no està afiliat amb Anki o Google. Utilitza les seves APIs i formats de forma respectuosa amb els seus termes de servei.

## 📧 Contacte

Si tens preguntes o suggeriments, obre un issue al repositori!

---

Fet amb ❤️ per la comunitat d'estudiants catalans
