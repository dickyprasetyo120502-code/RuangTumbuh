import React from 'react';

// Brand Sprout Logo Icon
export const SproutLogo: React.FC<{ className?: string }> = ({ className = "w-6 h-6 text-forest-700" }) => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path d="M12 22V12" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M12 12C12 7.5 8 5 4 6C4 10 7 13 12 13" fill="#B9D6C2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M12 10C12 6 15.5 3.5 19 4.5C19 8.5 16 11.5 12 11.5" fill="#DCEBFA" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

// Potted Happy Sprout Plant (for "Pesan Hari Ini")
export const PottedPlantIllustration: React.FC<{ className?: string }> = ({ className = "w-28 h-28" }) => (
  <svg viewBox="0 0 160 160" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    {/* Leaves */}
    <path d="M80 75C80 50 60 35 45 40C45 60 62 75 80 75Z" fill="#B9D6C2" stroke="#294C3A" strokeWidth="3" strokeLinejoin="round"/>
    <path d="M80 65C80 40 100 25 115 30C115 50 98 65 80 65Z" fill="#9EC2A8" stroke="#294C3A" strokeWidth="3" strokeLinejoin="round"/>
    <path d="M80 90V65" stroke="#294C3A" strokeWidth="3.5" strokeLinecap="round"/>
    
    {/* Cute Pot Body */}
    <rect x="52" y="85" width="56" height="50" rx="14" fill="#F5E8A8" stroke="#294C3A" strokeWidth="3"/>
    <path d="M48 85H112" stroke="#294C3A" strokeWidth="3.5" strokeLinecap="round"/>
    
    {/* Cute Face on Pot */}
    <circle cx="70" cy="108" r="3" fill="#294C3A"/>
    <circle cx="90" cy="108" r="3" fill="#294C3A"/>
    <path d="M76 116C78 119 82 119 84 116" stroke="#294C3A" strokeWidth="2.5" strokeLinecap="round"/>
    {/* Blushing cheeks */}
    <circle cx="64" cy="112" r="4" fill="#F5D6C7" opacity="0.9"/>
    <circle cx="96" cy="112" r="4" fill="#F5D6C7" opacity="0.9"/>
  </svg>
);

// Hero: 3 Indonesian Teenagers under Tree
export const HeroTeenagersIllustration: React.FC<{ className?: string }> = ({ className = "w-full h-auto" }) => (
  <svg viewBox="0 0 600 380" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <defs>
      <linearGradient id="treeGrad" x1="420" y1="20" x2="550" y2="280" gradientUnits="userSpaceOnUse">
        <stop stopColor="#3D6C53" />
        <stop offset="1" stopColor="#294C3A" />
      </linearGradient>
      <linearGradient id="groundGrad" x1="100" y1="300" x2="500" y2="380" gradientUnits="userSpaceOnUse">
        <stop stopColor="#DEEDE3" />
        <stop offset="1" stopColor="#FAF8F1" />
      </linearGradient>
    </defs>

    {/* Ground Hill */}
    <path d="M-20 340C120 310 320 330 620 320V400H-20V340Z" fill="url(#groundGrad)"/>
    
    {/* Big Tree on the Right */}
    {/* Trunk */}
    <path d="M480 180C475 240 485 300 520 340C495 340 455 330 445 280C440 240 450 200 455 180H480Z" fill="#8C6239" stroke="#294C3A" strokeWidth="2.5"/>
    {/* Tree Foliage */}
    <path d="M420 80C390 60 360 90 350 120C330 140 330 180 360 200C350 220 370 240 400 240C430 250 480 250 510 220C540 220 570 190 560 150C570 120 550 80 510 70C480 50 440 60 420 80Z" fill="#B9D6C2" stroke="#294C3A" strokeWidth="2.5"/>
    <path d="M450 60C420 40 390 70 380 100C370 130 390 150 420 160C440 170 480 160 510 140C530 120 520 80 480 60C465 50 455 50 450 60Z" fill="#9EC2A8" opacity="0.8"/>
    
    {/* Hanging Leafy Vines & Flowers */}
    <path d="M370 180C365 210 375 225 370 245" stroke="#294C3A" strokeWidth="2" strokeLinecap="round" strokeDasharray="4 4"/>
    <circle cx="370" cy="245" r="4" fill="#F5E8A8" stroke="#294C3A" strokeWidth="1.5"/>
    
    {/* Floating Quote Badge on Tree: "It's okay to grow slowly 🌱" */}
    <g transform="translate(350, 45)">
      <rect x="0" y="0" width="165" height="42" rx="21" fill="#FAF8F1" stroke="#294C3A" strokeWidth="2" filter="drop-shadow(0 4px 10px rgba(0,0,0,0.06))"/>
      <text x="18" y="24" fill="#294C3A" fontSize="11" fontFamily="Plus Jakarta Sans" fontWeight="700">It's okay to grow slowly 🌱</text>
    </g>

    {/* PERSON 1 (LEFT): Boy playing acoustic guitar (Indonesian SMP student, friendly smile) */}
    <g transform="translate(180, 140)">
      {/* Body / Green Hoodie */}
      <path d="M45 130C30 135 15 155 10 180H80C75 155 60 135 45 130Z" fill="#3D6C53" stroke="#294C3A" strokeWidth="2.5"/>
      {/* Pants (Khaki) */}
      <path d="M10 180L-10 200H35L45 180" fill="#8C7355" stroke="#294C3A" strokeWidth="2"/>
      <path d="M45 180L55 200H100L80 180" fill="#8C7355" stroke="#294C3A" strokeWidth="2"/>
      {/* Head & Hair */}
      <circle cx="45" cy="85" r="22" fill="#F8CEAB"/>
      <path d="M22 80C22 60 35 55 45 55C58 55 70 65 68 85C65 72 58 70 45 70C35 70 28 75 22 80Z" fill="#294C3A"/>
      {/* Face features */}
      <circle cx="38" cy="84" r="2.5" fill="#294C3A"/>
      <circle cx="50" cy="84" r="2.5" fill="#294C3A"/>
      <path d="M41 93C44 95 47 95 50 93" stroke="#294C3A" strokeWidth="2" strokeLinecap="round"/>
      <circle cx="34" cy="88" r="3" fill="#F5D6C7"/>
      <circle cx="56" cy="88" r="3" fill="#F5D6C7"/>
      {/* Acoustic Guitar */}
      <g transform="translate(15, 125) rotate(-15)">
        <ellipse cx="25" cy="30" rx="20" ry="24" fill="#D98242" stroke="#294C3A" strokeWidth="2"/>
        <ellipse cx="25" cy="12" rx="14" ry="16" fill="#D98242" stroke="#294C3A" strokeWidth="2"/>
        <circle cx="25" cy="22" r="7" fill="#294C3A"/>
        {/* Guitar Neck */}
        <rect x="22" y="-35" width="6" height="40" fill="#8C6239" stroke="#294C3A" strokeWidth="2"/>
        <line x1="25" y1="-35" x2="25" y2="45" stroke="#FAF8F1" strokeWidth="1.5"/>
      </g>
      {/* Arms strumming */}
      <path d="M20 140C25 155 45 155 55 145" stroke="#F8CEAB" strokeWidth="8" strokeLinecap="round"/>
    </g>

    {/* PERSON 2 (CENTER): Girl with long black hair, white shirt, holding a notebook & smiling */}
    <g transform="translate(295, 145)">
      {/* White & soft yellow outfit */}
      <path d="M45 125C30 130 15 150 12 180H78C75 150 60 130 45 125Z" fill="#FAF8F1" stroke="#294C3A" strokeWidth="2.5"/>
      {/* Skirt / Pants (Forest green) */}
      <path d="M12 180C10 195 25 200 45 200C65 200 80 195 78 180Z" fill="#294C3A"/>
      {/* Head */}
      <circle cx="45" cy="80" r="20" fill="#F8CEAB"/>
      {/* Long Black Hair */}
      <path d="M22 80C20 60 30 52 45 52C60 52 70 60 68 80C75 105 72 135 68 150C60 145 60 120 58 100C45 92 35 95 32 100C30 120 30 145 22 150C18 135 15 105 22 80Z" fill="#1F3A2C"/>
      {/* Face features */}
      <circle cx="40" cy="80" r="2.5" fill="#294C3A"/>
      <circle cx="50" cy="80" r="2.5" fill="#294C3A"/>
      <path d="M42 88C45 90 48 90 51 88" stroke="#294C3A" strokeWidth="2" strokeLinecap="round"/>
      <circle cx="35" cy="84" r="3" fill="#F5D6C7"/>
      <circle cx="55" cy="84" r="3" fill="#F5D6C7"/>
      {/* Book on lap */}
      <rect x="25" y="150" width="40" height="25" rx="3" fill="#F5E8A8" stroke="#294C3A" strokeWidth="2"/>
      <line x1="45" y1="150" x2="45" y2="175" stroke="#294C3A" strokeWidth="2"/>
    </g>

    {/* PERSON 3 (RIGHT): Girl leaning against tree, listening happily */}
    <g transform="translate(380, 145)">
      {/* Soft Peach Top */}
      <path d="M35 130C25 135 15 155 12 180H68C65 155 55 135 45 130Z" fill="#F5D6C7" stroke="#294C3A" strokeWidth="2.5"/>
      {/* Denim Jeans */}
      <path d="M12 180L0 200H35L40 180" fill="#BAD7F5" stroke="#294C3A" strokeWidth="2"/>
      <path d="M40 180L45 200H80L68 180" fill="#BAD7F5" stroke="#294C3A" strokeWidth="2"/>
      {/* Head */}
      <circle cx="40" cy="82" r="21" fill="#F8CEAB"/>
      {/* Hair (Ponytail style) */}
      <path d="M18 80C18 60 30 54 40 54C55 54 62 64 62 82C60 72 52 70 40 70C28 70 24 74 18 80Z" fill="#294C3A"/>
      <path d="M60 75C75 75 80 85 82 95C75 95 68 85 60 82" fill="#294C3A"/>
      {/* Face features */}
      <circle cx="34" cy="82" r="2.5" fill="#294C3A"/>
      <circle cx="46" cy="82" r="2.5" fill="#294C3A"/>
      <path d="M37 90C40 92 43 92 46 90" stroke="#294C3A" strokeWidth="2" strokeLinecap="round"/>
      <circle cx="30" cy="85" r="3" fill="#F5D6C7"/>
      <circle cx="50" cy="85" r="3" fill="#F5D6C7"/>
    </g>

    {/* Grass patches and cute flowers */}
    <g transform="translate(80, 310)">
      <path d="M0 20C5 5 15 5 20 20" stroke="#3D6C53" strokeWidth="3" strokeLinecap="round"/>
      <circle cx="10" cy="5" r="4" fill="#FAF8F1" stroke="#294C3A" strokeWidth="2"/>
    </g>
    <g transform="translate(250, 325)">
      <path d="M0 15C5 2 12 2 15 15" stroke="#3D6C53" strokeWidth="2.5" strokeLinecap="round"/>
      <circle cx="8" cy="3" r="3" fill="#F5D6C7" stroke="#294C3A" strokeWidth="1.5"/>
    </g>
    <g transform="translate(480, 320)">
      <path d="M0 18C4 3 14 3 18 18" stroke="#3D6C53" strokeWidth="2.5" strokeLinecap="round"/>
      <circle cx="9" cy="4" r="3.5" fill="#F5E8A8" stroke="#294C3A" strokeWidth="1.5"/>
    </g>
  </svg>
);

// 1. Kenali Dirimu Illustration (Mirror with confident reflection)
export const MirrorIllustration: React.FC<{ className?: string }> = ({ className = "w-16 h-16" }) => (
  <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    {/* Oval Mirror */}
    <ellipse cx="50" cy="45" rx="30" ry="38" fill="#FFFFFF" stroke="#294C3A" strokeWidth="3"/>
    <ellipse cx="50" cy="45" rx="25" ry="32" fill="#DEEDE3" opacity="0.6"/>
    {/* Mirror Stand */}
    <path d="M42 83L38 94H62L58 83" fill="#8C7355" stroke="#294C3A" strokeWidth="2.5"/>
    {/* Reflection of person smiling inside mirror */}
    <circle cx="50" cy="40" r="12" fill="#F8CEAB"/>
    <path d="M40 37C40 26 46 22 50 22C56 22 62 26 62 37C58 32 54 30 50 30C46 30 42 32 40 37Z" fill="#294C3A"/>
    <circle cx="46" cy="40" r="1.5" fill="#294C3A"/>
    <circle cx="54" cy="40" r="1.5" fill="#294C3A"/>
    <path d="M48 45C49 46 51 46 52 45" stroke="#294C3A" strokeWidth="1.5" strokeLinecap="round"/>
    {/* Sparkles */}
    <path d="M22 25L25 20L28 25L33 28L28 31L25 36L22 31L17 28L22 25Z" fill="#F5E8A8" stroke="#294C3A" strokeWidth="1"/>
  </svg>
);

// 2. Kenali Emosimu Illustration (Cute blushing smiling heart character)
export const HappyHeartIllustration: React.FC<{ className?: string }> = ({ className = "w-16 h-16" }) => (
  <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    {/* Soft Pink Heart */}
    <path d="M50 82C50 82 18 62 18 38C18 24 29 16 41 18C46 19 49 22 50 25C51 22 54 19 59 18C71 16 82 24 82 38C82 62 50 82 50 82Z" fill="#F5D6C7" stroke="#294C3A" strokeWidth="3" strokeLinejoin="round"/>
    {/* Eyes */}
    <ellipse cx="40" cy="42" rx="3" ry="4" fill="#294C3A"/>
    <ellipse cx="60" cy="42" rx="3" ry="4" fill="#294C3A"/>
    {/* Big Happy Smile */}
    <path d="M44 50C46 55 54 55 56 50" stroke="#294C3A" strokeWidth="2.5" strokeLinecap="round"/>
    {/* Cheeks */}
    <circle cx="34" cy="48" r="4.5" fill="#FFAAA6"/>
    <circle cx="66" cy="48" r="4.5" fill="#FFAAA6"/>
    {/* Little hands waving */}
    <path d="M18 45C10 42 12 35 15 32" stroke="#294C3A" strokeWidth="2.5" strokeLinecap="round"/>
    <path d="M82 45C90 42 88 35 85 32" stroke="#294C3A" strokeWidth="2.5" strokeLinecap="round"/>
  </svg>
);

// 3. Pertemanan Illustration (Two teens talking & high-fiving)
export const FriendshipIllustration: React.FC<{ className?: string }> = ({ className = "w-16 h-16" }) => (
  <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    {/* Teen Left */}
    <circle cx="32" cy="38" r="13" fill="#F8CEAB"/>
    <path d="M19 35C19 22 26 18 32 18C38 18 45 22 45 35C41 30 37 28 32 28C27 28 23 30 19 35Z" fill="#294C3A"/>
    <path d="M18 78C18 60 25 54 34 54C43 54 48 60 48 78" fill="#DCEBFA" stroke="#294C3A" strokeWidth="2.5"/>
    <circle cx="35" cy="37" r="2" fill="#294C3A"/>
    
    {/* Teen Right */}
    <circle cx="68" cy="38" r="13" fill="#F8CEAB"/>
    <path d="M55 35C55 22 62 18 68 18C74 18 81 22 81 35C77 30 73 28 68 28C63 28 59 30 55 35Z" fill="#8C6239"/>
    <path d="M52 78C52 60 59 54 68 54C77 54 82 60 82 78" fill="#F5E8A8" stroke="#294C3A" strokeWidth="2.5"/>
    <circle cx="65" cy="37" r="2" fill="#294C3A"/>

    {/* High-five hands */}
    <path d="M42 56L50 48L58 56" stroke="#294C3A" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
    {/* Heart above */}
    <path d="M50 24C50 24 45 18 41 18C37 18 35 21 35 24C35 29 50 36 50 36C50 36 65 29 65 24C65 21 63 18 59 18C55 18 50 24 50 24Z" fill="#F5D6C7" stroke="#294C3A" strokeWidth="1.5"/>
  </svg>
);

// 4. Belajar & Masa Depan (Desk, Open Book, Lamp, Plant)
export const StudyDeskIllustration: React.FC<{ className?: string }> = ({ className = "w-16 h-16" }) => (
  <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    {/* Open Book */}
    <path d="M50 65C40 60 25 62 18 68V42C25 36 40 34 50 39C60 34 75 36 82 42V68C75 62 60 60 50 65Z" fill="#FAF8F1" stroke="#294C3A" strokeWidth="2.5" strokeLinejoin="round"/>
    <line x1="50" y1="39" x2="50" y2="65" stroke="#294C3A" strokeWidth="2.5"/>
    <line x1="26" y1="46" x2="42" y2="44" stroke="#B9D6C2" strokeWidth="2" strokeLinecap="round"/>
    <line x1="26" y1="52" x2="42" y2="50" stroke="#B9D6C2" strokeWidth="2" strokeLinecap="round"/>
    <line x1="58" y1="44" x2="74" y2="46" stroke="#B9D6C2" strokeWidth="2" strokeLinecap="round"/>
    <line x1="58" y1="50" x2="74" y2="52" stroke="#B9D6C2" strokeWidth="2" strokeLinecap="round"/>
    {/* Sprout emerging from book */}
    <path d="M50 39C50 26 44 20 38 22C38 30 46 34 50 39Z" fill="#B9D6C2" stroke="#294C3A" strokeWidth="2"/>
    <path d="M50 35C50 24 56 18 62 20C62 28 54 31 50 35Z" fill="#9EC2A8" stroke="#294C3A" strokeWidth="2"/>
  </svg>
);

// 5. Keluarga & Komunikasi (Cozy Home with Warm Heart)
export const FamilyHomeIllustration: React.FC<{ className?: string }> = ({ className = "w-16 h-16" }) => (
  <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    {/* Roof */}
    <path d="M50 20L18 45H82L50 20Z" fill="#D98242" stroke="#294C3A" strokeWidth="3" strokeLinejoin="round"/>
    {/* House Body */}
    <rect x="25" y="45" width="50" height="38" rx="4" fill="#FAF8F1" stroke="#294C3A" strokeWidth="3"/>
    {/* Door */}
    <rect x="42" y="58" width="16" height="25" rx="3" fill="#B9D6C2" stroke="#294C3A" strokeWidth="2"/>
    <circle cx="53" cy="71" r="1.5" fill="#294C3A"/>
    {/* Warm Heart in window */}
    <circle cx="50" cy="38" r="6" fill="#F5E8A8" stroke="#294C3A" strokeWidth="2"/>
    {/* Chimney smoke */}
    <path d="M68 28V18H74V33" fill="#8C6239" stroke="#294C3A" strokeWidth="2"/>
  </svg>
);

// 6. Dunia Digital (Teenager with smartphone and safe shield)
export const DigitalSmartphoneIllustration: React.FC<{ className?: string }> = ({ className = "w-16 h-16" }) => (
  <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    {/* Phone Frame */}
    <rect x="32" y="16" width="36" height="66" rx="8" fill="#DDD7F5" stroke="#294C3A" strokeWidth="3"/>
    {/* Screen */}
    <rect x="36" y="24" width="28" height="48" rx="4" fill="#FAF8F1" stroke="#294C3A" strokeWidth="2"/>
    {/* Chat bubbles */}
    <rect x="40" y="30" width="16" height="8" rx="4" fill="#B9D6C2"/>
    <rect x="44" y="42" width="16" height="8" rx="4" fill="#DCEBFA"/>
    {/* Safe check icon */}
    <circle cx="50" cy="60" r="6" fill="#F5E8A8" stroke="#294C3A" strokeWidth="1.5"/>
    <path d="M48 60L50 62L53 58" stroke="#294C3A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    {/* Home indicator */}
    <rect x="45" y="76" width="10" height="2" rx="1" fill="#294C3A"/>
  </svg>
);

// Counselor & Student illustration (for Ruang Bantuan)
export const CounselorSupportIllustration: React.FC<{ className?: string }> = ({ className = "w-full max-w-sm h-auto" }) => (
  <svg viewBox="0 0 320 220" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    {/* Warm background glow */}
    <circle cx="160" cy="110" r="95" fill="#EDF5EF"/>
    
    {/* Counselor (Right) - Kind adult with glasses and warm smile */}
    <g transform="translate(170, 45)">
      {/* Body */}
      <path d="M40 95C25 100 10 115 8 140H72C70 115 55 100 40 95Z" fill="#3D6C53" stroke="#294C3A" strokeWidth="2.5"/>
      {/* Head */}
      <circle cx="40" cy="55" r="22" fill="#F8CEAB"/>
      {/* Hair bun */}
      <path d="M18 55C18 35 30 25 40 25C52 25 62 35 62 55C58 48 50 45 40 45C30 45 22 48 18 55Z" fill="#294C3A"/>
      <circle cx="40" cy="22" r="8" fill="#294C3A"/>
      {/* Glasses */}
      <rect x="28" y="50" width="10" height="8" rx="2" fill="none" stroke="#294C3A" strokeWidth="2"/>
      <rect x="42" y="50" width="10" height="8" rx="2" fill="none" stroke="#294C3A" strokeWidth="2"/>
      <line x1="38" y1="54" x2="42" y2="54" stroke="#294C3A" strokeWidth="2"/>
      {/* Warm Smile */}
      <path d="M35 68C38 71 42 71 45 68" stroke="#294C3A" strokeWidth="2" strokeLinecap="round"/>
      <circle cx="28" cy="63" r="3" fill="#F5D6C7"/>
      <circle cx="52" cy="63" r="3" fill="#F5D6C7"/>
      {/* Warm Hand outstretched */}
      <path d="M15 110C5 115 -10 115 -15 110" stroke="#F8CEAB" strokeWidth="6" strokeLinecap="round"/>
    </g>

    {/* Student (Left) - Listening and feeling comforted */}
    <g transform="translate(60, 55)">
      {/* Body */}
      <path d="M40 90C25 95 15 110 12 130H68C65 110 55 95 40 90Z" fill="#FAF8F1" stroke="#294C3A" strokeWidth="2.5"/>
      {/* Head */}
      <circle cx="40" cy="52" r="20" fill="#F8CEAB"/>
      {/* Hair */}
      <path d="M20 52C20 35 30 28 40 28C52 28 60 35 60 52C55 45 48 42 40 42C32 42 25 45 20 52Z" fill="#8C6239"/>
      {/* Eyes & Relieved Smile */}
      <circle cx="34" cy="52" r="2" fill="#294C3A"/>
      <circle cx="46" cy="52" r="2" fill="#294C3A"/>
      <path d="M36 62C38 64 42 64 44 62" stroke="#294C3A" strokeWidth="2" strokeLinecap="round"/>
      <circle cx="28" cy="56" r="3" fill="#F5D6C7"/>
      <circle cx="52" cy="56" r="3" fill="#F5D6C7"/>
      {/* Cup of Warm Tea on Table */}
      <g transform="translate(70, 95)">
        <rect x="0" y="8" width="16" height="14" rx="3" fill="#FAF8F1" stroke="#294C3A" strokeWidth="2"/>
        <path d="M16 12C19 12 19 18 16 18" stroke="#294C3A" strokeWidth="2"/>
        <path d="M4 4C6 2 10 2 12 4" stroke="#B9D6C2" strokeWidth="1.5" strokeLinecap="round"/>
      </g>
    </g>
  </svg>
);

// Teen Thinking Boy Illustration (for Aktivitas: Situasi & Pilihan)
export const ThinkingTeenIllustration: React.FC<{ className?: string }> = ({ className = "w-48 h-48" }) => (
  <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    {/* Soft background shape */}
    <ellipse cx="100" cy="110" rx="80" ry="70" fill="#FAF4D2"/>
    
    {/* Boy Body */}
    <path d="M100 135C75 140 55 165 50 195H150C145 165 125 140 100 135Z" fill="#3D6C53" stroke="#294C3A" strokeWidth="3"/>
    
    {/* Head */}
    <circle cx="100" cy="85" r="32" fill="#F8CEAB"/>
    {/* Hair */}
    <path d="M68 85C68 55 85 45 100 45C118 45 132 55 132 85C125 72 115 68 100 68C85 68 75 72 68 85Z" fill="#294C3A"/>
    
    {/* Thoughtful Eyes */}
    <circle cx="90" cy="82" r="3" fill="#294C3A"/>
    <circle cx="110" cy="82" r="3" fill="#294C3A"/>
    <path d="M85 75C88 73 93 74 95 76" stroke="#294C3A" strokeWidth="2" strokeLinecap="round"/>
    <path d="M105 76C107 74 112 73 115 75" stroke="#294C3A" strokeWidth="2" strokeLinecap="round"/>
    {/* Gentle Smile */}
    <path d="M94 98C97 101 103 101 106 98" stroke="#294C3A" strokeWidth="2.5" strokeLinecap="round"/>
    
    {/* Hand on Chin (Thinking Pose) */}
    <path d="M120 150C125 135 125 110 115 105" stroke="#F8CEAB" strokeWidth="10" strokeLinecap="round"/>
    <circle cx="112" cy="104" r="7" fill="#F8CEAB"/>

    {/* Thought bubbles floating */}
    <circle cx="145" cy="55" r="6" fill="#FAF8F1" stroke="#294C3A" strokeWidth="2"/>
    <circle cx="158" cy="40" r="10" fill="#FAF8F1" stroke="#294C3A" strokeWidth="2"/>
    <path d="M158 35L160 38L164 38L161 40L162 44L158 41L154 44L155 40L152 38L156 38L158 35Z" fill="#F5E8A8"/>
  </svg>
);
