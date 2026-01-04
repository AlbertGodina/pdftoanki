# Changelog

Tots els canvis notables d'aquest projecte es documentaran en aquest arxiu.

El format està basat en [Keep a Changelog](https://keepachangelog.com/ca/1.0.0/),
i aquest projecte segueix [Semantic Versioning](https://semver.org/lang/ca/).

## [1.1.0] - 2026-01-05

### Canviat
- **MAJOR**: Migració de Anthropic Claude a Google Gemini Flash 2.0
- L'aplicació ara és 100% GRATUÏTA amb la quota gratuïta de Google Gemini
- Quota diària: 1,500 peticions i 1 milió de tokens (sense cost)
- Millor velocitat de resposta amb Gemini Flash
- Límit de text processat ajustat a 30,000 caràcters
- Màxim de tokens de sortida augmentat a 8,000

### Actualitzat
- Tota la documentació per reflectir l'ús de Google Gemini
- Instruccions per obtenir API key gratuïta de Google
- Validació d'API key per format de Google (comença amb `AIza`)
- Missatges d'error més clars per problemes amb l'API

## [1.0.0] - 2026-01-05

### Afegit
- Interfície web completa en català
- Càrrega de PDFs amb drag & drop
- Extracció automàtica de text amb PDF.js
- Integració amb l'API de Claude (Sonnet 4)
- Generació intel·ligent de flashcards amb IA
- Suport per múltiples tipus de flashcards:
  - Preguntes i respostes (Q&A)
  - Cloze deletions
  - Definicions de conceptes
  - Llistes i enumeracions
- Previsualització de flashcards abans d'exportar
- Exportació a format .apkg compatible amb Anki
- Emmagatzematge local de l'API key
- Sistema de validació d'arxius (tipus i mida)
- Barra de progrés durant la generació
- Interfície responsive per mòbils
- Documentació completa:
  - README.md amb instruccions
  - DOCS.md amb documentació tècnica
  - EXAMPLES.md amb exemples d'ús
  - CONTRIBUTING.md per col·laboradors
  - GITHUB_PAGES.md per publicar l'app
  - CHANGELOG.md (aquest arxiu)
- Llicència MIT
- .gitignore configurat
- package.json amb metadata
- Mockup SVG de l'aplicació

### Seguretat
- L'API key es guarda només localment al navegador
- Validació de format d'API key
- Límit de mida d'arxius (10 MB)
- No s'envien dades a servidors externs (excepte Anthropic)

## [Unreleased]

### Planificat per futures versions

#### [1.1.0] - Millores d'usabilitat
- [ ] Edició manual de flashcards abans d'exportar
- [ ] Opció per eliminar flashcards individuals
- [ ] Previsualització més detallada amb format Anki
- [ ] Exportació a altres formats (CSV, JSON)
- [ ] Històric de PDFs processats
- [ ] Estadístiques d'ús

#### [1.2.0] - Funcionalitats avançades
- [ ] Suport per OCR (PDFs escanejats)
- [ ] Extracció i inclusió d'imatges del PDF
- [ ] Generació de flashcards amb imatges
- [ ] Suport per múltiples PDFs simultanis
- [ ] Fusió de mazells d'Anki
- [ ] Etiquetes automàtiques per temàtica

#### [1.3.0] - Millores tècniques
- [ ] Processament en segon pla (Web Workers)
- [ ] Cache de resultats per PDFs processats
- [ ] Compressió d'arxius .apkg
- [ ] Mode offline amb models locals
- [ ] Millor gestió d'errors amb retry automàtic
- [ ] Telemetria opcional per millorar l'app

#### [2.0.0] - Expansió
- [ ] Suport per DOCX i PPTX
- [ ] Mode col·laboratiu (compartir mazells)
- [ ] Integració directa amb AnkiWeb
- [ ] Aplicació mòbil (iOS/Android)
- [ ] Personalització de templates d'Anki
- [ ] IA per revisar qualitat de flashcards
- [ ] Multiidioma (espanyol, anglès, francès)

## Notes de versions

### Sobre [1.0.0]

Primera versió pública de l'aplicació. Inclou totes les funcionalitats bàsiques necessàries per convertir PDFs en flashcards d'Anki de forma efectiva.

**Limitacions conegudes**:
- No funciona amb PDFs escanejats (només text extractable)
- Les imatges del PDF no s'inclouen a les flashcards
- Límit de 10 MB per arxiu
- No es pot editar abans d'exportar
- Format .apkg simplificat (pot no incloure totes les features d'Anki)

**Requeriments tècnics**:
- Navegador modern (Chrome 90+, Firefox 88+, Safari 14+, Edge 90+)
- JavaScript activat
- API key d'Anthropic amb crèdits disponibles
- Connexió a internet

---

## Com contribuir al CHANGELOG

Quan afegeixis funcionalitats o facis canvis significatius:

1. Afegeix una entrada a la secció [Unreleased]
2. Utilitza aquestes categories:
   - **Afegit**: per noves funcionalitats
   - **Canviat**: per canvis en funcionalitats existents
   - **Deprecated**: per funcionalitats que s'eliminaran
   - **Eliminat**: per funcionalitats eliminades
   - **Corregit**: per bugs corregits
   - **Seguretat**: per vulnerabilitats corregides

3. Quan es publiqui una nova versió, mou els canvis d'[Unreleased] a una nova secció amb la versió i data

### Exemple:
```markdown
## [Unreleased]

### Afegit
- Nova funcionalitat X

### Corregit
- Bug en la funcionalitat Y

## [1.1.0] - 2026-02-15

### Afegit
- Funcionalitat X implementada

### Corregit
- Bug Y solucionat
```
