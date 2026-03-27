import React, { useState } from 'react';
import HomeScreen from './components/HomeScreen';
import TodayScreen from './components/TodayScreen';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<'home' | 'today'>('home');

  return (
    <div className="bg-stone-50 min-h-screen font-sans">
      {currentScreen === 'home' ? (
        <HomeScreen onStartToday={() => setCurrentScreen('today')} />
      ) : (
        <TodayScreen onComplete={() => setCurrentScreen('home')} />
      )}
    </div>
  );
}
