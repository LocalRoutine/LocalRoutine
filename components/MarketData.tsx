import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, ReferenceLine, LabelList } from 'recharts';
import { TrendingUp, AlertCircle } from 'lucide-react';

const barData = [
  { name: '2023', value: 20, label: '20조' },
  { name: '2024', value: 25, label: '25조' },
  { name: '2025', value: 34, label: '34조' },
];

const pieData = [
  { name: '이용 경험 있음', value: 66.4 },
  { name: '이용 경험 없음', value: 33.6 },
];

const COLORS = ['#42A5F5', '#EEEEEE'];

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white p-3 border-2 border-black shadow-cartoon rounded-lg">
        <p className="font-bold text-lg mb-1">{label}</p>
        <p className="text-lr-blue font-bold text-xl">
          {payload[0].value}조원
        </p>
        <p className="text-xs text-gray-500">지속 성장 중 🚀</p>
      </div>
    );
  }
  return null;
};

const MarketData: React.FC = () => {
  return (
    <section id="market" className="py-24 bg-white border-b-2 border-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-lg font-bold text-lr-green mb-2 tracking-widest">MARKET OPPORTUNITY</h2>
          <h3 className="text-4xl font-display text-black leading-tight mb-6">
            시장은 커지고 있지만,<br />
            <span className="relative inline-block px-2">
              <span className="relative z-10 text-red-500">실천의 격차</span>
              <span className="absolute bottom-1 left-0 w-full h-3 bg-red-100 -z-0"></span>
            </span>는 여전히 존재합니다.
          </h3>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Left: Market Growth Chart */}
          <div className="flex flex-col">
            <div className="bg-gray-50 p-8 rounded-t-3xl border-x-2 border-t-2 border-black shadow-sm flex-1">
                <div className="flex items-center justify-between mb-6">
                    <div>
                        <h4 className="text-2xl font-display flex items-center gap-2">
                            국내 친환경 시장 규모
                            <TrendingUp className="w-6 h-6 text-red-500 animate-bounce" />
                        </h4>
                        <p className="text-gray-600 font-medium mt-1">매년 가파른 상승세 기록</p>
                    </div>
                    <div className="bg-red-100 text-red-600 px-3 py-1 rounded-full text-sm font-bold border border-red-200">
                        CAGR High ↗
                    </div>
                </div>
                
                <div className="h-80 w-full bg-white rounded-2xl border-2 border-gray-200 p-4 shadow-inner relative overflow-hidden">
                   {/* Trend Line Decoration */}
                   <svg className="absolute top-0 left-0 w-full h-full pointer-events-none z-0 opacity-30">
                       <path d="M 80 220 Q 200 200 300 100" fill="none" stroke="#EF4444" strokeWidth="20" strokeLinecap="round" opacity="0.1" />
                   </svg>

                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={barData} margin={{ top: 30, right: 30, left: 20, bottom: 10 }}>
                      <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E5E7EB" />
                      <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fontSize: 16, fontWeight: 'bold', fill: '#374151'}} />
                      <Tooltip content={<CustomTooltip />} cursor={{fill: 'rgba(66, 165, 245, 0.1)'}} />
                      <Bar dataKey="value" radius={[12, 12, 0, 0]} barSize={60}>
                        {barData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={index === 2 ? '#1565C0' : '#90CAF9'} stroke="black" strokeWidth={2} />
                        ))}
                        <LabelList dataKey="label" position="top" fill="#1F2937" fontSize={18} fontWeight="bold" offset={10} />
                      </Bar>
                    </BarChart>
                  </ResponsiveContainer>
                </div>
            </div>
            <div className="bg-lr-blue text-white p-5 rounded-b-3xl border-2 border-black border-t-0 shadow-cartoon">
                <p className="text-center font-bold text-lg">"2025년 34조원 규모로 성장 전망"</p>
            </div>
          </div>

          {/* Right: Participation Gap -> System Usage Analysis */}
          <div className="flex flex-col">
            <div className="bg-gray-50 p-8 rounded-t-3xl border-x-2 border-t-2 border-black shadow-sm flex-1">
                 <div className="flex items-center justify-between mb-6">
                    <div>
                        <h4 className="text-2xl font-display">친환경 제도 이용 경험률</h4>
                        <p className="text-gray-600 font-medium mt-1">주요 5대 친환경 제도 통합 분석</p>
                    </div>
                    <div className="bg-white text-gray-700 px-3 py-1 rounded-full text-xs font-bold border border-gray-300 shadow-sm">
                        Source: 한국소비자원
                    </div>
                 </div>

                <div className="flex flex-col md:flex-row items-center gap-6 h-full">
                    {/* Chart */}
                    <div className="relative w-full md:w-1/2 h-80 bg-white rounded-2xl border-2 border-gray-200 p-2 shadow-inner">
                        <ResponsiveContainer width="100%" height="100%">
                            <PieChart>
                            <Pie
                                data={pieData}
                                cx="50%"
                                cy="50%"
                                innerRadius={70}
                                outerRadius={110}
                                paddingAngle={5}
                                dataKey="value"
                                startAngle={90}
                                endAngle={-270}
                            >
                                {pieData.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={index === 0 ? '#42A5F5' : '#E0E0E0'} stroke="black" strokeWidth={2} />
                                ))}
                            </Pie>
                            <Tooltip 
                                contentStyle={{ borderRadius: '8px', border: '2px solid black', fontWeight: 'bold', fontSize: '16px' }}
                                formatter={(value: number) => [`${value}%`, '비율']}
                            />
                            </PieChart>
                        </ResponsiveContainer>
                        <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
                            <span className="text-4xl md:text-5xl font-display text-lr-blue drop-shadow-sm">66.4%</span>
                            <span className="text-lg text-gray-500 font-bold mt-2">경험 보유</span>
                        </div>
                    </div>

                    {/* Detail Info */}
                    <div className="w-full md:w-1/2 space-y-6">
                        <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                            <h5 className="text-sm font-bold text-gray-400 mb-3 uppercase tracking-wider">분석 대상 (주요 제도)</h5>
                            <ul className="text-base font-bold text-gray-700 space-y-2">
                                <li className="flex items-center gap-3">
                                    <div className="w-3 h-3 rounded-full bg-lr-green shadow-sm"></div>
                                    탄소중립실천포인트
                                </li>
                                <li className="flex items-center gap-3">
                                    <div className="w-3 h-3 rounded-full bg-lr-green shadow-sm"></div>
                                    그린카드 / 녹색매장
                                </li>
                                <li className="flex items-center gap-3">
                                    <div className="w-3 h-3 rounded-full bg-lr-green shadow-sm"></div>
                                    에너지캐시백 등
                                </li>
                            </ul>
                        </div>
                        
                        <div className="bg-red-50 p-5 rounded-xl border border-red-100 shadow-sm">
                             <div className="flex items-start gap-3">
                                <AlertCircle className="w-6 h-6 text-red-500 mt-1 shrink-0" />
                                <div>
                                    <h5 className="text-sm font-bold text-red-500 mb-1">INSIGHT</h5>
                                    <p className="text-base font-bold text-gray-800 leading-snug">
                                        "높은 경험률 대비 <br/>
                                        <span className="text-red-600 text-lg underline decoration-red-300 decoration-4 underline-offset-4">지속적 참여 저조</span>"
                                    </p>
                                    <p className="text-sm text-gray-600 mt-2 font-medium">원인: 접근성 부족 및 보상 미비</p>
                                </div>
                             </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="bg-white p-5 rounded-b-3xl border-2 border-black border-t-0 shadow-cartoon">
                 <div className="text-center">
                    <p className="text-gray-600 font-medium text-base">
                        복잡한 절차 없이, <span className="text-lr-blue font-bold text-lg">Local Routine</span> 하나로 해결하세요.
                    </p>
                 </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default MarketData;