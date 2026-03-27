import React from 'react';

interface HomeScreenProps {
  onStartToday: () => void;
}

export default function HomeScreen({ onStartToday }: HomeScreenProps) {
  const progress = [true, true, false, false, false];

  return (
    <div className="max-w-md mx-auto p-6 min-h-screen flex flex-col justify-between">
      <div className="space-y-8 pt-12">
        <div className="space-y-2">
          <h2 className="text-sm font-medium text-emerald-800 uppercase tracking-widest">Phase 1 — Understanding Myself</h2>
          <h1 className="text-2xl font-semibold text-stone-900">Week 1 — Noticing Feelings</h1>
        </div>

        <div className="bg-white p-6 rounded-3xl shadow-sm border border-stone-100 space-y-4">
          <p className="text-sm text-stone-500 uppercase tracking-wider">Today's Step</p>
          <h3 className="text-xl font-medium text-stone-900">“When something feels off”</h3>
          <button 
            onClick={onStartToday}
            className="w-full py-4 bg-emerald-600 text-white rounded-full font-medium hover:bg-emerald-700 transition-colors"
          >
            Start Today
          </button>
        </div>

        <div className="flex justify-between items-center px-2">
          {progress.map((done, i) => (
            <div key={i} className="flex flex-col items-center gap-2">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center ${done ? 'bg-emerald-600 text-white' : i === 1 ? 'bg-emerald-100 text-emerald-800 border-2 border-emerald-600' : 'bg-stone-200'}`}>
                {done ? '✓' : i + 1}
              </div>
              <span className={`text-[10px] ${i === 1 ? 'font-bold' : 'text-stone-400'}`}>
                {i === 1 ? 'today' : `Day ${i + 1}`}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
