'use client';
import { useState, useEffect } from 'react';
import { journeyData } from '@/data/journey';
import { getProgress, markDayComplete } from '@/lib/store';
import ProgressRow from '@/components/ProgressRow';
import Link from 'next/link';

export default function Home() {
  const [progress, setProgress] = useState(getProgress());

  useEffect(() => {
    setProgress(getProgress());
  }, []);

  const currentPhase = journeyData[progress.phaseIndex];
  const currentWeek = currentPhase.weeks[progress.weekIndex];
  const todayStep = currentWeek.days[progress.dayIndex];

  return (
    <div className="max-w-md mx-auto p-6 pt-12 space-y-8">
      <div className="space-y-2">
        <h2 className="text-sm font-medium text-emerald-800 uppercase tracking-widest">{currentPhase.title}</h2>
        <h1 className="text-2xl font-semibold text-stone-900">{currentWeek.title}</h1>
      </div>

      <div className="bg-white p-6 rounded-3xl shadow-sm border border-stone-100 space-y-4">
        <p className="text-sm text-stone-500 uppercase tracking-wider">Today's Step</p>
        <h3 className="text-xl font-medium text-stone-900">{todayStep.title}</h3>
        <Link 
          href="/today"
          className="block w-full py-4 bg-emerald-600 text-white rounded-full font-medium text-center hover:bg-emerald-700 transition-colors"
        >
          Start Today
        </Link>
      </div>

      <ProgressRow progress={progress} />
    </div>
  );
}
