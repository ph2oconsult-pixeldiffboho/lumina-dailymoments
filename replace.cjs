const fs = require('fs');
let content = fs.readFileSync('src/App.tsx', 'utf8');

const replacements = [
  ['bg-stone-50', 'bg-offwhite'],
  ['text-stone-800', 'text-charcoal'],
  ['text-stone-500', 'text-charcoal-muted'],
  ['bg-stone-800', 'bg-sage'],
  ['hover:bg-stone-700', 'hover:bg-sage-dark'],
  ['text-stone-400', 'text-charcoal-light'],
  ['bg-taupe/40', 'bg-sage/40'],
  ['border-stone-800', 'border-sage'],
  ['border-stone-200', 'border-sand'],
  ['border-stone-300', 'border-charcoal-light'],
  ['bg-white', 'bg-surface'],
  ['bg-stone-200', 'bg-sand'],
  ['text-stone-600', 'text-charcoal-muted'],
  ['text-stone-700', 'text-charcoal'],
  ['bg-taupe', 'bg-sage'],
  ['text-taupe', 'text-sage'],
  ['border-taupe/30', 'border-sage/30'],
  ['bg-stone-100', 'bg-surface-hover'],
  ['border-stone-100', 'border-sand'],
  ['text-stone-300', 'text-sand'],
  ['shadow-sm', 'shadow-warm-sm'],
  ['shadow-md', 'shadow-warm-md'],
  ['shadow-lg', 'shadow-warm-lg'],
  ['shadow-xl', 'shadow-warm-lg'],
  ['rounded-3xl', 'rounded-[2rem]'],
  ['rounded-2xl', 'rounded-3xl'],
  ['rounded-xl', 'rounded-2xl']
];

for (const [oldClass, newClass] of replacements) {
  content = content.split(oldClass).join(newClass);
}

// Ensure buttons have shadows
content = content.replace(/hover:bg-sage-dark transition-colors"/g, 'hover:bg-sage-dark transition-colors shadow-warm-md"');

fs.writeFileSync('src/App.tsx', content);
console.log("Done");
