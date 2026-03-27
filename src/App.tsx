import React, { useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { ChevronLeft, ChevronRight, Map, Layers, BookOpen, PlayCircle, MessageCircle, Library, Compass, Settings, Plus, Play, Home } from 'lucide-react';
import { systemPaths, sampleDailyPractices, libraryData } from './data';

// --- ONBOARDING FLOW COMPONENT ---
function OnboardingFlow({ onComplete }: { onComplete: (layer: string, lifeStage: string) => void }) {
  const [step, setStep] = useState(1);
  const [selectedLayer, setSelectedLayer] = useState<string | null>(null);
  const [selectedLifeStage, setSelectedLifeStage] = useState<string | null>(null);

  const nextStep = () => setStep((prev) => prev + 1);

  const layers = [
    { id: "Guided", label: "My child and me", desc: "Parent-led, shared experience" },
    { id: "Emerging", label: "My teen and me", desc: "Shared ownership, guiding together" },
    { id: "Owning", label: "A young adult", desc: "Self-led, finding their way" },
    { id: "Living", label: "Just for me", desc: "Reflective, internalised practice" }
  ];

  const lifeStages = [
    "Starting something new",
    "Feeling stuck",
    "Building confidence",
    "Navigating relationships",
    "Finding direction"
  ];

  const variants = {
    initial: { opacity: 0, x: 20 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -20 }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center py-12 px-6 sm:px-12 bg-offwhite overflow-hidden">
      <AnimatePresence mode="wait">
        {step === 1 && (
          <motion.div
            key="step1"
            variants={variants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="max-w-2xl text-center space-y-8"
          >
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl text-charcoal leading-tight">
              Growth is a lifelong journey.
            </h1>
            <p className="text-lg sm:text-xl text-charcoal-muted font-light max-w-lg mx-auto">
              Sometimes we guide others, sometimes we walk alongside them, and sometimes we are finding our own way.
            </p>
            <div className="pt-12">
              <button onClick={nextStep} className="px-8 py-4 bg-sage text-white rounded-full text-sm tracking-widest uppercase hover:bg-sage-dark transition-colors shadow-warm-md">
                Begin
              </button>
            </div>
          </motion.div>
        )}

        {step === 2 && (
          <motion.div
            key="step2"
            variants={variants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="max-w-2xl text-center space-y-8"
          >
            <h1 className="font-serif text-4xl sm:text-5xl text-charcoal leading-tight">
              A system that grows with you.
            </h1>
            <p className="text-lg sm:text-xl text-charcoal-muted font-light max-w-lg mx-auto leading-relaxed">
              This isn't something you outgrow. It adapts to where you are right now.
            </p>
            <div className="pt-12">
              <button onClick={nextStep} className="px-8 py-4 bg-sage text-white rounded-full text-sm tracking-widest uppercase hover:bg-sage-dark transition-colors shadow-warm-md">
                Next
              </button>
            </div>
          </motion.div>
        )}

        {step === 3 && (
          <motion.div
            key="step3"
            variants={variants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="max-w-2xl text-center space-y-8"
          >
            <h1 className="font-serif text-4xl sm:text-5xl text-charcoal leading-tight italic">
              What if you didn't have to fix it?
            </h1>
            <p className="text-lg sm:text-xl text-charcoal-muted font-light max-w-lg mx-auto leading-relaxed">
              Instead of solving the problem, you can guide them—or yourself—through it. Step by step.
            </p>
            <div className="pt-12">
              <button onClick={nextStep} className="px-8 py-4 bg-sage text-white rounded-full text-sm tracking-widest uppercase hover:bg-sage-dark transition-colors shadow-warm-md">
                Next
              </button>
            </div>
          </motion.div>
        )}

        {step === 4 && (
          <motion.div
            key="step4"
            variants={variants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="max-w-2xl text-center space-y-12"
          >
            <h1 className="font-serif text-4xl sm:text-5xl text-charcoal leading-tight">
              Who is this for?
            </h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full max-w-xl mx-auto">
              {layers.map(layer => (
                <button
                  key={layer.id}
                  onClick={() => {
                    setSelectedLayer(layer.id);
                    nextStep();
                  }}
                  className={`py-6 px-6 rounded-3xl border transition-all duration-300 text-left ${
                    selectedLayer === layer.id 
                      ? 'border-sage bg-sage text-white shadow-warm-md' 
                      : 'border-sand bg-surface text-charcoal-muted hover:border-charcoal-light'
                  }`}
                >
                  <div className="font-bold text-lg">{layer.label}</div>
                  <div className={`text-sm mt-1 ${selectedLayer === layer.id ? 'text-sage-light' : 'text-charcoal-light'}`}>
                    {layer.desc}
                  </div>
                </button>
              ))}
            </div>
          </motion.div>
        )}

        {step === 5 && (
          <motion.div
            key="step5"
            variants={variants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="max-w-2xl text-center space-y-12"
          >
            <h1 className="font-serif text-4xl sm:text-5xl text-charcoal leading-tight">
              What is the focus?
            </h1>
            <div className="grid grid-cols-1 gap-3 w-full max-w-md mx-auto">
              {lifeStages.map(stage => (
                <button
                  key={stage}
                  onClick={() => {
                    setSelectedLifeStage(stage);
                    nextStep();
                  }}
                  className={`py-5 px-8 rounded-2xl border transition-all duration-300 text-lg font-medium text-center ${
                    selectedLifeStage === stage 
                      ? 'border-sage bg-sage text-white shadow-warm-md' 
                      : 'border-sand bg-surface text-charcoal-muted hover:border-charcoal-light'
                  }`}
                >
                  {stage}
                </button>
              ))}
            </div>
          </motion.div>
        )}

        {step === 6 && (
          <motion.div
            key="step6"
            variants={variants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="max-w-2xl text-center space-y-8"
          >
            <h1 className="font-serif text-4xl sm:text-5xl text-charcoal leading-tight">
              The path is ready.
            </h1>
            <p className="text-lg sm:text-xl text-charcoal-muted font-light max-w-lg mx-auto leading-relaxed">
              No lectures. No quick fixes. Just a quiet space to connect.
            </p>
            <div className="pt-12">
              <button 
                onClick={() => onComplete(selectedLayer || "Guided", selectedLifeStage || "Feeling stuck")} 
                className="px-8 py-4 bg-sage text-white rounded-full text-sm tracking-widest uppercase hover:bg-sage-dark transition-colors shadow-warm-lg"
              >
                Begin
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// --- HOME / ENTRY VIEW ---
function HomeView({ 
  activePath, 
  currentIndex,
  currentStepIndex,
  onStartJourney, 
  onContinueJourney,
  onStartDaily,
  onOpenLibrary,
  onOpenSettings,
  activePathId
}: { 
  activePath: any | null, 
  currentIndex: number,
  currentStepIndex: number,
  onStartJourney: (pathId: string) => void,
  onContinueJourney: () => void,
  onStartDaily: () => void,
  onOpenLibrary: () => void,
  onOpenSettings: () => void,
  activePathId: string | null
}) {
  const dayOptions = [
    { label: "A heavy or stuck day", pathId: "path-guided-stuck", icon: "🪨", color: "bg-stone-100" },
    { label: "A fluttery or nervous day", pathId: "path-guided-nervous", icon: "🦋", color: "bg-blue-50" },
    { label: "A quiet or lonely day", pathId: "path-guided-leftout", icon: "👤", color: "bg-slate-100" },
    { label: "A day where things went wrong", pathId: "path-guided-stuck", icon: "💥", color: "bg-orange-50" },
    { label: "Just a regular day", pathId: "path-guided-stuck", icon: "✨", color: "bg-sage/5" },
  ];

  return (
    <div className="min-h-screen flex flex-col items-center py-12 px-6 bg-offwhite">
      <nav className="w-full max-w-2xl mb-12 flex justify-end">
        <button onClick={onOpenSettings} className="p-2 text-charcoal-muted hover:text-charcoal transition-colors rounded-full hover:bg-sand">
          <Settings className="w-5 h-5" />
        </button>
      </nav>

      <div className="max-w-xl w-full text-center space-y-12">
        {activePathId ? (
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-surface rounded-[2.5rem] p-8 border border-sand shadow-warm-md text-left"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-full bg-sage/10 flex items-center justify-center text-sage">
                <Play className="w-6 h-6 fill-current" />
              </div>
              <div>
                <h3 className="font-bold text-charcoal uppercase tracking-widest text-xs">Welcome back</h3>
                <p className="text-charcoal-muted text-sm">
                  {currentIndex === 0 && currentStepIndex === 0 
                    ? `Ready to start ${activePath.title}?`
                    : `You're on Day ${currentIndex + 1} of ${activePath.title}`
                  }
                </p>
              </div>
            </div>
            <button 
              onClick={onContinueJourney}
              className="w-full py-4 bg-charcoal text-white rounded-full text-sm tracking-widest uppercase font-bold hover:bg-charcoal-muted transition-all"
            >
              {currentIndex === 0 && currentStepIndex === 0 ? 'Start Journey' : 'Continue Journey'}
            </button>
            <button 
              onClick={() => onStartJourney("")}
              className="w-full mt-4 text-xs font-bold uppercase tracking-widest text-charcoal-light hover:text-charcoal transition-colors"
            >
              Start something else
            </button>
          </motion.div>
        ) : (
          <>
            <div className="space-y-4 text-center">
              <h1 className="font-serif text-4xl sm:text-5xl text-charcoal leading-tight">
                What kind of day was it?
              </h1>
              <p className="text-lg text-charcoal-muted font-light">
                Pick the feeling that fits best tonight.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-3">
              {dayOptions.map((option) => (
                <button
                  key={option.label}
                  onClick={() => onStartJourney(option.pathId)}
                  className="group flex items-center justify-between p-6 bg-surface rounded-3xl border border-sand hover:border-charcoal-light transition-all hover:shadow-warm-md"
                >
                  <div className="flex items-center gap-4">
                    <span className="text-2xl">{option.icon}</span>
                    <span className="text-lg font-medium text-charcoal-muted group-hover:text-charcoal transition-colors">
                      {option.label}
                    </span>
                  </div>
                  <Plus className="w-5 h-5 text-sand group-hover:text-charcoal-light transition-colors" />
                </button>
              ))}
            </div>
          </>
        )}

        {/* Secondary Actions */}
        <div className="pt-8 flex flex-col items-center gap-6">
          <button 
            onClick={onStartDaily}
            className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-charcoal-muted hover:text-charcoal transition-colors"
          >
            <MessageCircle className="w-4 h-4" />
            Daily Practice
          </button>
          
          <button 
            onClick={onOpenLibrary}
            className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-charcoal-muted hover:text-charcoal transition-colors"
          >
            <Library className="w-4 h-4" />
            Family Library
          </button>
        </div>
      </div>
    </div>
  );
}

// --- SETTINGS VIEW ---
function SettingsView({ 
  currentLayer, 
  currentLifeStage, 
  onSave, 
  onCancel 
}: { 
  currentLayer: string, 
  currentLifeStage: string, 
  onSave: (layer: string, lifeStage: string) => void,
  onCancel: () => void
}) {
  const [selectedLayer, setSelectedLayer] = useState(currentLayer);
  const [selectedLifeStage, setSelectedLifeStage] = useState(currentLifeStage);

  const layers = [
    { id: "Guided", label: "Guided", desc: "For children. Parent-led and highly structured." },
    { id: "Emerging", label: "Emerging", desc: "For teens. Shared ownership and growing independence." },
    { id: "Owning", label: "Owning", desc: "For young adults. Self-led with occasional guidance." },
    { id: "Living", label: "Living", desc: "For adults. Fully internalized and reflective." }
  ];

  const lifeStages = [
    "Starting something new",
    "Feeling stuck",
    "Building confidence",
    "Navigating relationships",
    "Finding direction"
  ];

  return (
    <div className="min-h-screen flex flex-col items-center py-12 px-4 sm:px-8 bg-offwhite">
      <div className="w-full max-w-3xl mb-12 flex justify-between items-center">
        <button
          onClick={onCancel}
          className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-charcoal-muted hover:text-charcoal transition-colors"
        >
          <ChevronLeft className="w-5 h-5" />
          Back
        </button>
      </div>
      
      <div className="max-w-3xl w-full text-center space-y-12">
        <div className="space-y-4">
          <h1 className="font-serif text-4xl sm:text-5xl text-charcoal leading-tight">
            Settings
          </h1>
          <p className="text-lg text-charcoal-muted font-light">
            Update your current focus and experience layer.
          </p>
        </div>

        <div className="space-y-10 text-left max-w-xl mx-auto">
          <div className="space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-widest text-charcoal-light text-center">Who is this for?</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {layers.map(layer => (
                <button
                  key={layer.id}
                  onClick={() => setSelectedLayer(layer.id)}
                  className={`py-3 px-4 rounded-2xl border transition-all duration-300 text-left ${
                    selectedLayer === layer.id 
                      ? 'border-sage bg-sage text-white shadow-warm-md' 
                      : 'border-sand bg-surface text-charcoal-muted hover:border-charcoal-light'
                  }`}
                >
                  <div className="font-medium text-sm">{layer.label}</div>
                  <div className={`text-xs mt-1 ${selectedLayer === layer.id ? 'text-sage-light' : 'text-charcoal-light'}`}>
                    {layer.desc}
                  </div>
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-widest text-charcoal-light text-center">What is the focus?</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {lifeStages.map(stage => (
                <button
                  key={stage}
                  onClick={() => setSelectedLifeStage(stage)}
                  className={`py-4 px-6 rounded-2xl border transition-all duration-300 text-sm font-medium text-center ${
                    selectedLifeStage === stage 
                      ? 'border-sage bg-sage text-white shadow-warm-md' 
                      : 'border-sand bg-surface text-charcoal-muted hover:border-charcoal-light'
                  }`}
                >
                  {stage}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="pt-8">
          <button 
            onClick={() => onSave(selectedLayer, selectedLifeStage)} 
            className="px-8 py-4 bg-sage text-white rounded-full text-sm tracking-widest uppercase hover:bg-sage-dark transition-colors shadow-warm-lg"
          >
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
}

// --- MAIN JOURNEY COMPONENT ---
function JourneyView({ 
  path,
  currentIndex,
  setCurrentIndex,
  currentStepIndex,
  setCurrentStepIndex,
  completedDays,
  setCompletedDays,
  interactionState,
  setInteractionState,
  onOpenLibrary, 
  onCompleteJourney, 
  onExit
}: { 
  path: any,
  currentIndex: number,
  setCurrentIndex: React.Dispatch<React.SetStateAction<number>>,
  currentStepIndex: number,
  setCurrentStepIndex: React.Dispatch<React.SetStateAction<number>>,
  completedDays: Record<string, boolean>,
  setCompletedDays: React.Dispatch<React.SetStateAction<Record<string, boolean>>>,
  interactionState: Record<string, string>,
  setInteractionState: React.Dispatch<React.SetStateAction<Record<string, string>>>,
  onOpenLibrary: () => void, 
  onCompleteJourney: () => void, 
  onExit: () => void
}) {
  const [direction, setDirection] = useState(0);
  const [showSkipConfirm, setShowSkipConfirm] = useState(false);
  const [showHomeMenu, setShowHomeMenu] = useState(false);

  const stages = path.stages;
  const currentStage = stages[currentIndex];
  const currentStep = currentStage.steps[currentStepIndex];

  const nextStep = () => {
    if (currentStepIndex < currentStage.steps.length - 1) {
      setDirection(1);
      setCurrentStepIndex((prev) => prev + 1);
    } else {
      handleComplete();
    }
  };

  const prevStep = () => {
    if (currentStepIndex > 0) {
      setDirection(-1);
      setCurrentStepIndex((prev) => prev - 1);
    }
  };

  const handleComplete = () => {
    setCompletedDays(prev => ({ ...prev, [currentStage.id]: true }));
    if (currentIndex < stages.length - 1) {
      setCurrentIndex(prev => prev + 1);
      setCurrentStepIndex(0);
      onExit(); // Go back to home after finishing a day
    } else {
      onCompleteJourney();
    }
  };

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 50 : (direction < 0 ? -50 : 0),
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 50 : (direction > 0 ? -50 : 0),
      opacity: 0,
    }),
  };

  // Calculate progress
  const progressPercentage = ((currentIndex) / stages.length) * 100;

  return (
    <div className="min-h-screen flex flex-col items-center py-12 px-4 sm:px-8 overflow-x-hidden bg-offwhite">
      <nav className="w-full max-w-2xl mb-8 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <button onClick={prevStep} className="p-2 text-charcoal-muted hover:text-charcoal transition-colors">
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button onClick={() => setShowHomeMenu(true)} className="p-2 text-charcoal-muted hover:text-charcoal transition-colors">
            <Home className="w-5 h-5" />
          </button>
        </div>
        <div className="flex-grow mx-4 h-1 bg-sand rounded-full overflow-hidden">
          <div className="h-full bg-sage transition-all duration-500" style={{ width: `${progressPercentage}%` }}></div>
        </div>
        <div className="text-xs font-bold uppercase tracking-widest text-charcoal-light">
          Day {currentIndex + 1}
        </div>
      </nav>

      <div className="relative w-full max-w-2xl flex-grow flex flex-col">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={`${path.id}-${currentIndex}-${currentStepIndex}`}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="flex-grow flex flex-col justify-center items-center text-center px-4"
          >
            {/* Parent Whisper Mode */}
            {currentStep.parentGuidance && (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="mb-12 px-6 py-3 bg-sage/5 rounded-2xl border border-sage/10 max-w-sm"
              >
                <p className="text-[11px] font-medium leading-relaxed text-sage-dark/70 italic text-center">
                  {currentStep.parentGuidance}
                </p>
              </motion.div>
            )}

            {/* Main Content */}
            <div className="space-y-8 max-w-lg">
              {!['whisper', 'identity', 'micro-moment'].includes(currentStep.type) && (
                <h2 className={`font-serif leading-tight text-charcoal ${
                  currentStep.type === 'story' ? 'text-3xl sm:text-4xl italic' : 
                  currentStep.type === 'question' ? 'text-2xl sm:text-3xl' :
                  'text-xl sm:text-2xl'
                }`}>
                  {currentStep.content}
                </h2>
              )}

              {/* Interaction Elements */}
              {currentStep.type === 'choice' && (
                <div className="flex flex-wrap justify-center gap-3 pt-4">
                  {currentStep.options?.map(option => (
                    <button
                      key={option}
                      onClick={() => {
                        setInteractionState(prev => ({ ...prev, [currentStep.id]: option }));
                        setTimeout(nextStep, 400);
                      }}
                      className={`px-6 py-3 rounded-full text-sm font-medium transition-all ${
                        interactionState[currentStep.id] === option
                          ? 'bg-sage text-white shadow-warm-md scale-105'
                          : 'bg-surface text-charcoal-muted border border-sand hover:border-charcoal-light'
                      }`}
                    >
                      {option}
                    </button>
                  ))}
                </div>
              )}

              {currentStep.type === 'whisper' && (
                <p className="text-lg text-charcoal-muted font-light italic">
                  {currentStep.content}
                </p>
              )}

              {currentStep.type === 'identity' && (
                <div className="bg-sage/10 rounded-3xl p-8 border border-sage/20">
                  <p className="text-xl font-serif font-medium text-charcoal">
                    "{currentStep.content}"
                  </p>
                </div>
              )}

              {currentStep.type === 'micro-moment' && (
                <div className="py-12">
                  <p className="text-2xl font-serif italic leading-relaxed text-charcoal/80">
                    {currentStep.content}
                  </p>
                </div>
              )}
            </div>

            {/* Navigation Buttons */}
            <div className="mt-16 flex flex-col items-center gap-6 w-full">
              {currentStep.type !== 'choice' && (
                <button 
                  onClick={nextStep}
                  className="px-12 py-4 bg-charcoal text-white rounded-full text-sm tracking-widest uppercase hover:bg-charcoal-muted transition-all shadow-warm-lg active:scale-95"
                >
                  {currentStepIndex === currentStage.steps.length - 1 ? 'Finish Day' : 'Next'}
                </button>
              )}

              <div className="flex items-center gap-8">
                <button
                  onClick={prevStep}
                  disabled={currentStepIndex === 0}
                  className={`text-[10px] font-bold uppercase tracking-widest transition-colors ${
                    currentStepIndex === 0 ? 'text-sand cursor-not-allowed' : 'text-charcoal-light hover:text-charcoal'
                  }`}
                >
                  Back
                </button>

                <button
                  onClick={() => setShowSkipConfirm(true)}
                  className="text-[10px] font-bold uppercase tracking-widest text-charcoal-light hover:text-charcoal transition-colors"
                >
                  Not today
                </button>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Skip Confirmation Modal */}
        <AnimatePresence>
          {showSkipConfirm && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center bg-charcoal/40 backdrop-blur-sm p-6"
            >
              <motion.div 
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="bg-surface rounded-[2rem] p-8 max-w-sm w-full shadow-warm-xl text-center"
              >
                <h3 className="font-serif text-2xl text-charcoal mb-4">Take a break?</h3>
                <p className="text-charcoal-muted mb-8">It's totally okay to skip a day. We'll be here when you're ready.</p>
                <div className="flex flex-col gap-3">
                  <button 
                    onClick={onExit}
                    className="w-full py-4 bg-sage text-white rounded-full text-sm tracking-widest uppercase font-bold"
                  >
                    Skip for now
                  </button>
                  <button 
                    onClick={() => setShowSkipConfirm(false)}
                    className="w-full py-4 bg-surface text-charcoal-light rounded-full text-sm tracking-widest uppercase font-bold border border-sand"
                  >
                    Keep going
                  </button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Home Menu Modal */}
        <AnimatePresence>
          {showHomeMenu && (
            <HomeMenu 
              onReturnHome={onExit}
              onStartAgain={() => {
                setCurrentIndex(0);
                setCurrentStepIndex(0);
                setInteractionState({});
                onExit();
              }}
              onCancel={() => setShowHomeMenu(false)}
            />
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

// --- FAMILY LIBRARY COMPONENT ---
function FamilyLibrary({ 
  layer, 
  lifeStage, 
  onBack,
  onSelectPath
}: { 
  layer: string, 
  lifeStage: string, 
  onBack: () => void,
  onSelectPath: (pathId: string) => void
}) {
  // Get books based on layer and lifeStage, fallback to empty array if not found
  const lifeStageBooks = libraryData.lifeStages[lifeStage] || [];
  const layerBooks = libraryData.layers[layer] || [];

  const librarySections = [
    {
      title: `Books about ${lifeStage.toLowerCase()}`,
      description: `Hand-picked stories to help explore ${lifeStage.toLowerCase()} together.`,
      books: lifeStageBooks
    },
    {
      title: `For ${layer.toLowerCase()} journeys`,
      description: "Stories that match where you are right now.",
      books: layerBooks
    }
  ].filter(section => section.books.length > 0); // Only show sections with books

  return (
    <div className="min-h-screen flex flex-col items-center py-12 px-4 sm:px-8 bg-offwhite">
      <div className="w-full max-w-4xl mb-12 flex justify-between items-center">
        <div className="flex items-center gap-4">
          <button
            onClick={onBack}
            className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-charcoal-muted hover:text-charcoal transition-colors"
          >
            <ChevronLeft className="w-5 h-5" />
            Back
          </button>
          <button
            onClick={onBack}
            className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-charcoal-muted hover:text-charcoal transition-colors"
          >
            <Home className="w-5 h-5" />
            Home
          </button>
        </div>
      </div>

      <header className="mb-16 text-center max-w-3xl w-full">
        <div className="inline-flex items-center justify-center gap-2 px-4 py-1.5 rounded-full bg-sand text-charcoal-muted text-xs font-bold uppercase tracking-widest mb-6">
          <Library className="w-4 h-4" />
          Family Library
        </div>
        <h1 className="font-serif text-4xl sm:text-5xl italic text-charcoal mb-4">Your Collection</h1>
        <p className="text-charcoal-muted text-sm sm:text-base max-w-xl mx-auto">
          Personalised stories and resources to help bring these conversations into your everyday life.
        </p>
      </header>

      <div className="w-full max-w-4xl space-y-16">
        {librarySections.map((section, idx) => (
          <section key={idx}>
            <div className="mb-8">
              <h2 className="font-serif text-2xl sm:text-3xl text-charcoal mb-2">{section.title}</h2>
              <p className="text-charcoal-muted">{section.description}</p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {section.books.map((book, bookIdx) => (
                <div key={bookIdx} className="bg-surface rounded-2xl p-6 shadow-warm-sm border border-sand hover:shadow-warm-md transition-shadow">
                  <div className="w-full aspect-[3/4] bg-sand/30 rounded-xl mb-4 flex items-center justify-center">
                    <BookOpen className="w-8 h-8 text-charcoal-light/50" />
                  </div>
                  <span className="inline-block px-2 py-1 bg-sage/10 text-sage-dark text-[10px] uppercase tracking-widest font-bold rounded-md mb-3">
                    {book.theme}
                  </span>
                  <h3 className="font-medium text-charcoal leading-snug mb-1">{book.title}</h3>
                  <p className="text-sm text-charcoal-muted">by {book.author}</p>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}

// --- POST JOURNEY TRANSITION ---
function PostJourneyTransition({ onContinue }: { onContinue: () => void }) {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center py-12 px-6 sm:px-12 bg-offwhite overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-2xl text-center space-y-8"
      >
        <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-sage/10 text-sage mb-4">
          <PlayCircle className="w-10 h-10 fill-current" />
        </div>
        <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl text-charcoal leading-tight italic">
          You finished the week.
        </h1>
        <p className="text-lg sm:text-xl text-charcoal-muted font-light max-w-lg mx-auto leading-relaxed">
          Take a moment to notice how it feels to have walked this path together. 
          You're building something that lasts.
        </p>
        <div className="pt-12">
          <button 
            onClick={onContinue} 
            className="px-12 py-4 bg-charcoal text-white rounded-full text-sm tracking-widest uppercase hover:bg-charcoal-muted transition-all shadow-warm-lg"
          >
            Return Home
          </button>
        </div>
      </motion.div>
    </div>
  );
}

// --- DAILY PRACTICE VIEW ---
function DailyPracticeView({ 
  layer, 
  lifeStage, 
  onOpenLibrary, 
  onSwitchToJourney,
  onOpenSettings,
  onExit
}: { 
  layer: string, 
  lifeStage: string, 
  onOpenLibrary: () => void, 
  onSwitchToJourney: () => void,
  onOpenSettings: () => void,
  onExit: () => void
}) {
  // Find a daily practice that matches the layer and life stage, or just use the first available one
  const availablePractices = sampleDailyPractices.filter(p => p.layer === layer && p.lifeStage === lifeStage);
  const practice = availablePractices.length > 0 ? availablePractices[0] : sampleDailyPractices[0];
  const [isCompleted, setIsCompleted] = useState(false);
  const [showHomeMenu, setShowHomeMenu] = useState(false);

  return (
    <div className="min-h-screen flex flex-col items-center py-12 px-4 sm:px-8 overflow-x-hidden bg-offwhite">
      {/* Navigation / Mode Switcher */}
      <nav className="w-full max-w-4xl mb-12 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <button onClick={onExit} className="p-2 text-charcoal-muted hover:text-charcoal transition-colors">
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button onClick={() => setShowHomeMenu(true)} className="p-2 text-charcoal-muted hover:text-charcoal transition-colors">
            <Home className="w-5 h-5" />
          </button>
        </div>
        <div className="flex items-center gap-4">
          <button
            onClick={onSwitchToJourney}
            className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-charcoal-muted hover:text-charcoal transition-colors"
          >
            <Map className="w-4 h-4" />
            Full Journeys
          </button>
          <div className="inline-flex items-center justify-center gap-2 px-4 py-1.5 rounded-full bg-sage/10 text-sage-dark text-xs font-bold uppercase tracking-widest">
            Daily Practice
          </div>
        </div>
        <button
          onClick={onOpenSettings}
          className="p-2 text-charcoal-muted hover:text-charcoal transition-colors rounded-full hover:bg-sand"
          aria-label="Settings"
        >
          <Settings className="w-5 h-5" />
        </button>
      </nav>

      <header className="mb-12 text-center max-w-3xl w-full">
        <h1 className="font-serif text-4xl sm:text-5xl italic text-charcoal mb-4">Today's Practice</h1>
        <p className="text-charcoal-muted text-sm sm:text-base max-w-xl mx-auto">
          A short reflection, a small action, and a moment to connect. Less than 3 minutes.
        </p>
      </header>

      <div className="relative w-full max-w-2xl mt-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          className="bg-surface rounded-[2rem] shadow-warm-sm border border-sand p-8 sm:p-12"
        >
          <div className="mb-10 text-center">
            <span className="inline-block text-xs font-semibold tracking-widest uppercase text-sage mb-2">
              {practice.layer} • {practice.lifeStage}
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-medium leading-tight text-charcoal">
              {practice.title}
            </h2>
          </div>

          <div className="space-y-10">
            {/* Reflection */}
            <section>
              <h3 className="text-xs font-bold uppercase tracking-widest text-charcoal-light mb-3">Reflection</h3>
              <p className="text-lg sm:text-xl leading-relaxed text-charcoal">
                {practice.reflection}
              </p>
            </section>

            {/* Action */}
            <section className="bg-offwhite rounded-3xl p-6 sm:p-8 border border-sand">
              <h3 className="text-xs font-bold uppercase tracking-widest text-charcoal-light mb-3">Small Action</h3>
              <p className="text-base sm:text-lg leading-relaxed text-charcoal">
                {practice.action}
              </p>
            </section>

            {/* Connection Prompt */}
            <section className="relative pl-6 sm:pl-8 border-l-2 border-sage/30">
              <h3 className="text-xs font-bold uppercase tracking-widest text-sage mb-3">{practice.connectionTitle}</h3>
              <p className="text-lg sm:text-xl font-serif italic leading-relaxed text-charcoal">
                "{practice.connection}"
              </p>
            </section>

            {/* Identity Statement */}
            <section className="bg-sage/10 rounded-3xl p-6 sm:p-8 border border-sage/20 text-center mt-8">
              <h3 className="text-xs font-bold uppercase tracking-widest text-sage-dark mb-3">Who you are becoming</h3>
              <p className="text-lg sm:text-xl font-serif font-medium text-charcoal">
                "{practice.identityStatement}"
              </p>
            </section>

            {/* Completion Section */}
            <section className="pt-8 text-center">
              {!isCompleted ? (
                <button 
                  onClick={() => setIsCompleted(true)}
                  className="px-8 py-4 bg-charcoal text-white rounded-full text-sm tracking-widest uppercase hover:bg-charcoal-muted transition-colors shadow-warm-md"
                >
                  Mark Today Complete
                </button>
              ) : (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-sage/10 rounded-2xl p-6 border border-sage/30 inline-block"
                >
                  <p className="text-lg font-serif italic text-sage-dark">
                    "You showed up today. That's how this works."
                  </p>
                </motion.div>
              )}
            </section>

            {/* Family Library Integration */}
            <section className="mt-8 pt-8 border-t border-sand text-center">
              <h3 className="text-xs font-bold uppercase tracking-widest text-charcoal-light mb-4">Keep growing together</h3>
              <button
                onClick={onOpenLibrary}
                className="inline-flex items-center gap-2 px-6 py-3 bg-surface border border-sand rounded-full text-sm font-medium text-charcoal hover:bg-sand transition-colors"
              >
                <Library className="w-4 h-4" />
                Explore the Family Library
              </button>
            </section>
          </div>
        </motion.div>
      </div>
      
      <AnimatePresence>
        {showHomeMenu && (
          <HomeMenu 
            onReturnHome={onExit}
            onStartAgain={() => {
              setIsCompleted(false);
              onExit();
            }}
            onCancel={() => setShowHomeMenu(false)}
          />
        )}
      </AnimatePresence>
    </div>
  );
}

function HomeMenu({ 
  onReturnHome, 
  onStartAgain, 
  onCancel 
}: { 
  onReturnHome: () => void, 
  onStartAgain: () => void, 
  onCancel: () => void 
}) {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-charcoal/40 backdrop-blur-sm p-6"
    >
      <motion.div 
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        className="bg-surface rounded-[2rem] p-8 max-w-sm w-full shadow-warm-xl text-center"
      >
        <h3 className="font-serif text-2xl text-charcoal mb-8">Where to next?</h3>
        <div className="flex flex-col gap-3">
          <button 
            onClick={onReturnHome}
            className="w-full py-4 bg-sage text-white rounded-full text-sm tracking-widest uppercase font-bold"
          >
            Return Home
          </button>
          <button 
            onClick={onStartAgain}
            className="w-full py-4 bg-surface text-charcoal rounded-full text-sm tracking-widest uppercase font-bold border border-sand"
          >
            Start Again
          </button>
          <button 
            onClick={onCancel}
            className="w-full py-4 text-charcoal-light rounded-full text-sm tracking-widest uppercase font-bold"
          >
            Cancel
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
}


// --- ROOT APP ---
export default function App() {
  // Persistence
  const [hasCompletedOnboarding, setHasCompletedOnboarding] = useState(() => {
    const saved = localStorage.getItem('hasCompletedOnboarding');
    return saved ? JSON.parse(saved) : false;
  });
  const [selectedLayer, setSelectedLayer] = useState(() => {
    return localStorage.getItem('selectedLayer') || "Guided";
  });
  const [selectedLifeStage, setSelectedLifeStage] = useState(() => {
    return localStorage.getItem('selectedLifeStage') || "Feeling stuck";
  });
  const [view, setView] = useState<'home' | 'journey' | 'daily' | 'settings' | 'library' | 'transition'>(() => {
    return (localStorage.getItem('view') as any) || "home";
  });
  const [activePathId, setActivePathId] = useState<string | null>(() => {
    return localStorage.getItem('activePathId');
  });
  const [completedDays, setCompletedDays] = useState<Record<string, boolean>>(() => {
    const saved = localStorage.getItem('completedDays');
    return saved ? JSON.parse(saved) : {};
  });

  // Journey Progress State
  const [currentIndex, setCurrentIndex] = useState(() => {
    const saved = localStorage.getItem('currentIndex');
    return saved ? JSON.parse(saved) : 0;
  });
  const [currentStepIndex, setCurrentStepIndex] = useState(() => {
    const saved = localStorage.getItem('currentStepIndex');
    return saved ? JSON.parse(saved) : 0;
  });
  const [interactionState, setInteractionState] = useState<Record<string, string>>(() => {
    const saved = localStorage.getItem('interactionState');
    return saved ? JSON.parse(saved) : {};
  });

  // Save to localStorage
  React.useEffect(() => {
    localStorage.setItem('hasCompletedOnboarding', JSON.stringify(hasCompletedOnboarding));
    localStorage.setItem('selectedLayer', selectedLayer);
    localStorage.setItem('selectedLifeStage', selectedLifeStage);
    localStorage.setItem('view', view);
    localStorage.setItem('activePathId', activePathId || '');
    localStorage.setItem('completedDays', JSON.stringify(completedDays));
    localStorage.setItem('currentIndex', JSON.stringify(currentIndex));
    localStorage.setItem('currentStepIndex', JSON.stringify(currentStepIndex));
    localStorage.setItem('interactionState', JSON.stringify(interactionState));
  }, [hasCompletedOnboarding, selectedLayer, selectedLifeStage, view, activePathId, completedDays, currentIndex, currentStepIndex, interactionState]);

  const handleOnboardingComplete = (layer: string, lifeStage: string) => {
    setSelectedLayer(layer);
    setSelectedLifeStage(lifeStage);
    setHasCompletedOnboarding(true);
    setView("home");
    
    // Set initial path based on selection
    const firstPath = systemPaths.find(p => p.layer === layer) || systemPaths[0];
    setActivePathId(firstPath.id);
    setCurrentIndex(0);
    setCurrentStepIndex(0);
    setInteractionState({});
  };

  const handleSettingsSave = (layer: string, lifeStage: string) => {
    setSelectedLayer(layer);
    setSelectedLifeStage(lifeStage);
    setView("home");
    
    const newPath = systemPaths.find(p => p.layer === layer) || systemPaths[0];
    setActivePathId(newPath.id);
    setCurrentIndex(0);
    setCurrentStepIndex(0);
    setInteractionState({});
  };

  const activePath = systemPaths.find(p => p.id === activePathId) || systemPaths[0];

  return (
    <AnimatePresence mode="wait">
      {!hasCompletedOnboarding ? (
        <motion.div key="onboarding" exit={{ opacity: 0 }} transition={{ duration: 0.5 }}>
          <OnboardingFlow onComplete={handleOnboardingComplete} />
        </motion.div>
      ) : view === "home" ? (
        <motion.div key="home" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }}>
          <HomeView 
            activePath={activePath}
            currentIndex={currentIndex}
            currentStepIndex={currentStepIndex}
            activePathId={activePathId}
            onStartJourney={(pathId) => {
              setActivePathId(pathId);
              setCurrentIndex(0);
              setCurrentStepIndex(0);
              setView("journey");
            }}
            onContinueJourney={() => setView("journey")}
            onStartDaily={() => setView("daily")}
            onOpenLibrary={() => setView("library")}
            onOpenSettings={() => setView("settings")}
          />
        </motion.div>
      ) : view === "settings" ? (
        <motion.div key="settings" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }}>
          <SettingsView 
            currentLayer={selectedLayer} 
            currentLifeStage={selectedLifeStage} 
            onSave={handleSettingsSave} 
            onCancel={() => setView("home")} 
          />
        </motion.div>
      ) : view === "library" ? (
        <motion.div key="library" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }}>
          <FamilyLibrary 
            layer={selectedLayer} 
            lifeStage={selectedLifeStage} 
            onBack={() => setView("home")} 
            onSelectPath={(pathId) => {
              setActivePathId(pathId);
              setCurrentIndex(0);
              setCurrentStepIndex(0);
              setView("journey");
            }}
          />
        </motion.div>
      ) : view === "transition" ? (
        <motion.div key="transition" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }}>
          <PostJourneyTransition onContinue={() => setView("home")} />
        </motion.div>
      ) : view === "daily" ? (
        <motion.div key="daily" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }}>
          <DailyPracticeView 
            layer={selectedLayer} 
            lifeStage={selectedLifeStage} 
            onOpenLibrary={() => setView("library")} 
            onSwitchToJourney={() => setView("journey")} 
            onOpenSettings={() => setView("settings")}
            onExit={() => setView("home")}
          />
        </motion.div>
      ) : (
        <motion.div key="journey" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.8, delay: 0.2 }}>
          <JourneyView 
            path={activePath}
            currentIndex={currentIndex}
            setCurrentIndex={setCurrentIndex}
            currentStepIndex={currentStepIndex}
            setCurrentStepIndex={setCurrentStepIndex}
            completedDays={completedDays}
            setCompletedDays={setCompletedDays}
            interactionState={interactionState}
            setInteractionState={setInteractionState}
            onOpenLibrary={() => setView("library")} 
            onCompleteJourney={() => setView("transition")}
            onExit={() => setView("home")}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
