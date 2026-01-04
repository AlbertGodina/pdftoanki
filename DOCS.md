# Documentació Tècnica

## Arquitectura del Projecte

### Estructura d'Arxius

```
pdf-to-anki-ca/
├── index.html          # Interfície principal
├── styles.css          # Estils de l'aplicació
├── app.js              # Lògica principal
├── README.md           # Documentació
├── LICENSE             # Llicència MIT
├── CONTRIBUTING.md     # Guia per contribuir
└── .gitignore          # Arxius a ignorar per Git
```

### Flux de Treball

1. **Configuració API**
   - L'usuari introdueix la seva API key d'Anthropic
   - Es guarda al localStorage del navegador
   - Validació bàsica del format

2. **Càrrega de PDF**
   - Drag & drop o selecció manual
   - Validació de tipus i mida (màx 10MB)
   - Extracció de text amb PDF.js

3. **Generació de Flashcards**
   - Selecció d'opcions (tipus de flashcards, quantitat)
   - Crida a l'API de Claude
   - Anàlisi del contingut i generació de flashcards

4. **Previsualització**
   - Mostra de les flashcards generades
   - Diferenciació per tipus (Q&A, cloze, definicions, etc.)

5. **Exportació**
   - Creació d'arxiu .apkg
   - Format compatible amb Anki
   - Descàrrega automàtica

## Components Principals

### 1. Gestió de l'API Key

```javascript
// Guardar API key
localStorage.setItem('anthropic_api_key', key);

// Recuperar API key
const savedKey = localStorage.getItem('anthropic_api_key');
```

### 2. Extracció de Text del PDF

```javascript
async function extractTextFromPDF(file) {
    const arrayBuffer = await file.arrayBuffer();
    const pdf = await pdfjsLib.getDocument({ data: arrayBuffer }).promise;
    // Itera sobre totes les pàgines
    // Extreu el text de cada pàgina
    // Retorna el text complet
}
```

### 3. Crida a l'API de Google Gemini

```javascript
const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash-exp:generateContent?key=${apiKey}`, {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify({
        contents: [{
            parts: [{
                text: prompt
            }]
        }],
        generationConfig: {
            temperature: 0.7,
            maxOutputTokens: 8000,
        }
    })
});
```

### 4. Creació d'Arxiu .apkg

Format Anki (.apkg):
- És un arxiu ZIP que conté:
  - `collection.anki21`: Base de dades SQLite
  - `media`: JSON amb arxius multimèdia (buit en aquest cas)

```javascript
const zip = new JSZip();
zip.file('collection.anki21', sqliteData);
zip.file('media', '{}');
const blob = await zip.generateAsync({ type: 'blob' });
```

## Llibreries Utilitzades

### PDF.js (v3.11.174)
- **Propòsit**: Extreure text de documents PDF
- **CDN**: `cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/`
- **Funcions clau**:
  - `getDocument()`: Carrega el PDF
  - `getPage()`: Obté una pàgina específica
  - `getTextContent()`: Extreu el text

### JSZip (v3.10.1)
- **Propòsit**: Crear arxius ZIP (format .apkg)
- **CDN**: `cdnjs.cloudflare.com/ajax/libs/jszip/3.10.1/`
- **Funcions clau**:
  - `file()`: Afegeix arxius al ZIP
  - `generateAsync()`: Genera el blob del ZIP

### API de Google Gemini
- **Model**: Gemini Flash 2.0 Experimental
- **Endpoint**: `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash-exp:generateContent`
- **Cost**: **GRATUÏT** (1,500 peticions/dia, 1M tokens/dia)
- **Màxim tokens**: 8000 per resposta

## Format de les Flashcards

### Estructura JSON

```json
{
  "cards": [
    {
      "type": "basic|cloze|definition|list",
      "front": "Pregunta o text amb buit",
      "back": "Resposta o explicació"
    }
  ]
}
```

### Tipus de Flashcards

1. **Basic (Q&A)**
   ```
   Front: Què és la fotosíntesi?
   Back: Procés pel qual les plantes converteixen llum en energia química.
   ```

2. **Cloze Deletion**
   ```
   Front: La {{c1::fotosíntesi}} és el procés de producció d'energia.
   Back: (Anki omple automàticament el buit)
   ```

3. **Definition**
   ```
   Front: Fotosíntesi
   Back: Procés biològic que converteix energia lumínica en energia química.
   ```

4. **List**
   ```
   Front: Enumera les fases de la fotosíntesi
   Back: 1. Fase lumínica, 2. Cicle de Calvin
   ```

## Format SQLite d'Anki

L'arxiu `collection.anki21` conté aquestes taules principals:

- **col**: Configuració de la col·lecció
- **notes**: Contingut de les flashcards
- **cards**: Metadades de cada carta (estat de repàs, etc.)

## Seguretat i Privacitat

- L'API key **mai** es transmet a servidors externs (excepte Anthropic)
- Es guarda únicament al localStorage del navegador
- El processament del PDF es fa localment
- Les dades mai es pugen a cap servidor propi

## Limitacions Conegudes

1. **Mida màxima de PDF**: 10 MB
2. **Text extractable**: El PDF ha de contenir text (no només imatges)
3. **Idioma**: Optimitzat per català i espanyol
4. **Format .apkg**: Implementació simplificada (pot no incloure totes les features d'Anki)
5. **Quota API**: Límit de 1,500 peticions/dia (més que suficient per ús normal)

## Millores Futures

- [ ] Suport per OCR (PDFs escanejats)
- [ ] Generació de flashcards amb imatges
- [ ] Més tipus de flashcards (multiple choice, etc.)
- [ ] Edició manual de flashcards abans d'exportar
- [ ] Suport per altres formats (DOCX, PPTX)
- [ ] Mode offline amb models locals
- [ ] Exportació a altres formats (CSV, JSON)
- [ ] Estadístiques d'ús

## Resolució de Problemes

### L'API key no funciona
- Verifica que comenci amb `AIza`
- Comprova que l'API key estigui activa a Google AI Studio
- Assegura't que no hagis superat la quota diària (1,500 peticions)

### No s'extreu text del PDF
- Assegura't que el PDF contingui text (no només imatges)
- Prova amb un PDF més petit

### Error generant flashcards
- El text pot ser massa llarg (límit ~30.000 caràcters)
- Intenta amb menys flashcards o un PDF més curt
- Comprova la connexió a internet

### L'arxiu .apkg no s'importa a Anki
- Comprova la versió d'Anki (compatible amb 2.1+)
- Verifica que l'arxiu s'hagi descarregat correctament

## Contribuir al Desenvolupament

Consulta [CONTRIBUTING.md](CONTRIBUTING.md) per més informació.
