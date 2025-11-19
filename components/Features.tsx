import React from 'react';
import { FEATURES } from '../constants';

const Features: React.FC = () => {
  return (
    <section id="features" className="py-24 bg-lr-cream border-b-2 border-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
           <h2 className="text-lg font-bold text-lr-blue mb-2 tracking-widest">SOLUTION</h2>
           <h3 className="text-4xl font-display text-black">지속 가능한 습관을 위한 솔루션</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {FEATURES.map((feature, index) => (
            <div 
              key={feature.id} 
              className={`bg-white p-8 rounded-3xl border-4 border-black shadow-cartoon flex flex-col sm:flex-row items-start gap-6 hover:-translate-y-2 transition-transform duration-300`}
            >
              <div className={`shrink-0 p-4 rounded-2xl border-2 border-black ${feature.color}`}>
                <feature.icon className="w-10 h-10 text-black" />
              </div>
              <div>
                <h4 className="text-2xl font-display mb-3 flex items-center gap-2">
                    {feature.title}
                </h4>
                <ul className="space-y-2">
                  {feature.description.map((desc, i) => (
                    <li key={i} className="flex items-start gap-2 text-gray-700 font-medium">
                      <span className="w-1.5 h-1.5 bg-black rounded-full mt-2 shrink-0"></span>
                      {desc}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;