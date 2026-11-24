import React, { useState, useEffect } from 'react';
import { Wind, Play, Pause, RotateCcw } from 'lucide-react';

export const BreathingWidget: React.FC = () => {
  const [isActive, setIsActive] = useState(false);
  const [phase, setPhase] = useState<'tarik' | 'tahan' | 'hembuskan'>('tarik');
  const [secondsLeft, setSecondsLeft] = useState(4);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isActive) {
      timer = setInterval(() => {
        setSecondsLeft((prev) => {
          if (prev > 1) return prev - 1;

          // Transition phases in 4-7-8 breathing
          if (phase === 'tarik') {
            setPhase('tahan');
            return 7;
          } else if (phase === 'tahan') {
            setPhase('hembuskan');
            return 8;
          } else {
            setPhase('tarik');
            return 4;
          }
        });
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [isActive, phase]);

  const reset = () => {
    setIsActive(false);
    setPhase('tarik');
    setSecondsLeft(4);
  };

  const getPhaseText = () => {
    switch (phase) {
      case 'tarik':
        return 'Tarik napas perlahan lewat hidung...';
      case 'tahan':
        return 'Tahan napasmu dengan tenang...';
      case 'hembuskan':
        return 'Hembuskan perlahan lewat mulut...';
    }
  };

  const getCircleScale = () => {
    if (!isActive) return 'scale-100';
    switch (phase) {
      case 'tarik':
        return 'scale-125 transition-transform duration-[4000ms] ease-out';
      case 'tahan':
        return 'scale-125';
      case 'hembuskan':
        return 'scale-90 transition-transform duration-[8000ms] ease-in';
    }
  };

  return (
    <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#E8E2D5] shadow-card text-center max-w-md mx-auto">
      <div className="flex items-center justify-center gap-2 text-forest-700 mb-2">
        <Wind className="w-5 h-5 text-forest-700" />
        <h4 className="font-heading font-bold text-base">Latihan Pernapasan 4-7-8</h4>
      </div>
      <p className="text-xs text-forest-700/70 mb-6">
        Menenangkan sistem saraf saat cemas, marah, atau lelah berlebihan.
      </p>

      {/* Breathing Circle Visual */}
      <div className="h-44 flex items-center justify-center">
        <div
          className={`w-32 h-32 rounded-full bg-sage-200/60 border-4 border-sage-300 flex flex-col items-center justify-center transition-all ${getCircleScale()}`}
        >
          <span className="font-heading font-bold text-2xl text-forest-900">
            {secondsLeft}s
          </span>
          <span className="text-[11px] font-semibold text-forest-700/80 uppercase tracking-wider">
            {phase}
          </span>
        </div>
      </div>

      <p className="text-sm font-medium text-forest-800 min-h-[1.5rem] mb-6">
        {isActive ? getPhaseText() : 'Tekan mulai untuk bernapas bersama'}
      </p>

      {/* Controls */}
      <div className="flex items-center justify-center gap-3">
        <button
          onClick={() => setIsActive(!isActive)}
          className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full text-xs font-semibold bg-forest-700 text-white hover:bg-forest-800 transition-colors shadow-sm"
        >
          {isActive ? (
            <>
              <Pause className="w-4 h-4" />
              <span>Jeda</span>
            </>
          ) : (
            <>
              <Play className="w-4 h-4 fill-white" />
              <span>Mulai Bernapas</span>
            </>
          )}
        </button>
        <button
          onClick={reset}
          className="p-2.5 rounded-full text-forest-700/70 hover:text-forest-900 bg-forest-50 hover:bg-forest-100 transition-colors"
          title="Reset"
          aria-label="Reset latihan pernapasan"
        >
          <RotateCcw className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
