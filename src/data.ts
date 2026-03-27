export interface ExtensionItem {
  title: string;
  description: string;
}

export interface StageInteraction {
  type: 'feeling' | 'input' | 'choice';
  prompt: string;
  options?: string[];
}

export interface StageExtension {
  readTogether?: ExtensionItem[];
  watchTogether?: ExtensionItem;
  talkAbout?: string;
  activity?: string;
}

export interface Step {
  id: string;
  type: 'story' | 'question' | 'choice' | 'action' | 'whisper' | 'identity' | 'micro-moment';
  content: string;
  options?: string[];
  parentGuidance?: string;
}

export interface Stage {
  id: string;
  stageNumber: number;
  title: string;
  steps: Step[];
  // Deprecated fields kept for compatibility during migration
  realLifeExample?: string;
  feeling?: string;
  action?: string;
  connectionTitle?: string;
  connection?: string;
  reflection?: string;
  identityStatement?: string;
  extension?: StageExtension;
  interaction?: StageInteraction;
  momentNaming?: {
    prompt: string;
    options: string[];
  };
  microMoment?: string;
}

export interface Path {
  id: string;
  lifeStage: string;
  layer: string;
  title: string;
  description: string;
  stages: Stage[];
}

export interface DailyPractice {
  id: string;
  layer: string;
  lifeStage: string;
  title: string;
  reflection: string;
  action: string;
  connectionTitle: string;
  connection: string;
  identityStatement: string;
}

export interface LibraryBook {
  title: string;
  author: string;
  theme: string;
}

export const libraryData: Record<'lifeStages' | 'layers', Record<string, LibraryBook[]>> = {
  lifeStages: {
    "Starting something new": [
      { title: "The Girl Who Never Made Mistakes", author: "Mark Pett", theme: "Resilience" },
      { title: "Beautiful Oops!", author: "Barney Saltzberg", theme: "Creativity" },
      { title: "Jabari Jumps", author: "Gaia Cornwall", theme: "Bravery" },
    ],
    "Feeling stuck": [
      { title: "The Most Magnificent Thing", author: "Ashley Spires", theme: "Perseverance" },
      { title: "What Do You Do With a Problem?", author: "Kobi Yamada", theme: "Problem Solving" },
      { title: "Flight School", author: "Lita Judge", theme: "Determination" },
    ],
    "Building confidence": [
      { title: "I Am Enough", author: "Grace Byers", theme: "Self-Worth" },
      { title: "The Dot", author: "Peter H. Reynolds", theme: "Self-Expression" },
      { title: "Stand Tall, Molly Lou Melon", author: "Patty Lovell", theme: "Confidence" },
    ],
    "Navigating relationships": [
      { title: "The Invisible Boy", author: "Trudy Ludwig", theme: "Empathy" },
      { title: "Enemy Pie", author: "Derek Munson", theme: "Friendship" },
      { title: "Strictly No Elephants", author: "Lisa Mantchev", theme: "Inclusion" },
    ],
    "Finding direction": [
      { title: "Maybe", author: "Kobi Yamada", theme: "Potential" },
      { title: "Oh, the Places You'll Go!", author: "Dr. Seuss", theme: "Journey" },
      { title: "The Word Collector", author: "Peter H. Reynolds", theme: "Discovery" },
    ]
  },
  layers: {
    "Guided": [
      { title: "In My Heart: A Book of Feelings", author: "Jo Witek", theme: "Emotional Literacy" },
      { title: "The Color Monster", author: "Anna Llenas", theme: "Feelings" },
      { title: "The Rabbit Listened", author: "Cori Doerrfeld", theme: "Empathy" },
    ],
    "Emerging": [
      { title: "Wonder", author: "R.J. Palacio", theme: "Empathy" },
      { title: "Out of My Mind", author: "Sharon M. Draper", theme: "Understanding" },
      { title: "Fish in a Tree", author: "Lynda Mullaly Hunt", theme: "Differences" },
    ],
    "Owning": [
      { title: "The Hate U Give", author: "Angie Thomas", theme: "Identity" },
      { title: "Atomic Habits", author: "James Clear", theme: "Growth" },
      { title: "The Alchemist", author: "Paulo Coelho", theme: "Journey" },
    ],
    "Living": [
      { title: "Man's Search for Meaning", author: "Viktor E. Frankl", theme: "Purpose" },
      { title: "The Gifts of Imperfection", author: "Brené Brown", theme: "Acceptance" },
      { title: "Daring Greatly", author: "Brené Brown", theme: "Vulnerability" },
    ]
  }
};

export const sampleDailyPractices: DailyPractice[] = [
  {
    id: "dp-1",
    layer: "Guided",
    lifeStage: "Feeling stuck",
    title: "The power of the pause",
    reflection: "When things get frustrating, our bodies react before our brains do. Noticing that tightness is the first step to staying in control.",
    action: "Next time you feel frustrated today, try to catch the feeling in your body before you react. Just notice it.",
    connectionTitle: "Conversation Prompt",
    connection: "Where do you feel frustration in your body? (e.g., tight chest, clenched fists)",
    identityStatement: "You're becoming someone who pauses before reacting."
  },
  {
    id: "dp-2",
    layer: "Living",
    lifeStage: "Feeling stuck",
    title: "Observing the friction",
    reflection: "Resistance often shows up as procrastination or sudden fatigue. It's not a character flaw; it's your brain trying to protect you from perceived difficulty.",
    action: "When you feel the urge to avoid a task today, set a timer for 2 minutes and just sit with the task without doing it or running away.",
    connectionTitle: "Internal Reflection",
    connection: "What is the actual fear beneath this resistance? Is it fear of failure, or just the discomfort of effort?",
    identityStatement: "You're becoming someone who can sit with discomfort."
  },
  {
    id: "dp-3",
    layer: "Emerging",
    lifeStage: "Navigating relationships",
    title: "Listening to understand",
    reflection: "Often, we listen just to reply. But real connection happens when we listen to understand what the other person is feeling.",
    action: "In your next conversation, try to repeat back what you heard before adding your own thoughts.",
    connectionTitle: "Shared Reflection",
    connection: "When was a time you felt truly heard by someone? What did they do?",
    identityStatement: "You're becoming someone who listens deeply."
  },
  {
    id: "dp-4",
    layer: "Owning",
    lifeStage: "Starting something new",
    title: "Embracing the beginner's mind",
    reflection: "It's uncomfortable to be bad at something. But every expert was once a beginner who was willing to look foolish.",
    action: "Do one thing today that you are not good at, and allow yourself to enjoy the process of learning without judging the result.",
    connectionTitle: "Self-Reflection",
    connection: "What is one thing you've been avoiding learning because you're afraid of being bad at it?",
    identityStatement: "You're becoming someone who embraces the learning process."
  }
];

export const systemPaths: Path[] = [
  {
    id: "path-guided-stuck",
    lifeStage: "Feeling stuck",
    layer: "Guided",
    title: "The First Week Together",
    description: "A 7-day evening reflection ritual to help process the hard parts of the day and figure out what works best for you.",
    stages: [
      {
        id: "stage-fw-1",
        stageNumber: 1,
        title: "The Heavy Rock",
        steps: [
          {
            id: "s1-step1",
            type: "story",
            content: "Did anything today feel like trying to push a heavy rock that just wouldn't move?",
            parentGuidance: "Just a quiet opening. No pressure."
          },
          {
            id: "s1-step2",
            type: "choice",
            content: "Was there a moment where you felt... stuck?",
            options: ["Yes", "A little", "Not really", "Nothing comes to mind"],
            parentGuidance: "Wait for them. It’s okay if they say 'nothing'."
          },
          {
            id: "s1-step3",
            type: "question",
            content: "What was the 'stuck' part? Was it a thing you were doing, or a feeling in your head?",
            parentGuidance: "Listen to the story. Don't correct the details or offer a fix."
          },
          {
            id: "s1-step4",
            type: "question",
            content: "When that happens, does it feel like your brain is just... 'ugh'?",
            parentGuidance: "Nod. Share a quick 'ugh' moment you had today too."
          },
          {
            id: "s1-step5",
            type: "choice",
            content: "If that 'ugh' feeling comes back tomorrow, what's one thing you might try?",
            options: ["Walk away", "Ask for a hug", "Try one more time", "Not sure yet"],
            parentGuidance: "Whatever they pick is their choice. There is no 'better' answer."
          },
          {
            id: "s1-step6",
            type: "identity",
            content: "That's a good way to be you.",
            parentGuidance: "A warm look. Just letting them be."
          },
          {
            id: "s1-step-micro",
            type: "micro-moment",
            content: "That felt real, didn't it?",
            parentGuidance: "A quiet smile."
          },
          {
            id: "s1-step7",
            type: "whisper",
            content: "That's enough for today. Sleep well."
          }
        ]
      },
      {
        id: "stage-fw-2",
        stageNumber: 2,
        title: "Checking In",
        steps: [
          {
            id: "s2-step1",
            type: "choice",
            content: "Did that 'stuck' feeling show up again today?",
            options: ["Yes", "Not really", "Didn't think about it", "Not today"],
            parentGuidance: "Any answer is a good answer. Just a gentle check-in."
          },
          {
            id: "s2-step2",
            type: "question",
            content: "If it did, what happened? If it didn't, that’s okay too. Some days are just smoother.",
            parentGuidance: "Listen to the story. Don't look for a lesson or a 'win'."
          },
          {
            id: "s2-step3",
            type: "choice",
            content: "Did you remember the thing you thought about trying yesterday?",
            options: ["I remembered", "I forgot", "I didn't want to"],
            parentGuidance: "Forgetting is normal. No pressure."
          },
          {
            id: "s2-step4",
            type: "question",
            content: "If you tried it, how did it feel? If you didn't, that's totally fine. Some days aren't for testing.",
            parentGuidance: "Mirror what they say: 'So it felt a bit weird?' or 'It felt okay?'"
          },
          {
            id: "s2-step5",
            type: "whisper",
            content: "Things change from one day to the next.",
            parentGuidance: "A simple nod."
          },
          {
            id: "s2-step6",
            type: "whisper",
            content: "We'll see what tomorrow brings.",
            parentGuidance: "A quiet moment."
          },
          {
            id: "s2-step7",
            type: "whisper",
            content: "Okay. Sleep well."
          }
        ]
      },
      {
        id: "stage-fw-3",
        stageNumber: 3,
        title: "Just Noticing",
        steps: [
          {
            id: "s3-step1",
            type: "whisper",
            content: "This 'stuck' feeling... it shows up for everyone sometimes, doesn't it?",
            parentGuidance: "Just a quiet observation."
          },
          {
            id: "s3-step2",
            type: "choice",
            content: "Did you notice it at all today?",
            options: ["A little bit", "Not really", "Nothing comes to mind", "Not today"],
            parentGuidance: "Wait for their pace. Any answer is okay."
          },
          {
            id: "s3-step3",
            type: "question",
            content: "If you close your eyes, what does that feeling actually feel like? Is it heavy? Sharp? Fuzzy?",
            parentGuidance: "Just listen. No need to explain why it feels that way."
          },
          {
            id: "s3-step4",
            type: "question",
            content: "Where do you notice it most? In your tummy? Your chest? Your head?",
            parentGuidance: "Nod. Share where you feel your 'stuck' moments too."
          },
          {
            id: "s3-step5",
            type: "whisper",
            content: "Sometimes, we can just let it sit there for a minute.",
            parentGuidance: "Take a slow breath together."
          },
          {
            id: "s3-step6",
            type: "identity",
            content: "You're doing okay.",
            parentGuidance: "A gentle hand on their shoulder."
          },
          {
            id: "s3-step7",
            type: "whisper",
            content: "That's it for today."
          }
        ]
      },
      {
        id: "stage-fw-4",
        stageNumber: 4,
        title: "The Big Push",
        steps: [
          {
            id: "s4-step1",
            type: "story",
            content: "Remember that heavy rock feeling? Sometimes it feels like we're just standing still.",
            parentGuidance: "A steady, encouraging tone."
          },
          {
            id: "s4-step2",
            type: "whisper",
            content: "Let's see if we can move some of that heavy energy today.",
            parentGuidance: "Stand up together."
          },
          {
            id: "s4-step3",
            type: "choice",
            content: "How do you want to move?",
            options: ["Big jumps in place", "Push against my hands", "A giant, loud stretch"],
            parentGuidance: "Give them something to push against if they choose that. Be the 'rock' for them."
          },
          {
            id: "s4-step4",
            type: "question",
            content: "Does your body feel a bit more 'here' now?",
            parentGuidance: "No pressure to answer. Just a quiet check-in."
          },
          {
            id: "s4-step5",
            type: "whisper",
            content: "You have a lot of strength in those muscles. Goodnight.",
            parentGuidance: "A final firm squeeze or a tuck-in."
          }
        ]
      },
      {
        id: "stage-fw-5",
        stageNumber: 5,
        title: "Trying Your Way",
        steps: [
          {
            id: "s5-step1",
            type: "story",
            content: "That stuck thing from earlier... it's still there sometimes, isn't it?",
            parentGuidance: "A simple nod. No need to fix it."
          },
          {
            id: "s5-step2",
            type: "choice",
            content: "Do you feel like trying something again today... or leaving it for now?",
            options: ["Try something small", "Leave it for now", "Not sure"],
            parentGuidance: "Any choice is the right choice."
          },
          {
            id: "s5-step3",
            type: "question",
            content: "If you feel like trying, what would you feel okay doing? Just a tiny bit.",
            parentGuidance: "Listen to their idea. Don't suggest one."
          },
          {
            id: "s5-step4",
            type: "whisper",
            content: "And if you're not ready, that's okay too. Some days are just for resting.",
            parentGuidance: "A gentle smile."
          },
          {
            id: "s5-step5",
            type: "identity",
            content: "You can try things in your own way.",
            parentGuidance: "A squeeze or a high-five."
          },
          {
            id: "s5-step6",
            type: "whisper",
            content: "That's it. Sleep well.",
            parentGuidance: "Close the app."
          }
        ]
      },
      {
        id: "stage-fw-6",
        stageNumber: 6,
        title: "How It Goes",
        steps: [
          {
            id: "s6-step1",
            type: "story",
            content: "That thing you tried today... or maybe just thought about...",
            parentGuidance: "Just a gentle reminder. No pressure."
          },
          {
            id: "s6-step2",
            type: "choice",
            content: "Did it go how you expected?",
            options: ["Yes", "Not really", "I didn't try", "Not sure"],
            parentGuidance: "Any of these is a perfectly good answer."
          },
          {
            id: "s6-step3",
            type: "whisper",
            content: "Sometimes things don't work out exactly how we thought they would.",
            parentGuidance: "A simple nod of understanding."
          },
          {
            id: "s6-step4",
            type: "story",
            content: "That happens to everyone. Even grown-ups.",
            parentGuidance: "You can share a tiny moment where something didn't go your way today."
          },
          {
            id: "s6-step5",
            type: "identity",
            content: "That's just part of how it works. It's okay.",
            parentGuidance: "A big, slow breath out together."
          },
          {
            id: "s6-step6",
            type: "whisper",
            content: "That's enough for today. Sleep well.",
            parentGuidance: "A high-five or a quiet moment together."
          }
        ]
      },
      {
        id: "stage-fw-7",
        stageNumber: 7,
        title: "Finding Your Way",
        steps: [
          {
            id: "s7-step1",
            type: "story",
            content: "We've had a few moments like this this week, haven't we?",
            parentGuidance: "A gentle nod. Just acknowledging the time spent together."
          },
          {
            id: "s7-step2",
            type: "whisper",
            content: "I've noticed something special about you this week.",
            parentGuidance: "Wait for them to look at you."
          },
          {
            id: "s7-step3",
            type: "identity",
            content: "You're someone who knows how to find your own way.",
            parentGuidance: "A warm smile."
          },
          {
            id: "s7-step4",
            type: "story",
            content: "You're good at taking that first small step.",
            parentGuidance: "A simple squeeze of the hand."
          },
          {
            id: "s7-step5",
            type: "whisper",
            content: "I'm really glad I get to see you do that.",
            parentGuidance: "Just a quiet moment of connection."
          },
          {
            id: "s7-step6",
            type: "micro-moment",
            content: "Let's see what next week brings. We'll notice it together.",
            parentGuidance: "A final high-five or a hug. Goodnight."
          }
        ]
      }
    ]
  },
  {
    id: "path-guided-leftout",
    lifeStage: "Feeling left out",
    layer: "Guided",
    title: "The Quiet Shadow",
    description: "A 7-day journey to notice and navigate the feeling of being outside the circle.",
    stages: [
      {
        id: "stage-flo-1",
        stageNumber: 1,
        title: "The Quiet Shadow",
        steps: [
          {
            id: "s1-step1",
            type: "story",
            content: "Did you feel a bit like a quiet shadow today? Like you were there, but maybe not seen?",
            parentGuidance: "Just a quiet question. No need for a big answer."
          },
          {
            id: "s1-step2",
            type: "question",
            content: "Where did that feeling live? In your chest? Your hands? Did it feel a bit cold?",
            parentGuidance: "Wait for them to point or tell you. No need to fix it."
          },
          {
            id: "s1-step3",
            type: "whisper",
            content: "It's like being in a little bubble that nobody else can see, isn't it?",
            parentGuidance: "A simple nod of understanding."
          },
          {
            id: "s1-step4",
            type: "identity",
            content: "We can just notice that bubble for a second.",
            parentGuidance: "A gentle squeeze of the hand."
          },
          {
            id: "s1-step5",
            type: "whisper",
            content: "Okay. Sleep well.",
            parentGuidance: "A quiet moment together."
          }
        ]
      },
      {
        id: "stage-flo-2",
        stageNumber: 2,
        title: "It Drifts",
        steps: [
          {
            id: "s2-step1",
            type: "choice",
            content: "Did that shadow feeling drift back today?",
            options: ["Yes", "Not really", "Didn't think about it", "Not today"],
            parentGuidance: "Any answer is a good answer."
          },
          {
            id: "s2-step2",
            type: "story",
            content: "Sometimes it's right there, and then it drifts away like smoke. It doesn't stay in the same spot forever.",
            parentGuidance: "A simple observation. No lesson needed."
          },
          {
            id: "s2-step3",
            type: "whisper",
            content: "We're just watching it move. That's all.",
            parentGuidance: "A slow breath out together."
          },
          {
            id: "s2-step4",
            type: "identity",
            content: "You're right here with me. That's the part that stays.",
            parentGuidance: "A warm smile."
          },
          {
            id: "s2-step5",
            type: "whisper",
            content: "Okay. Goodnight.",
            parentGuidance: "A high-five or a hug."
          }
        ]
      },
      {
        id: "stage-flo-3",
        stageNumber: 3,
        title: "Keeping it Company",
        steps: [
          {
            id: "s3-step1",
            type: "story",
            content: "That 'left out' feeling... we don't have to chase it away.",
            parentGuidance: "A calm, steady presence."
          },
          {
            id: "s3-step2",
            type: "question",
            content: "What if we just let it sit here with us for a minute? Like a quiet guest.",
            parentGuidance: "Just listening. No fixing."
          },
          {
            id: "s3-step3",
            type: "whisper",
            content: "It doesn't have to change. It can just be.",
            parentGuidance: "A quiet moment of just being together. Maybe a small lean-in."
          },
          {
            id: "s3-step4",
            type: "story",
            content: "You're doing okay with it.",
            parentGuidance: "A gentle pat on the back."
          },
          {
            id: "s3-step5",
            type: "identity",
            content: "Sleep well.",
            parentGuidance: "A final high-five or a hug."
          }
        ]
      },
      {
        id: "stage-flo-4",
        stageNumber: 4,
        title: "Warming Up",
        steps: [
          {
            id: "s4-step1",
            type: "story",
            content: "Remember that cold shadow feeling? Sometimes it makes us feel a bit frozen.",
            parentGuidance: "A warm, inviting tone."
          },
          {
            id: "s4-step2",
            type: "whisper",
            content: "Let's try to bring some warmth back into our bodies today.",
            parentGuidance: "A gentle, connecting tone."
          },
          {
            id: "s4-step3",
            type: "choice",
            content: "How do you want to warm up?",
            options: ["Give yourself a big hug", "Rub your hands together fast", "Lean against me"],
            parentGuidance: "Do this with them! Feel the warmth."
          },
          {
            id: "s4-step4",
            type: "question",
            content: "Does your chest feel a little warmer now?",
            parentGuidance: "No pressure to answer. Just a quiet check-in."
          },
          {
            id: "s4-step5",
            type: "whisper",
            content: "Sometimes we just need a little warmth. Goodnight.",
            parentGuidance: "A final firm squeeze or a tuck-in."
          }
        ]
      },
      {
        id: "stage-flo-5",
        stageNumber: 5,
        title: "Your Own Space",
        steps: [
          {
            id: "s5-step1",
            type: "story",
            content: "That feeling of being outside the circle... it's still there sometimes.",
            parentGuidance: "A simple nod. No need to fix it."
          },
          {
            id: "s5-step2",
            type: "choice",
            content: "Do you feel like trying to join in something small tomorrow... or just doing your own thing for a bit?",
            options: ["Try something small", "Stay in my own space", "Not sure"],
            parentGuidance: "Any choice is the right choice."
          },
          {
            id: "s5-step3",
            type: "question",
            content: "If you feel like trying, what's one tiny thing that feels okay? Even just saying 'hi'.",
            parentGuidance: "Listen to their idea. Don't suggest one."
          },
          {
            id: "s5-step4",
            type: "whisper",
            content: "And if you want to stay in your own space, that's a good way to be too.",
            parentGuidance: "A gentle smile."
          },
          {
            id: "s5-step5",
            type: "identity",
            content: "You get to decide how you move.",
            parentGuidance: "A squeeze or a high-five."
          },
          {
            id: "s5-step6",
            type: "whisper",
            content: "That's it for today. Sleep well.",
            parentGuidance: "Close the app."
          }
        ]
      },
      {
        id: "stage-flo-6",
        stageNumber: 6,
        title: "The Way it Works",
        steps: [
          {
            id: "s6-step1",
            type: "story",
            content: "That thing you thought about trying... or maybe just watched from far away...",
            parentGuidance: "Just a gentle reminder. No pressure."
          },
          {
            id: "s6-step2",
            type: "choice",
            content: "Did it go how you expected?",
            options: ["Yes", "Not really", "I didn't try", "Not sure"],
            parentGuidance: "Any of these is a perfectly good answer."
          },
          {
            id: "s6-step3",
            type: "whisper",
            content: "Sometimes circles don't open up right away. That's not about you.",
            parentGuidance: "A simple nod of understanding."
          },
          {
            id: "s6-step4",
            type: "story",
            content: "That happens to everyone. Even grown-ups.",
            parentGuidance: "You can share a tiny moment where you felt left out recently."
          },
          {
            id: "s6-step5",
            type: "identity",
            content: "It's just part of how things go sometimes. It's okay.",
            parentGuidance: "A big, slow breath out together."
          },
          {
            id: "s6-step6",
            type: "whisper",
            content: "Okay. That's it for tonight.",
            parentGuidance: "A high-five or a quiet moment."
          }
        ]
      },
      {
        id: "stage-flo-7",
        stageNumber: 7,
        title: "Always Welcome",
        steps: [
          {
            id: "s7-step1",
            type: "story",
            content: "We've noticed that quiet shadow together all week.",
            parentGuidance: "A warm, reflective tone."
          },
          {
            id: "s7-step2",
            type: "whisper",
            content: "I've seen something really important about you this week.",
            parentGuidance: "Wait for a quiet moment."
          },
          {
            id: "s7-step3",
            type: "identity",
            content: "You're someone who knows how to be yourself.",
            parentGuidance: "A warm smile."
          },
          {
            id: "s7-step4",
            type: "story",
            content: "You have a whole world inside you.",
            parentGuidance: "A gentle hand on their shoulder."
          },
          {
            id: "s7-step5",
            type: "whisper",
            content: "And you are always, always welcome here with me.",
            parentGuidance: "A quiet moment of pride."
          },
          {
            id: "s7-step6",
            type: "micro-moment",
            content: "Let's see what next week brings. We'll notice it together.",
            parentGuidance: "A final high-five or a hug. Goodnight."
          }
        ]
      }
    ]
  },
  {
    id: "path-guided-nervous",
    lifeStage: "Feeling nervous",
    layer: "Guided",
    title: "The Fluttery Feeling",
    description: "A 7-day journey to notice and stay with nervous feelings together.",
    stages: [
      {
        id: "stage-fn-1",
        stageNumber: 1,
        title: "The Fluttery Feeling",
        steps: [
          {
            id: "s1-step1",
            type: "story",
            content: "Did anything feel a bit fluttery or nervous today?",
            parentGuidance: "Just a quiet question. No need for a big answer."
          },
          {
            id: "s1-step2",
            type: "question",
            content: "Where did you feel it? In your tummy? Your chest? Somewhere else?",
            parentGuidance: "Wait for them to point or tell you. No need to fix it."
          },
          {
            id: "s1-step3",
            type: "whisper",
            content: "It's like a little butterfly that won't sit still, isn't it?",
            parentGuidance: "A simple nod of understanding."
          },
          {
            id: "s1-step4",
            type: "identity",
            content: "We can just notice it for a second.",
            parentGuidance: "A gentle squeeze of the hand."
          },
          {
            id: "s1-step5",
            type: "whisper",
            content: "Okay. Sleep well.",
            parentGuidance: "A quiet moment together."
          }
        ]
      },
      {
        id: "stage-fn-2",
        stageNumber: 2,
        title: "It Comes and Goes",
        steps: [
          {
            id: "s2-step1",
            type: "choice",
            content: "Did that fluttery feeling show up again today?",
            options: ["Yes", "Not really", "Didn't think about it", "Not today"],
            parentGuidance: "Any answer is a good answer."
          },
          {
            id: "s2-step2",
            type: "story",
            content: "Sometimes it's there, and sometimes it's not. It's like a cloud passing by.",
            parentGuidance: "A simple observation. No lesson needed."
          },
          {
            id: "s2-step3",
            type: "whisper",
            content: "It doesn't have to stay forever. It just moves through.",
            parentGuidance: "A slow breath out together. Just feeling the air move."
          },
          {
            id: "s2-step4",
            type: "identity",
            content: "We're just noticing it.",
            parentGuidance: "A warm smile."
          },
          {
            id: "s2-step5",
            type: "whisper",
            content: "That's it for today.",
            parentGuidance: "A high-five or a hug."
          }
        ]
      },
      {
        id: "stage-fn-3",
        stageNumber: 3,
        title: "Just Being With It",
        steps: [
          {
            id: "s3-step1",
            type: "story",
            content: "That nervous feeling... it's just a feeling. It's okay to let it be there.",
            parentGuidance: "A calm, steady presence."
          },
          {
            id: "s3-step2",
            type: "question",
            content: "What does it feel like right now? Is it fast? Is it quiet?",
            parentGuidance: "Just listening. No fixing."
          },
          {
            id: "s3-step3",
            type: "whisper",
            content: "We don't have to make it go away. We can just sit with it for a moment.",
            parentGuidance: "A quiet moment of just being together. Maybe a small lean-in."
          },
          {
            id: "s3-step4",
            type: "story",
            content: "It's okay to feel this way.",
            parentGuidance: "A gentle pat on the back."
          },
          {
            id: "s3-step5",
            type: "identity",
            content: "Sleep well.",
            parentGuidance: "A final high-five or a hug."
          }
        ]
      },
      {
        id: "stage-fn-4",
        stageNumber: 4,
        title: "Finding Your Ground",
        steps: [
          {
            id: "s4-step1",
            type: "story",
            content: "Remember those flutters from earlier? Sometimes they make us feel like we're floating away.",
            parentGuidance: "A gentle, grounding tone."
          },
          {
            id: "s4-step2",
            type: "whisper",
            content: "Let's try pushing that energy into something solid.",
            parentGuidance: "Place your hands on a wall or the floor."
          },
          {
            id: "s4-step3",
            type: "choice",
            content: "Do you want to:",
            options: ["Push against the wall", "Press your feet into the floor", "Give yourself a firm hug"],
            parentGuidance: "Do this with them. Feel the strength in your muscles."
          },
          {
            id: "s4-step4",
            type: "question",
            content: "Does your body feel a bit more 'here' now?",
            parentGuidance: "No pressure to answer. Just a quiet check-in."
          },
          {
            id: "s4-step5",
            type: "whisper",
            content: "You can always find the floor when things feel fluttery. Goodnight.",
            parentGuidance: "A final firm squeeze or a tuck-in."
          }
        ]
      },
      {
        id: "stage-fn-5",
        stageNumber: 5,
        title: "Trying Your Way",
        steps: [
          {
            id: "s5-step1",
            type: "story",
            content: "That nervous thing from earlier... it's still there sometimes, isn't it?",
            parentGuidance: "A simple nod. No need to fix it."
          },
          {
            id: "s5-step2",
            type: "choice",
            content: "Do you feel like trying something small today... or leaving it for now?",
            options: ["Try something small", "Leave it for now", "Not sure"],
            parentGuidance: "Any choice is the right choice."
          },
          {
            id: "s5-step3",
            type: "question",
            content: "If you feel like trying, what would you feel okay doing? Just a tiny bit.",
            parentGuidance: "Listen to their idea. Don't suggest one."
          },
          {
            id: "s5-step4",
            type: "whisper",
            content: "And if you're not ready, that's okay too. Some days are just for resting.",
            parentGuidance: "A gentle smile."
          },
          {
            id: "s5-step5",
            type: "identity",
            content: "You can try things in your own way.",
            parentGuidance: "A squeeze or a high-five."
          },
          {
            id: "s5-step6",
            type: "whisper",
            content: "Okay. Sleep well.",
            parentGuidance: "Close the app."
          }
        ]
      },
      {
        id: "stage-fn-6",
        stageNumber: 6,
        title: "How It Goes",
        steps: [
          {
            id: "s6-step1",
            type: "story",
            content: "That thing you tried today... or maybe just thought about...",
            parentGuidance: "Just a gentle reminder. No pressure."
          },
          {
            id: "s6-step2",
            type: "choice",
            content: "Did it go how you expected?",
            options: ["Yes", "Not really", "I didn't try", "Not sure"],
            parentGuidance: "Any of these is a perfectly good answer."
          },
          {
            id: "s6-step3",
            type: "whisper",
            content: "Sometimes things don't work out exactly how we thought they would.",
            parentGuidance: "A simple nod of understanding."
          },
          {
            id: "s6-step4",
            type: "story",
            content: "That happens to everyone. Even grown-ups.",
            parentGuidance: "You can share a tiny moment where something didn't go your way today."
          },
          {
            id: "s6-step5",
            type: "identity",
            content: "That's just part of how it works. It's okay.",
            parentGuidance: "A big, slow breath out together."
          },
          {
            id: "s6-step6",
            type: "whisper",
            content: "That's it for tonight. Sleep well.",
            parentGuidance: "A high-five or a quiet moment."
          }
        ]
      },
      {
        id: "stage-fn-7",
        stageNumber: 7,
        title: "Your Quiet Strength",
        steps: [
          {
            id: "s7-step1",
            type: "story",
            content: "We've spent a week noticing those flutters together.",
            parentGuidance: "A warm, reflective tone."
          },
          {
            id: "s7-step2",
            type: "whisper",
            content: "I've seen something really special about you this week.",
            parentGuidance: "Wait for a quiet moment."
          },
          {
            id: "s7-step3",
            type: "identity",
            content: "You're someone who knows how to stay with the flutters.",
            parentGuidance: "A warm smile."
          },
          {
            id: "s7-step4",
            type: "story",
            content: "You're brave in your own way.",
            parentGuidance: "A gentle hand on their shoulder."
          },
          {
            id: "s7-step5",
            type: "whisper",
            content: "Okay. Sleep well.",
            parentGuidance: "A quiet moment."
          },
          {
            id: "s7-step6",
            type: "micro-moment",
            content: "Let's see what next week brings. We'll notice it together.",
            parentGuidance: "A final high-five or a hug. Goodnight."
          }
        ]
      }
    ]
  },
  {
    id: "path-living-stuck",
    lifeStage: "Feeling stuck",
    layer: "Living",
    title: "Moving Through the Mud",
    description: "A personal practice for when you feel frozen, overwhelmed, or unsure of your next step.",
    stages: [
      {
        id: "stage-liv-1",
        stageNumber: 1,
        title: "Naming the resistance",
        steps: [
          {
            id: "liv1-step1",
            type: "story",
            content: "You have a project or a decision to make, but every time you sit down to do it, you find a distraction. The house has never been cleaner.",
          },
          {
            id: "liv1-step2",
            type: "question",
            content: "What does your resistance feel like today? Is it heavy, dull, or sharp?",
          },
          {
            id: "liv1-step3",
            type: "action",
            content: "Close your eyes and locate where the avoidance lives in your body. Just observe it for 30 seconds without trying to fix it.",
          },
          {
            id: "liv1-step4",
            type: "whisper",
            content: "Resistance isn't a sign of failure; it's usually a sign that something matters to you, or that the next step is unclear."
          },
          {
            id: "liv1-step-micro",
            type: "micro-moment",
            content: "Take a breath. You're allowed to be where you are."
          },
          {
            id: "liv1-step5",
            type: "identity",
            content: "Today, you practiced being someone who faces their own resistance."
          }
        ]
      },
      {
        id: "stage-liv-2",
        stageNumber: 2,
        title: "Lowering the bar",
        steps: [
          {
            id: "liv2-step1",
            type: "story",
            content: "You're staring at a blank page or an empty gym bag. The idea of doing the 'full' version of the task feels like climbing a mountain.",
          },
          {
            id: "liv2-step2",
            type: "choice",
            content: "If you stripped away all expectations, what is the smallest step you could take right now?",
            options: ["5 minutes of work", "One tiny task", "Just showing up", "Something else"]
          },
          {
            id: "liv2-step3",
            type: "whisper",
            content: "Perfectionism is just fear in a nice suit. Lowering the bar isn't giving up; it's building a bridge to momentum."
          },
          {
            id: "liv2-step-micro",
            type: "micro-moment",
            content: "That felt like a real shift. Even if it was small."
          },
          {
            id: "liv2-step4",
            type: "identity",
            content: "Today, you practiced being someone who values momentum over perfection."
          }
        ]
      }
    ]
  }
];
