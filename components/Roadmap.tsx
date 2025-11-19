import React from 'react';
import { ROADMAP } from '../constants';
import { CheckCircle2, Circle, Lock } from 'lucide-react';

const Roadmap: React.FC = () => {
  return (
    <section id="roadmap" className="py-20 bg-lr-green border-b-2 border-black overflow-hidden relative">
      {/* Background Road Pattern */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
         <div className="absolute top-1/2 left-0 w-full h-40 border-t-4 border-b-4 border-dashed border-white -translate-y-1/2 transform rotate-3"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-lg font-bold text-white/80 mb-2 tracking-widest">ROADMAP</h2>
          <h3 className="text-4xl font-display text-white drop-shadow-md">우리의 여정</h3>
        </div>

        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-2 bg-white border-x-2 border-black hidden md:block"></div>
          
          <div className="space-y-12">
            {ROADMAP.map((item, index) => (
              <div key={index} className={`flex flex-col md:flex-row items-center justify-between gap-8 ${index % 2 === 0 ? '' : 'md:flex-row-reverse'}`}>
                
                {/* Content Box */}
                <div className="w-full md:w-5/12">
                  <div className={`bg-white p-6 rounded-2xl border-4 border-black shadow-cartoon hover:scale-105 transition-transform duration-300 ${item.status === 'done' ? 'bg-blue-50' : item.status === 'active' ? 'bg-yellow-50 ring-4 ring-yellow-300/50' : ''}`}>
                    <div className="flex items-center justify-between mb-3">
                        <span className={`px-3 py-1 rounded-full text-sm font-bold border-2 border-black ${item.status === 'active' ? 'bg-lr-yellow text-black' : 'bg-black text-white'}`}>
                            {item.date}
                        </span>
                        {item.status === 'done' ? 
                            <CheckCircle2 className="text-green-600 w-6 h-6" /> : 
                         item.status === 'active' ? 
                            <div className="animate-pulse w-4 h-4 bg-lr-green rounded-full ring-4 ring-lr-green/30"></div> : 
                            <Lock className="text-gray-400 w-5 h-5" />
                        }
                    </div>
                    <h4 className="text-xl font-bold text-gray-800 mb-2">{item.title}</h4>
                    {item.description && (
                        <p className="text-gray-600 text-sm leading-relaxed font-medium">
                            {item.description}
                        </p>
                    )}
                  </div>
                </div>

                {/* Center Marker (Desktop) */}
                <div className="hidden md:flex w-2/12 justify-center relative">
                    <div className={`w-8 h-8 rounded-full border-4 border-black z-10 transition-colors duration-500 ${item.status === 'done' || item.status === 'active' ? 'bg-lr-yellow' : 'bg-gray-200'}`}></div>
                </div>

                {/* Spacer for alignment */}
                <div className="w-full md:w-5/12 hidden md:block"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Roadmap;