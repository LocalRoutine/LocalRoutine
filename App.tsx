import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Problem from './components/Problem';
import Features from './components/Features';
import MarketData from './components/MarketData';
import Roadmap from './components/Roadmap';
import Team from './components/Team';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <Problem />
        <Features />
        <MarketData />
        <Roadmap />
        <Team />
        <section className="py-24 bg-lr-blue border-b-2 border-black text-center overflow-hidden">
             <div className="max-w-4xl mx-auto px-4 flex flex-col items-center">
                 <h2 className="text-4xl md:text-5xl font-display text-white mb-12 drop-shadow-md">
                     지구를 위한 당신의 루틴을 응원합니다!
                 </h2>
                 
                 {/* Cute Earth Character with Sign */}
                 <div className="relative hover:scale-110 transition-transform duration-300 cursor-pointer">
                    <svg width="260" height="260" viewBox="0 0 260 260" className="drop-shadow-2xl animate-bounce" style={{ animationDuration: '2s' }}>
                         {/* Legs */}
                         <path d="M110 220 L 110 240" stroke="black" strokeWidth="5" strokeLinecap="round" />
                         <path d="M150 220 L 150 240" stroke="black" strokeWidth="5" strokeLinecap="round" />

                         {/* Sign Stick */}
                         <line x1="200" y1="160" x2="200" y2="100" stroke="black" strokeWidth="5" />

                         {/* Body (Earth) */}
                         <circle cx="130" cy="170" r="65" fill="#4FC3F7" stroke="black" strokeWidth="5" />
                         
                         {/* Continents */}
                         <path d="M90 150 Q 110 130 130 150 T 110 190" fill="#81C784" opacity="0.9" />
                         <path d="M150 140 Q 170 150 160 180" fill="#81C784" opacity="0.9" />
                         
                         {/* Face */}
                         <circle cx="110" cy="160" r="7" fill="black" />
                         <circle cx="150" cy="160" r="7" fill="black" />
                         <circle cx="107" cy="157" r="2.5" fill="white" />
                         <circle cx="147" cy="157" r="2.5" fill="white" />
                         
                         {/* Smile */}
                         <path d="M120 175 Q 130 185 140 175" fill="none" stroke="black" strokeWidth="4" strokeLinecap="round" />
                         
                         {/* Blush */}
                         <circle cx="100" cy="175" r="8" fill="#FF8A80" opacity="0.6" />
                         <circle cx="160" cy="175" r="8" fill="#FF8A80" opacity="0.6" />

                         {/* Arms */}
                         <path d="M70 160 Q 50 140 60 120" fill="none" stroke="black" strokeWidth="5" strokeLinecap="round" /> {/* Left arm waving */}
                         <path d="M190 160 Q 210 150 200 110" fill="none" stroke="black" strokeWidth="5" strokeLinecap="round" /> {/* Right arm holding sign */}

                         {/* Sign Board */}
                         <g transform="rotate(10 200 60)">
                            <rect x="130" y="20" width="140" height="90" rx="12" fill="white" stroke="black" strokeWidth="5" />
                            <text x="200" y="75" textAnchor="middle" fontSize="32" fontFamily="Jua, sans-serif" fill="#8BC34A" fontWeight="bold" style={{ filter: 'drop-shadow(2px 2px 0px rgba(0,0,0,0.2))' }}>Good !!!</text>
                         </g>
                    </svg>
                 </div>
             </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;