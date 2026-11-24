import React from 'react';

interface EmotProps {
  className?: string;
}

export const EmotSenang: React.FC<EmotProps> = ({ className = "w-10 h-10" }) => (
  <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <circle cx="32" cy="32" r="30" fill="#FAF4D2" stroke="#294C3A" strokeWidth="2.5" />
    {/* Joyful crescent eyes */}
    <path d="M20 28C22 23 26 23 28 28" stroke="#294C3A" strokeWidth="3" strokeLinecap="round" />
    <path d="M36 28C38 23 42 23 44 28" stroke="#294C3A" strokeWidth="3" strokeLinecap="round" />
    {/* Blushing cheeks */}
    <ellipse cx="18" cy="35" rx="4" ry="2.5" fill="#F5D6C7" />
    <ellipse cx="46" cy="35" rx="4" ry="2.5" fill="#F5D6C7" />
    {/* Wide happy open smile */}
    <path d="M22 36C22 44 42 44 42 36H22Z" fill="#294C3A" stroke="#294C3A" strokeWidth="2" strokeLinejoin="round" />
    <path d="M27 41C29 43 35 43 37 41" fill="#FFAAA6" />
    {/* Cute sparkle */}
    <path d="M52 14L54 11L56 14L59 16L56 18L54 21L52 18L49 16L52 14Z" fill="#F5E8A8" stroke="#294C3A" strokeWidth="1" />
  </svg>
);

export const EmotBiasa: React.FC<EmotProps> = ({ className = "w-10 h-10" }) => (
  <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <circle cx="32" cy="32" r="30" fill="#E2EEFA" stroke="#294C3A" strokeWidth="2.5" />
    {/* Calm round eyes with white highlights */}
    <circle cx="23" cy="28" r="3.5" fill="#294C3A" />
    <circle cx="41" cy="28" r="3.5" fill="#294C3A" />
    <circle cx="24" cy="27" r="1.2" fill="#FFFFFF" />
    <circle cx="42" cy="27" r="1.2" fill="#FFFFFF" />
    {/* Gentle soft smile */}
    <path d="M26 38C29 40 35 40 38 38" stroke="#294C3A" strokeWidth="3" strokeLinecap="round" />
  </svg>
);

export const EmotSedih: React.FC<EmotProps> = ({ className = "w-10 h-10" }) => (
  <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <circle cx="32" cy="32" r="30" fill="#FDEDE6" stroke="#294C3A" strokeWidth="2.5" />
    {/* Eyebrows slant sad */}
    <path d="M19 23C22 25 26 26 28 25" stroke="#294C3A" strokeWidth="2.5" strokeLinecap="round" />
    <path d="M45 23C42 25 38 26 36 25" stroke="#294C3A" strokeWidth="2.5" strokeLinecap="round" />
    {/* Sad big shiny eyes */}
    <circle cx="24" cy="29" r="4" fill="#294C3A" />
    <circle cx="40" cy="29" r="4" fill="#294C3A" />
    <circle cx="23" cy="28" r="1.5" fill="#FFFFFF" />
    <circle cx="39" cy="28" r="1.5" fill="#FFFFFF" />
    {/* Small tear drop */}
    <path d="M44 34C44 34 47 37 47 39C47 40.5 45.8 41.5 44 41.5C42.2 41.5 41 40.5 41 39C41 37 44 34 44 34Z" fill="#BAD7F5" stroke="#294C3A" strokeWidth="1" />
    {/* Downward curve mouth */}
    <path d="M26 42C29 39 35 39 38 42" stroke="#294C3A" strokeWidth="3" strokeLinecap="round" />
  </svg>
);

export const EmotCemas: React.FC<EmotProps> = ({ className = "w-10 h-10" }) => (
  <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <circle cx="32" cy="32" r="30" fill="#FDEFE6" stroke="#294C3A" strokeWidth="2.5" />
    {/* Worried raised eyebrows */}
    <path d="M20 22C23 20 26 21 28 23" stroke="#294C3A" strokeWidth="2.5" strokeLinecap="round" />
    <path d="M44 22C41 20 38 21 36 23" stroke="#294C3A" strokeWidth="2.5" strokeLinecap="round" />
    {/* Wide surprised/anxious eyes */}
    <circle cx="24" cy="28" r="4.5" fill="#294C3A" />
    <circle cx="40" cy="28" r="4.5" fill="#294C3A" />
    <circle cx="25" cy="27" r="1.5" fill="#FFFFFF" />
    <circle cx="41" cy="27" r="1.5" fill="#FFFFFF" />
    {/* Nervous sweat drop */}
    <path d="M48 16C48 16 51 19 51 21C51 22.5 49.8 23.5 48 23.5C46.2 23.5 45 22.5 45 21C45 19 48 16 48 16Z" fill="#DCEBFA" stroke="#294C3A" strokeWidth="1" />
    {/* Wavy mouth */}
    <path d="M25 40C28 38 31 42 34 39C37 36 39 40 40 39" stroke="#294C3A" strokeWidth="2.5" strokeLinecap="round" />
  </svg>
);

export const EmotLelah: React.FC<EmotProps> = ({ className = "w-10 h-10" }) => (
  <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <circle cx="32" cy="32" r="30" fill="#EDF5EF" stroke="#294C3A" strokeWidth="2.5" />
    {/* Sleepy droopy straight line eyes */}
    <path d="M19 29L28 30" stroke="#294C3A" strokeWidth="3" strokeLinecap="round" />
    <path d="M36 30L45 29" stroke="#294C3A" strokeWidth="3" strokeLinecap="round" />
    {/* Sleepy small open mouth / yawn */}
    <ellipse cx="32" cy="40" rx="3.5" ry="5" fill="#294C3A" />
    {/* Floating Zzz */}
    <path d="M46 14H50L46 19H50" stroke="#3D6C53" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M52 8H55L52 12H55" stroke="#3D6C53" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const MoodIcon: React.FC<{ mood: string; className?: string }> = ({ mood, className = "w-10 h-10" }) => {
  switch (mood) {
    case 'senang':
      return <EmotSenang className={className} />;
    case 'biasa':
      return <EmotBiasa className={className} />;
    case 'sedih':
      return <EmotSedih className={className} />;
    case 'cemas':
      return <EmotCemas className={className} />;
    case 'lelah':
      return <EmotLelah className={className} />;
    default:
      return <EmotBiasa className={className} />;
  }
};
