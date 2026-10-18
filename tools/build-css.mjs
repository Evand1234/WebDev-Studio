// Concatenates css/parts/*.css (in filename order) into css/site.css, lightly minified. Run: node tools/build-css.mjs
import {readdirSync,readFileSync,writeFileSync} from 'fs';
const dir=new URL('../css/parts/',import.meta.url);
const css=readdirSync(dir).filter(f=>f.endsWith('.css')).sort().map(f=>readFileSync(new URL(f,dir),'utf8')).join('\n');
const min=css.replace(/\/\*[\s\S]*?\*\//g,'').replace(/\s*([{};,>])\s*/g,'$1').replace(/;}/g,'}').replace(/\n+/g,'').trim();
writeFileSync(new URL('../css/site.css',import.meta.url),min);
console.log('site.css',min.length,'bytes');
