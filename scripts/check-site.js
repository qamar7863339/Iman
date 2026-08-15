const fs = require('fs');

const requiredFiles = ['index.html', 'src/main.js', 'src/styles.css'];
const requiredHtml = ['Ida Claire San Antonio', 'Southern hospitality', 'Open in Maps'];
const requiredJs = ['IntersectionObserver', 'aria-expanded', 'dataset.scene'];

for (const file of requiredFiles) {
  const text = fs.readFileSync(file, 'utf8');
  if (!text.trim()) throw new Error(`${file} is empty`);
}

const html = fs.readFileSync('index.html', 'utf8');
const js = fs.readFileSync('src/main.js', 'utf8');

for (const snippet of requiredHtml) {
  if (!html.includes(snippet)) throw new Error(`Missing required HTML content: ${snippet}`);
}

for (const snippet of requiredJs) {
  if (!js.includes(snippet)) throw new Error(`Missing required JS behavior: ${snippet}`);
}

console.log('Static site assets and key content verified.');
