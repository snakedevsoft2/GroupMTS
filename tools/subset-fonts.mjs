/* Regenera src/assets/fonts/ desde @fontsource-variable (npm run fonts).
   Subset latín es/en + ejes recortados (wght 300-700). */
import subsetFont from 'subset-font';
import { readFileSync, writeFileSync, mkdirSync } from 'fs';

let text = '';
for (let c = 0x20; c <= 0x7e; c++) text += String.fromCharCode(c);
for (let c = 0xa1; c <= 0xff; c++) text += String.fromCharCode(c);
text += '–—‘’“”…·';

const axes = { wght: { min: 300, max: 700 }, opsz: { min: 9, max: 144 } };
const jobs = [
  ['node_modules/@fontsource-variable/inter/files/inter-latin-wght-normal.woff2', 'src/assets/fonts/inter-var.woff2', { wght: axes.wght }],
  ['node_modules/@fontsource-variable/fraunces/files/fraunces-latin-opsz-normal.woff2', 'src/assets/fonts/fraunces-var.woff2', axes],
  ['node_modules/@fontsource-variable/fraunces/files/fraunces-latin-opsz-italic.woff2', 'src/assets/fonts/fraunces-var-italic.woff2', axes],
];

mkdirSync('src/assets/fonts', { recursive: true });
for (const [src, out, variationAxes] of jobs) {
  const buf = readFileSync(src);
  const sub = await subsetFont(buf, text, { targetFormat: 'woff2', variationAxes });
  writeFileSync(out, sub);
  console.log(out, buf.length, '->', sub.length);
}
