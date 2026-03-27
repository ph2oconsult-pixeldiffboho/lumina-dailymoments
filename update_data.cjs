const fs = require('fs');

let content = fs.readFileSync('src/data.ts', 'utf8');

// Add new interfaces
const interfacesToAdd = `
export interface ExtensionItem {
  title: string;
  description: string;
}

export interface StageExtension {
  readTogether: ExtensionItem[];
  watchTogether?: ExtensionItem;
  talkAbout: string;
}
`;

content = content.replace('export interface Stage {', interfacesToAdd + '\nexport interface Stage {');
content = content.replace('reflection: string;', 'reflection: string;\n  extension?: StageExtension;');

// Update the first path (Becoming Resilient) with extensions
const extensions = [
  `extension: {
              readTogether: [
                { title: "The Girl Who Never Made Mistakes by Mark Pett", description: "A story about the freedom of finally messing up." },
                { title: "Beautiful Oops! by Barney Saltzberg", description: "Shows how every mistake is an opportunity to make something beautiful." }
              ],
              watchTogether: { title: "Ormie the Pig (Short Film)", description: "A funny look at trying, failing, and trying again in different ways." },
              talkAbout: "When was a time you tried something new and it didn't work out the first time? What did you do next?"
            }`,
  `extension: {
              readTogether: [
                { title: "The Most Magnificent Thing by Ashley Spires", description: "A perfect example of feeling frustrated, walking away, and coming back with a fresh perspective." },
                { title: "Jabari Jumps by Gaia Cornwall", description: "About overcoming the fear and hesitation before taking a big leap." }
              ],
              talkAbout: "Where do you feel frustration in your body? Does your face get hot? Do your hands clench?"
            }`,
  `extension: {
              readTogether: [
                { title: "Flight School by Lita Judge", description: "A penguin with the soul of an eagle who refuses to give up on his dream of flying." },
                { title: "Rosie Revere, Engineer by Andrea Beaty", description: "A story about a girl who learns that her failures are just stepping stones to success." }
              ],
              watchTogether: { title: "Piper (Pixar Short)", description: "A little bird facing the scary ocean and learning to overcome fear." },
              talkAbout: "Can you think of a time when you wanted to quit, but you kept going? How did you feel afterwards?"
            }`,
  `extension: {
              readTogether: [
                { title: "Emmanuel's Dream by Laurie Ann Thompson", description: "A true story of a boy in Ghana who cycled across the country despite a physical disability." },
                { title: "Salt in His Shoes by Deloris Jordan", description: "The story of Michael Jordan learning that patience, practice, and hard work make you a winner." }
              ],
              talkAbout: "What is something you have to practice a lot to get good at? How does practicing make you feel?"
            }`,
  `extension: {
              readTogether: [
                { title: "The Dot by Peter H. Reynolds", description: "A story about making your mark and seeing where it takes you, building confidence from a single dot." },
                { title: "I Am Courage by Susan Verde", description: "A book about finding the inner strength to face challenges and be yourself." }
              ],
              watchTogether: { title: "Boundin' (Pixar Short)", description: "A sheep who loses his confidence but learns to bound again." },
              talkAbout: "What makes you feel strong and confident? How can you help someone else feel that way?"
            }`
];

for (let i = 0; i < 5; i++) {
  const searchStrs = [
    'reflection: "What is something you do easily now that used to look impossible?"',
    'reflection: "How does your body feel when you start to get frustrated?"',
    'reflection: "Why is it sometimes helpful to make a mistake before getting it right?"',
    'reflection: "What is the difference between how you felt on the first day and how you feel today?"',
    'reflection: "When you face your next hard challenge, what will you remember from this experience?"'
  ];
  
  content = content.replace(searchStrs[i], searchStrs[i] + `,\n            ${extensions[i]}`);
}

fs.writeFileSync('src/data.ts', content);
console.log("Done");
