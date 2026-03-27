import React, { useState } from 'react';

interface TodayScreenProps {
  onComplete: () => void;
}

export default function TodayScreen({ onComplete }: TodayScreenProps) {
  const [completed, setCompleted] = useState(false);

  return (
    <div className="max-w-md mx-auto p-6 min-h-screen flex flex-col justify-between">
      <div className="space-y-8 pt-12">
        {!completed ? (
          <div className="space-y-8">
            <h1 className="text-3xl font-semibold text-stone-900">“When something feels off”</h1>

            <div className="space-y-4">
              <h3 className="text-sm font-medium text-emerald-800 uppercase tracking-widest">You know when…</h3>
              <p className="text-stone-700 text-lg leading-relaxed">Something just feels a bit weird, but you don’t know why.</p>
            </div>

            <div className="space-y-4">
              <h3 className="text-sm font-medium text-emerald-800 uppercase tracking-widest">What happens</h3>
              <p className="text-stone-700 text-lg leading-relaxed">You get quiet or a bit annoyed. You’re not sure what’s wrong.</p>
            </div>

            <div className="space-y-4">
              <h3 className="text-sm font-medium text-emerald-800 uppercase tracking-widest">Try this today</h3>
              <p className="text-stone-700 text-lg leading-relaxed">Pause and ask yourself: “What am I feeling right now?”</p>
            </div>

            <div className="bg-stone-100 p-6 rounded-3xl">
              <h3 className="text-sm font-medium text-stone-600 uppercase tracking-widest mb-2">Parent moment</h3>
              <p className="text-stone-800 italic">“Did anything feel a bit off today?”</p>
            </div>

            <button 
              onClick={() => setCompleted(true)}
              className="w-full py-4 bg-emerald-600 text-white rounded-full font-medium hover:bg-emerald-700 transition-colors"
            >
              I tried this
            </button>
          </div>
        ) : (
          <div className="flex-1 flex flex-col items-center justify-center text-center space-y-6">
            <h2 className="text-3xl font-semibold text-stone-900">You showed up today. That matters.</h2>
            <button 
              onClick={onComplete}
              className="px-8 py-3 bg-stone-200 text-stone-800 rounded-full font-medium hover:bg-stone-300 transition-colors"
            >
              Back to Home
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
