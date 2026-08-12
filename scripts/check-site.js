const fs = require('fs');
for (const file of ['index.html','src/main.js','src/styles.css']) {
  const text = fs.readFileSync(file,'utf8');
  if (!text.trim()) throw new Error(`${file} is empty`);
}
console.log('Static site assets verified.');
