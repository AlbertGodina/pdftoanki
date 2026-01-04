// Configuració de PDF.js
pdfjsLib.GlobalWorkerOptions.workerSrc = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js';

// Variables globals
let apiKey = '';
let pdfText = '';
let pdfFile = null;
let generatedCards = [];

// Elements del DOM
const elements = {
    apiKey: document.getElementById('apiKey'),
    toggleApiKey: document.getElementById('toggleApiKey'),
    saveApiKey: document.getElementById('saveApiKey'),
    apiStatus: document.getElementById('apiStatus'),
    apiSection: document.getElementById('apiSection'),
    uploadSection: document.getElementById('uploadSection'),
    uploadArea: document.getElementById('uploadArea'),
    pdfInput: document.getElementById('pdfInput'),
    fileInfo: document.getElementById('fileInfo'),
    optionsSection: document.getElementById('optionsSection'),
    generateBtn: document.getElementById('generateBtn'),
    progressSection: document.getElementById('progressSection'),
    progressFill: document.getElementById('progressFill'),
    progressText: document.getElementById('progressText'),
    previewSection: document.getElementById('previewSection'),
    cardsList: document.getElementById('cardsList'),
    downloadBtn: document.getElementById('downloadBtn'),
    resetBtn: document.getElementById('resetBtn'),
    numCards: document.getElementById('numCards'),
    optQA: document.getElementById('optQA'),
    optCloze: document.getElementById('optCloze'),
    optDefinitions: document.getElementById('optDefinitions'),
    optLists: document.getElementById('optLists')
};

// Inicialització
document.addEventListener('DOMContentLoaded', () => {
    loadApiKey();
    setupEventListeners();
});

// Carregar API key del localStorage
function loadApiKey() {
    const savedKey = localStorage.getItem('gemini_api_key');
    if (savedKey) {
        apiKey = savedKey;
        elements.apiKey.value = savedKey;
        showStatus('API Key carregada correctament', 'success');
        showSection('uploadSection');
    }
}

// Configurar event listeners
function setupEventListeners() {
    // Toggle API key visibility
    elements.toggleApiKey.addEventListener('click', () => {
        const type = elements.apiKey.type === 'password' ? 'text' : 'password';
        elements.apiKey.type = type;
        elements.toggleApiKey.textContent = type === 'password' ? '👁️' : '🙈';
    });

    // Guardar API key
    elements.saveApiKey.addEventListener('click', saveApiKey);

    // Upload area
    elements.uploadArea.addEventListener('click', () => elements.pdfInput.click());
    elements.pdfInput.addEventListener('change', handleFileSelect);

    // Drag and drop
    elements.uploadArea.addEventListener('dragover', (e) => {
        e.preventDefault();
        elements.uploadArea.classList.add('dragover');
    });

    elements.uploadArea.addEventListener('dragleave', () => {
        elements.uploadArea.classList.remove('dragover');
    });

    elements.uploadArea.addEventListener('drop', (e) => {
        e.preventDefault();
        elements.uploadArea.classList.remove('dragover');
        const file = e.dataTransfer.files[0];
        if (file && file.type === 'application/pdf') {
            handleFile(file);
        }
    });

    // Generar flashcards
    elements.generateBtn.addEventListener('click', generateFlashcards);

    // Descarregar .apkg
    elements.downloadBtn.addEventListener('click', downloadApkg);

    // Reset
    elements.resetBtn.addEventListener('click', resetApp);
}

// Guardar API key
function saveApiKey() {
    const key = elements.apiKey.value.trim();
    if (!key) {
        showStatus('Si us plau, introdueix una API key', 'error');
        return;
    }

    if (!key.startsWith('AIza')) {
        showStatus('L\'API key hauria de començar amb "AIza"', 'error');
        return;
    }

    apiKey = key;
    localStorage.setItem('gemini_api_key', key);
    showStatus('API Key guardada correctament!', 'success');
    showSection('uploadSection');
}

// Gestionar selecció d'arxiu
function handleFileSelect(e) {
    const file = e.target.files[0];
    if (file) {
        handleFile(file);
    }
}

// Processar arxiu PDF
async function handleFile(file) {
    if (file.type !== 'application/pdf') {
        showStatus('Si us plau, selecciona un arxiu PDF', 'error');
        return;
    }

    if (file.size > 10 * 1024 * 1024) {
        showStatus('L\'arxiu és massa gran. Màxim 10 MB', 'error');
        return;
    }

    pdfFile = file;
    elements.fileInfo.style.display = 'block';
    elements.fileInfo.innerHTML = `
        <strong>✅ Arxiu carregat:</strong> ${file.name} (${(file.size / 1024).toFixed(2)} KB)
    `;

    // Extreure text del PDF
    try {
        showProgress(10, 'Extraient text del PDF...');
        pdfText = await extractTextFromPDF(file);
        showProgress(100, 'Text extret correctament!');
        
        setTimeout(() => {
            hideSection('progressSection');
            showSection('optionsSection');
        }, 1000);
    } catch (error) {
        console.error('Error extraient text:', error);
        showStatus('Error extraient el text del PDF', 'error');
    }
}

// Extreure text del PDF
async function extractTextFromPDF(file) {
    const arrayBuffer = await file.arrayBuffer();
    const pdf = await pdfjsLib.getDocument({ data: arrayBuffer }).promise;
    let fullText = '';

    for (let i = 1; i <= pdf.numPages; i++) {
        const page = await pdf.getPage(i);
        const textContent = await page.getTextContent();
        const pageText = textContent.items.map(item => item.str).join(' ');
        fullText += pageText + '\n\n';
    }

    return fullText;
}

// Generar flashcards
async function generateFlashcards() {
    if (!pdfText) {
        showStatus('No hi ha text per processar', 'error');
        return;
    }

    hideSection('optionsSection');
    showSection('progressSection');
    showProgress(0, 'Preparant la generació...');

    const numCards = parseInt(elements.numCards.value) || 20;
    const options = {
        qa: elements.optQA.checked,
        cloze: elements.optCloze.checked,
        definitions: elements.optDefinitions.checked,
        lists: elements.optLists.checked
    };

    try {
        showProgress(30, 'Analitzant el contingut amb IA...');

        const cards = await callClaudeAPI(pdfText, numCards, options);
        
        showProgress(100, 'Flashcards generades!');
        
        generatedCards = cards;

        setTimeout(() => {
            hideSection('progressSection');
            displayCards(cards);
            showSection('previewSection');
        }, 1000);

    } catch (error) {
        console.error('Error generant flashcards:', error);
        showStatus('Error generant les flashcards: ' + error.message, 'error');
        hideSection('progressSection');
        showSection('optionsSection');
    }
}

// Cridar a l'API de Gemini
async function callClaudeAPI(text, numCards, options) {
    const cardTypes = [];
    if (options.qa) cardTypes.push('preguntes i respostes directes');
    if (options.cloze) cardTypes.push('cloze deletions (text amb buits per omplir)');
    if (options.definitions) cardTypes.push('definicions de conceptes clau');
    if (options.lists) cardTypes.push('llistes i enumeracions');

    const prompt = `Ets un assistent expert en crear flashcards per estudiar amb Anki. Analitza el següent text i crea ${numCards} flashcards d'alta qualitat.

TIPUS DE FLASHCARDS A CREAR:
${cardTypes.join(', ')}

TEXT A ANALITZAR:
${text.substring(0, 30000)}

INSTRUCCIONS:
1. Identifica els conceptes més importants del text
2. Crea flashcards clares i concises
3. Per cloze deletions, utilitza el format: "El {{c1::concepte}} és important"
4. Varia els tipus de flashcards segons les opcions seleccionades
5. Assegura't que les respostes siguin precises i basades en el text

RESPON ÚNICAMENT amb un objecte JSON amb aquest format exacte:
{
  "cards": [
    {
      "type": "basic|cloze|definition|list",
      "front": "Pregunta o text amb buit",
      "back": "Resposta o explicació"
    }
  ]
}

NO afegeixis cap text addicional abans o després del JSON.`;

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

    if (!response.ok) {
        const error = await response.json();
        throw new Error(error.error?.message || 'Error cridant l\'API de Gemini');
    }

    const data = await response.json();
    const content = data.candidates[0].content.parts[0].text;
    
    // Netejar el text per assegurar que només tenim JSON
    let jsonText = content.trim();
    // Eliminar possibles markdown code blocks
    jsonText = jsonText.replace(/```json\s*/g, '').replace(/```\s*/g, '');
    
    const parsed = JSON.parse(jsonText);
    return parsed.cards || [];
}

// Mostrar les flashcards generades
function displayCards(cards) {
    elements.cardsList.innerHTML = '';

    cards.forEach((card, index) => {
        const cardEl = document.createElement('div');
        cardEl.className = 'card-preview';

        const typeLabels = {
            'basic': '❓ Pregunta/Resposta',
            'cloze': '📝 Cloze Deletion',
            'definition': '📖 Definició',
            'list': '📋 Llista'
        };

        cardEl.innerHTML = `
            <span class="card-type">${typeLabels[card.type] || '❓ Bàsica'}</span>
            <div class="card-front">${escapeHtml(card.front)}</div>
            <div class="card-back">${escapeHtml(card.back)}</div>
        `;

        elements.cardsList.appendChild(cardEl);
    });
}

// Descarregar arxiu .apkg
async function downloadApkg() {
    if (generatedCards.length === 0) {
        showStatus('No hi ha flashcards per descarregar', 'error');
        return;
    }

    try {
        showProgress(50, 'Creant arxiu .apkg...');
        showSection('progressSection');

        const apkgBlob = await createApkgFile(generatedCards);
        
        showProgress(100, 'Arxiu creat!');

        // Descarregar l'arxiu
        const url = URL.createObjectURL(apkgBlob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `flashcards_${Date.now()}.apkg`;
        a.click();
        URL.revokeObjectURL(url);

        setTimeout(() => {
            hideSection('progressSection');
        }, 1500);

    } catch (error) {
        console.error('Error creant .apkg:', error);
        showStatus('Error creant l\'arxiu .apkg', 'error');
        hideSection('progressSection');
    }
}

// Crear arxiu .apkg
async function createApkgFile(cards) {
    const zip = new JSZip();
    const timestamp = Date.now();
    const deckName = 'PDF Flashcards';

    // Crear base de dades SQLite simplificada (en format text per aquest exemple)
    // En una implementació real, caldria usar una llibreria SQLite per JavaScript
    
    let anki21Data = `PRAGMA foreign_keys=OFF;
BEGIN TRANSACTION;

CREATE TABLE col (
    id INTEGER PRIMARY KEY,
    crt INTEGER NOT NULL,
    mod INTEGER NOT NULL,
    scm INTEGER NOT NULL,
    ver INTEGER NOT NULL,
    dty INTEGER NOT NULL,
    usn INTEGER NOT NULL,
    ls INTEGER NOT NULL,
    conf TEXT NOT NULL,
    models TEXT NOT NULL,
    decks TEXT NOT NULL,
    dconf TEXT NOT NULL,
    tags TEXT NOT NULL
);

INSERT INTO col VALUES(1,${timestamp},${timestamp},${timestamp},11,0,0,0,
'{"nextPos": 1, "estTimes": true, "activeDecks": [1]}',
'{"1": {"id": 1, "name": "Basic", "type": 0, "mod": ${timestamp}, "flds": [{"name": "Front", "ord": 0}, {"name": "Back", "ord": 1}], "tmpls": [{"name": "Card 1", "qfmt": "{{Front}}", "afmt": "{{FrontSide}}<hr id=answer>{{Back}}"}]}}',
'{"1": {"id": 1, "name": "${deckName}", "mod": ${timestamp}}}',
'{}',
'{}');

CREATE TABLE notes (
    id INTEGER PRIMARY KEY,
    guid TEXT NOT NULL,
    mid INTEGER NOT NULL,
    mod INTEGER NOT NULL,
    usn INTEGER NOT NULL,
    tags TEXT NOT NULL,
    flds TEXT NOT NULL,
    sfld TEXT NOT NULL,
    csum INTEGER NOT NULL,
    flags INTEGER NOT NULL,
    data TEXT NOT NULL
);

CREATE TABLE cards (
    id INTEGER PRIMARY KEY,
    nid INTEGER NOT NULL,
    did INTEGER NOT NULL,
    ord INTEGER NOT NULL,
    mod INTEGER NOT NULL,
    usn INTEGER NOT NULL,
    type INTEGER NOT NULL,
    queue INTEGER NOT NULL,
    due INTEGER NOT NULL,
    ivl INTEGER NOT NULL,
    factor INTEGER NOT NULL,
    reps INTEGER NOT NULL,
    lapses INTEGER NOT NULL,
    left INTEGER NOT NULL,
    odue INTEGER NOT NULL,
    odid INTEGER NOT NULL,
    flags INTEGER NOT NULL,
    data TEXT NOT NULL
);
`;

    cards.forEach((card, index) => {
        const noteId = timestamp + index;
        const cardId = timestamp + index + 10000;
        const guid = generateGuid();
        
        const front = card.front.replace(/'/g, "''");
        const back = card.back.replace(/'/g, "''");
        
        anki21Data += `
INSERT INTO notes VALUES(${noteId},'${guid}',1,${timestamp},0,'','${front}\x1f${back}','${front}',0,0,'');
INSERT INTO cards VALUES(${cardId},${noteId},1,0,${timestamp},0,0,0,${index + 1},0,0,0,0,0,0,0,0,'');
`;
    });

    anki21Data += 'COMMIT;';

    // Afegir arxius al zip
    zip.file('collection.anki21', anki21Data);
    zip.file('media', '{}');

    return await zip.generateAsync({ type: 'blob' });
}

// Generar GUID per Anki
function generateGuid() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        const r = Math.random() * 16 | 0;
        const v = c === 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
}

// Utilitats
function showSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.style.display = 'block';
    }
}

function hideSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.style.display = 'none';
    }
}

function showStatus(message, type) {
    elements.apiStatus.textContent = message;
    elements.apiStatus.className = `status-message ${type}`;
}

function showProgress(percent, message) {
    elements.progressFill.style.width = `${percent}%`;
    elements.progressText.textContent = message;
}

function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

function resetApp() {
    pdfFile = null;
    pdfText = '';
    generatedCards = [];
    elements.pdfInput.value = '';
    elements.fileInfo.style.display = 'none';
    hideSection('previewSection');
    hideSection('progressSection');
    showSection('uploadSection');
}
