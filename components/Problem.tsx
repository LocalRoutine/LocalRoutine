import React from 'react';
import { PROBLEMS } from '../constants';

const Problem: React.FC = () => {
  return (
    <section className="py-20 bg-white relative border-b-2 border-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-lg font-bold text-lr-green mb-2 tracking-widest">PROBLEM</h2>
          <h3 className="text-4xl font-display text-black">
            환경을 위해 실천하고 싶지만<br />
            <span className="text-gray-500">어떻게 해야 할지 모르겠나요?</span>
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {PROBLEMS.map((problem) => (
            <div key={problem.id} className="group relative bg-gray-50 p-8 rounded-2xl border-2 border-black hover:shadow-cartoon transition-all duration-300">
              <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-white p-4 rounded-full border-2 border-black group-hover:scale-110 transition-transform">
                <problem.icon className="w-8 h-8 text-lr-blue" />
              </div>
              <h4 className="mt-8 text-2xl font-display text-center mb-4">{problem.title}</h4>
              <p className="text-gray-600 text-center leading-relaxed break-keep">
                {problem.description}
              </p>
            </div>
          ))}
        </div>
        
        {/* Bridge Text */}
        <div className="mt-16 text-center">
           <div className="inline-block bg-lr-green text-white px-8 py-3 rounded-full text-xl font-bold border-2 border-black shadow-cartoon">
             그래서 Local Routine이 탄생했습니다!
           </div>
        </div>
      </div>
    </section>
  );
};

export default Problem;