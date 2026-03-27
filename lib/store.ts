const STORAGE_KEY = 'lumina_progress';

export function getProgress() {
  if (typeof window === 'undefined') return { phaseIndex: 0, weekIndex: 0, dayIndex: 0, completedDays: 0, streak: 0 };
  const saved = localStorage.getItem(STORAGE_KEY);
  return saved ? JSON.parse(saved) : { phaseIndex: 0, weekIndex: 0, dayIndex: 0, completedDays: 0, streak: 0 };
}

export function markDayComplete() {
  const progress = getProgress();
  progress.dayIndex += 1;
  progress.completedDays += 1;
  progress.streak += 1;
  
  if (progress.dayIndex >= 5) {
    progress.dayIndex = 0;
    progress.weekIndex += 1;
  }
  
  if (progress.weekIndex >= 3) {
    progress.weekIndex = 0;
    progress.phaseIndex += 1;
  }

  localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
}
