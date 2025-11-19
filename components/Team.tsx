import React from 'react';
import { BookOpen, Globe, Users, Rocket, Heart, Lightbulb } from 'lucide-react';

const Team: React.FC = () => {
  return (
    <section id="team" className="py-24 bg-lr-cream border-b-2 border-black">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-lg font-bold text-lr-green mb-2 tracking-widest">VISION & EXPERTISE</h2>
          <h3 className="text-4xl font-display text-black mb-6">
            로컬루틴의 비전과 전문성
          </h3>
          <p className="max-w-2xl mx-auto text-xl text-gray-600 leading-relaxed">
            환경에 대한 진정성과 검증된 실행력으로<br className="hidden md:block" /> 
            지속 가능한 지구를 위한 루틴을 만들어갑니다.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Card 1: Sincerity */}
            <div className="group bg-white p-8 rounded-3xl border-4 border-black shadow-cartoon hover:-translate-y-2 hover:shadow-cartoon-lg transition-all duration-300">
                <div className="flex items-start gap-6">
                    <div className="shrink-0 w-16 h-16 bg-green-100 rounded-2xl border-2 border-black flex items-center justify-center group-hover:bg-lr-green group-hover:text-white transition-colors">
                        <Heart className="w-8 h-8" />
                    </div>
                    <div>
                        <h4 className="text-2xl font-display mb-3 group-hover:text-lr-green-dark transition-colors">진짜 환경 관심</h4>
                        <p className="text-gray-600 leading-relaxed font-medium">
                            고등학생 시절부터 3년간 이어진 환경 동아리 활동을 통해 환경 문제에 대한 깊은 이해와 진정성을 키웠습니다. 보여주기식이 아닌 본질적인 문제 해결에 집중합니다.
                        </p>
                    </div>
                </div>
            </div>

            {/* Card 2: Global Insight */}
            <div className="group bg-white p-8 rounded-3xl border-4 border-black shadow-cartoon hover:-translate-y-2 hover:shadow-cartoon-lg transition-all duration-300">
                 <div className="flex items-start gap-6">
                    <div className="shrink-0 w-16 h-16 bg-blue-100 rounded-2xl border-2 border-black flex items-center justify-center group-hover:bg-lr-blue group-hover:text-white transition-colors">
                        <Globe className="w-8 h-8" />
                    </div>
                    <div>
                        <h4 className="text-2xl font-display mb-3 group-hover:text-lr-blue-dark transition-colors">글로벌 인사이트</h4>
                        <p className="text-gray-600 leading-relaxed font-medium">
                           해외지역 연구 및 교환학생 프로그램에 참여하며 글로벌 ESG 트렌드를 직접 경험했습니다. 세계적인 흐름을 읽고 로컬에 최적화된 솔루션을 제안합니다.
                        </p>
                    </div>
                </div>
            </div>

            {/* Card 3: Collaboration */}
            <div className="group bg-white p-8 rounded-3xl border-4 border-black shadow-cartoon hover:-translate-y-2 hover:shadow-cartoon-lg transition-all duration-300">
                 <div className="flex items-start gap-6">
                    <div className="shrink-0 w-16 h-16 bg-yellow-100 rounded-2xl border-2 border-black flex items-center justify-center group-hover:bg-lr-yellow group-hover:text-black transition-colors">
                        <Users className="w-8 h-8" />
                    </div>
                    <div>
                        <h4 className="text-2xl font-display mb-3 group-hover:text-yellow-600 transition-colors">검증된 협업 능력</h4>
                        <p className="text-gray-600 leading-relaxed font-medium">
                            ICC Project, 블록체인 누리단, 학생회 등 다양한 조직에서의 리딩 경험을 바탕으로, 기획부터 실행까지 프로젝트 전 과정을 안정적으로 이끌어갑니다.
                        </p>
                    </div>
                </div>
            </div>

            {/* Card 4: Startup Execution */}
             <div className="group bg-white p-8 rounded-3xl border-4 border-black shadow-cartoon hover:-translate-y-2 hover:shadow-cartoon-lg transition-all duration-300">
                 <div className="flex items-start gap-6">
                    <div className="shrink-0 w-16 h-16 bg-red-100 rounded-2xl border-2 border-black flex items-center justify-center group-hover:bg-red-400 group-hover:text-white transition-colors">
                        <Lightbulb className="w-8 h-8" />
                    </div>
                    <div>
                        <h4 className="text-2xl font-display mb-3 group-hover:text-red-500 transition-colors">창업 교육 및 실행력</h4>
                        <p className="text-gray-600 leading-relaxed font-medium">
                            하나소셜벤처 유니버시티 창업 교육 수료 및 교내 창업 동아리 활동을 통해 비즈니스 모델을 구체화했습니다. 가설 설정과 검증을 반복하며 실현 가능한 서비스를 만듭니다.
                        </p>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Team;