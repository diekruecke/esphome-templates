// URL zur JSON-Datei
const url = "./ghpages-table-info.json";

// Funktion zum Generieren der Markdown-Tabelle
function generateMarkdownTable(jsonData) {
    // Manuell die gewünschten Kopfzeilen definieren
    const headers = ['Gerät', 'Flash via Browser', 'Download Firmware', 'Download OTA File', 'ReadME'];
    let markdown = '| ' + headers.join(' | ') + ' |\n';
    markdown += '| ' + headers.map(() => '---').join(' | ') + ' |\n';

    // Durch die Daten iterieren und jede Zeile zur Tabelle hinzufügen
    jsonData.forEach(item => {
        const manifestButton = `<esp-web-install-button manifest="${item['manifest']}"> <button slot="activate">Connect</button></esp-web-install-button>`;
        const firmwareButton = `<a href="${item['firmware']}"><button>Firmware</button></a>`;
        const otaButton = `<a href="${item['ota']}"><button>OTA Firmware</button></a>`;
        const readmeButton = `<a href="${item['github']}"><button>ReadME</button></a>`;  // Neuer HTML-Code für die "ReadME"-Spalte

        const row = [
            item['devicename'] || '',  // Schlüssel für 'Gerät'
            manifestButton,  // HTML Code für 'Flash via Browser'
            firmwareButton,  // HTML Code für 'Download Firmware'
            otaButton,  // HTML Code für 'Download OTA File'
            readmeButton  // HTML Code für 'ReadME'
        ];
        markdown += '| ' + row.join(' | ') + ' |\n';
    });

    return markdown;
}

// Funktion zum Konvertieren von Markdown zu HTML
function markdownToHtml(markdown) {
    const lines = markdown.split('\n');
    let html = '<table>\n';

    lines.forEach((line, index) => {
        if (line.startsWith('|')) {
            const cells = line.split('|').filter(cell => cell.trim() !== '');

            if (index === 0) {
                // Kopfzeile
                html += '  <thead><tr>\n';
                cells.forEach(cell => html += `    <th>${cell.trim()}</th>\n`);
                html += '  </tr></thead>\n';
            } else if (index === 1) {
                // Ignoriere die Trennlinie
                return;
            } else {
                // Datenzeilen
                html += '  <tr>\n';
                cells.forEach(cell => html += `    <td>${cell.trim()}</td>\n`);
                html += '  </tr>\n';
            }
        }
    });

    html += '</table>';
    return html;
}

// JSON-Datei laden und verarbeiten
fetch(url)
    .then(response => response.json())
    .then(data => {
        const markdownTable = generateMarkdownTable(data);
        const htmlTable = markdownToHtml(markdownTable);
        document.getElementById('markdown-table').innerHTML = htmlTable;
    })
    .catch(error => console.error('Fehler beim Laden der JSON-Datei:', error));
