# PDF a Anki - Generador de Flashcards amb IA

Una aplicació web que converteix documents PDF en flashcards d'Anki automàticament utilitzant intel·ligència artificial.

## 🌟 Característiques

- 📄 **Importació de PDFs**: Carrega qualsevol document PDF
- 🤖 **Generació automàtica amb IA**: Utilitza Claude per extreure conceptes clau
- 🎯 **Flashcards intel·ligents**: Crea preguntes i respostes, cloze deletions i més
- 📦 **Export a Anki**: Genera arxius .apkg listos per importar
- 🇨🇦 **Interfície en català**: Totalment localitzada

## 🚀 Com utilitzar-ho

### Opció 1: Utilitzar online (GitHub Pages)

1. Visita la pàgina web: `https://[el-teu-usuari].github.io/pdf-to-anki-ca/`
2. Introdueix la teva API key d'Anthropic
3. Carrega un PDF
4. Genera les flashcards
5. Descarrega l'arxiu .apkg

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

## 🔑 Configuració de l'API Key

Necessitaràs una API key d'Anthropic:

1. Crea un compte a [console.anthropic.com](https://console.anthropic.com)
2. Genera una API key
3. Introdueix-la a l'aplicació (es guarda localment al navegador)

**Nota**: L'API key mai es comparteix amb cap servidor extern, només s'utilitza directament des del teu navegador cap a Anthropic.

## 📋 Requisits

- Navegador web modern (Chrome, Firefox, Safari, Edge)
- API key d'Anthropic
- Connexió a internet

## 🛠️ Tecnologies utilitzades

- HTML5 + CSS3 + JavaScript (Vanilla)
- [PDF.js](https://mozilla.github.io/pdf.js/) - Extracció de text dels PDFs
- [JSZip](https://stuvjs.github.io/jszip/) - Creació d'arxius .apkg
- API d'Anthropic Claude - Generació intel·ligent de flashcards

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

Aquest és un projecte independent i no està afiliat amb Anki o Anthropic. Utilitza les seves APIs i formats de forma respectuosa amb els seus termes de servei.

## 📧 Contacte

Si tens preguntes o suggeriments, obre un issue al repositori!

---

Fet amb ❤️ per la comunitat d'estudiants catalans
