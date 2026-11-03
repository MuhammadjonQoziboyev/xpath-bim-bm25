const fs = require('fs');
const t = fs.readFileSync('template.html', 'utf8');
const x = fs.readFileSync('book.xml', 'utf8').replace(/^﻿/, '').replace(/<\?xml[^>]*\?>\s*/, '');
fs.writeFileSync('index.html', t.replace('__XML__', () => x));
