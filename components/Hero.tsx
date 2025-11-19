import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="about" className="relative bg-lr-cream pt-20 pb-16 lg:pt-32 lg:pb-24 overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-20 left-10 text-lr-green opacity-20 animate-bounce delay-100">
        <svg width="60" height="60" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" /></svg>
      </div>
      <div className="absolute bottom-20 right-10 text-lr-blue opacity-20 animate-bounce delay-700">
        <svg width="80" height="80" viewBox="0 0 24 24" fill="currentColor"><circle cx="12" cy="12" r="10" /></svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          <div className="inline-block bg-white px-4 py-1 rounded-full border-2 border-black shadow-cartoon-sm mb-6 transform -rotate-2">
            <span className="font-bold text-lr-green-dark">🌱 나만의 친환경 습관</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-display text-black mb-6 leading-tight">
            지구를 위한<br/>
            <span className="relative inline-block mt-2">
              <span className="relative z-10">매일의 루틴</span>
              <span className="absolute bottom-2 left-0 w-full h-4 bg-lr-yellow -z-0 opacity-70"></span>
            </span>
          </h1>
          
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-600 font-medium">
            어떻게, 얼마나, 꾸준히 해야 할지 막막하신가요? <br className="hidden md:block" />
            Local Routine과 함께 즐겁고 쉬운 친환경 라이프를 시작해보세요.
          </p>
          
          <div className="mt-10 flex justify-center gap-4">
            <button className="group bg-lr-blue hover:bg-lr-blue-dark text-white text-lg px-8 py-4 rounded-xl font-bold border-2 border-black shadow-cartoon transition-all transform active:translate-x-1 active:translate-y-1 active:shadow-none flex items-center gap-2">
              지금 시작하기
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="bg-white hover:bg-gray-50 text-black text-lg px-8 py-4 rounded-xl font-bold border-2 border-black shadow-cartoon transition-all transform active:translate-x-1 active:translate-y-1 active:shadow-none">
              더 알아보기
            </button>
          </div>

          {/* Cute Character Illustrations */}
          <div className="mt-20 flex justify-center items-end -space-x-4 md:space-x-12">
            
            {/* Cute Leaf Character */}
            <div className="relative z-10 animate-bounce cursor-pointer group" style={{ animationDuration: '3s' }}>
                <svg width="180" height="180" viewBox="0 0 200 200" className="drop-shadow-xl hover:scale-110 transition-transform duration-300">
                     {/* Body */}
                     <path d="M50 100 Q 50 50 100 50 T 150 100 Q 150 160 100 160 Q 50 160 50 100" fill="#AED581" stroke="black" strokeWidth="4" />
                     
                     {/* Sprout */}
                     <path d="M100 50 Q 90 20 70 30" fill="none" stroke="black" strokeWidth="4" strokeLinecap="round" />
                     <path d="M70 30 Q 60 20 80 20 Q 90 30 70 30" fill="#8BC34A" stroke="black" strokeWidth="4" />
                     <path d="M100 50 Q 110 20 130 30" fill="none" stroke="black" strokeWidth="4" strokeLinecap="round" />
                     <path d="M130 30 Q 140 20 120 20 Q 110 30 130 30" fill="#8BC34A" stroke="black" strokeWidth="4" />

                     {/* Face */}
                     <circle cx="80" cy="100" r="8" fill="black" />
                     <circle cx="120" cy="100" r="8" fill="black" />
                     <circle cx="78" cy="98" r="3" fill="white" />
                     <circle cx="118" cy="98" r="3" fill="white" />
                     
                     <path d="M95 110 Q 100 115 105 110" fill="none" stroke="black" strokeWidth="3" strokeLinecap="round" />

                     {/* Blush */}
                     <circle cx="70" cy="110" r="8" fill="#FF8A80" opacity="0.6" />
                     <circle cx="130" cy="110" r="8" fill="#FF8A80" opacity="0.6" />

                     {/* Hands */}
                     <path d="M55 110 Q 30 100 40 80" fill="none" stroke="black" strokeWidth="4" strokeLinecap="round" />
                     <path d="M145 110 Q 170 120 160 90" fill="none" stroke="black" strokeWidth="4" strokeLinecap="round" />
                </svg>
            </div>

            {/* Cute Earth Character */}
            <div className="relative z-20 animate-bounce cursor-pointer group" style={{ animationDuration: '4s', animationDelay: '0.2s' }}>
                <svg width="200" height="200" viewBox="0 0 200 200" className="drop-shadow-xl hover:scale-110 transition-transform duration-300">
                     {/* Body */}
                     <circle cx="100" cy="100" r="70" fill="#4FC3F7" stroke="black" strokeWidth="4" />
                     
                     {/* Continents */}
                     <path d="M60 80 Q 80 60 100 80 T 80 120" fill="#81C784" opacity="0.8" />
                     <path d="M120 60 Q 150 70 130 100" fill="#81C784" opacity="0.8" />
                     <path d="M100 140 Q 120 150 140 130" fill="#81C784" opacity="0.8" />

                     {/* Face */}
                     <circle cx="85" cy="95" r="8" fill="black" />
                     <circle cx="115" cy="95" r="8" fill="black" />
                     <circle cx="82" cy="92" r="3" fill="white" />
                     <circle cx="112" cy="92" r="3" fill="white" />

                     {/* Mouth - Open Smile */}
                     <path d="M90 110 Q 100 125 110 110 Z" fill="#FF8A80" stroke="black" strokeWidth="2" />

                     {/* Arms with Megaphone */}
                     <path d="M165 90 L 180 80" stroke="black" strokeWidth="4" strokeLinecap="round" />
                     <path d="M180 70 L 200 60 L 200 100 L 180 90 Z" fill="#FFF176" stroke="black" strokeWidth="3" strokeLinejoin="round" />
                </svg>
                {/* Speech Bubble */}
                <div className="absolute -top-10 -right-10 animate-pulse">
                    <div className="bg-white px-4 py-2 rounded-2xl border-2 border-black shadow-cartoon text-sm font-bold text-black transform rotate-12">
                        Good !!!
                    </div>
                </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom Divider */}
      <div className="absolute bottom-0 w-full h-12 bg-repeat-x opacity-50" style={{ 
        backgroundImage: "url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMjAwIDEyMCIgcHJlc2VydmVBc3BlY3RSYXRpbz0ibm9uZSI+PHBhdGggZD0iTTAgMHYxMjBoMTIwMFYweiIgZmlsbD0iI2ZmZiIvPjxwYXRoIGQ9Ik0wIDBoMTIwMHYxMEgwUHoiIGZpbGw9IiMwMDAiLz48L3N2Zz4=')",
        backgroundSize: 'auto 100%'
      }}></div>
    </section>
  );
};

export default Hero;