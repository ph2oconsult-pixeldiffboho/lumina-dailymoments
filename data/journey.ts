export interface Day {
  title: string;
  youKnowWhen: string;
  whatHappens: string;
  tryThis: string;
  parentMoment: string;
}

export interface Week {
  title: string;
  days: Day[];
}

export interface Phase {
  title: string;
  weeks: Week[];
}

export const journeyData: Phase[] = [
  {
    title: "Phase 1 — Understanding Myself",
    weeks: [
      {
        title: "Week 1 — Noticing Feelings",
        days: [
          {
            title: "When something feels off",
            youKnowWhen: "Something just feels a bit weird, but you don’t know why.",
            whatHappens: "You get quiet or a bit annoyed. You’re not sure what’s wrong.",
            tryThis: "Pause for a second and ask yourself: “What am I feeling right now?”",
            parentMoment: "Later, you might say: “Did anything feel a bit off today?”"
          },
          {
            title: "When you feel annoyed but don’t know why",
            youKnowWhen: "You’re doing something fine, and suddenly everything feels irritating.",
            whatHappens: "You snap at someone or just want to be left alone.",
            tryThis: "Notice the irritation, and say out loud: “I’m feeling annoyed right now.”",
            parentMoment: "“I noticed you seem a bit annoyed, do you want some space?”"
          },
          {
            title: "When your mood changes quickly",
            youKnowWhen: "You were happy a minute ago, and now you’re sad.",
            whatHappens: "You feel confused by your own feelings.",
            tryThis: "Stop and notice that your mood just shifted.",
            parentMoment: "“It’s okay for moods to change fast, I’m here.”"
          },
          {
            title: "When something small feels big",
            youKnowWhen: "You drop a pencil and it feels like the worst thing ever.",
            whatHappens: "You feel like crying or shouting over a tiny mistake.",
            tryThis: "Take a deep breath and say: “It’s just a pencil.”",
            parentMoment: "“I know that felt big, but it’s okay.”"
          },
          {
            title: "When you feel quiet for no reason",
            youKnowWhen: "You just don’t feel like talking to anyone.",
            whatHappens: "You feel a bit lonely but also want to be alone.",
            tryThis: "It’s okay to be quiet. Just notice how it feels.",
            parentMoment: "“I’m here if you want to talk, or just sit quietly.”"
          }
        ]
      },
      { title: "Week 2 — Naming Feelings", days: [] },
      { title: "Week 3 — What I Do When I Feel This", days: [] }
    ]
  },
  { title: "Phase 2 — Taking Action", weeks: [{title: "Week 1", days: []}, {title: "Week 2", days: []}, {title: "Week 3", days: []}] },
  { title: "Phase 3 — With Other People", weeks: [{title: "Week 1", days: []}, {title: "Week 2", days: []}, {title: "Week 3", days: []}] }
];
