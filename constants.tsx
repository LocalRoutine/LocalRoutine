import { Leaf, HelpCircle, Wallet, User, BookOpen, TrendingUp, Globe, Award, MessageCircle, Zap } from 'lucide-react';
import { FeatureItem, ProblemItem, RoadmapItem } from './types';

export const FEATURES: FeatureItem[] = [
  {
    id: 'quiz',
    title: '환경 퀴즈 + 오늘의 코칭',
    description: ['사용자에게 환경 정보 제공', '실천 유도', '퀴즈로 흥미 유도 및 학습'],
    icon: HelpCircle,
    color: 'bg-blue-100'
  },
  {
    id: 'points',
    title: '포인트 시스템',
    description: ['행동 유도 및 보상 제공', '실천 행동에 대한 즉각적인 보상'],
    icon: Award,
    color: 'bg-yellow-100'
  },
  {
    id: 'mbti',
    title: '환경 MBTI',
    description: ['사용자의 친환경 성향 진단 -> 개인화', '유형별 "이런 실천이 잘 맞아요" 추천'],
    icon: User,
    color: 'bg-pink-100'
  },
  {
    id: 'diary',
    title: '지구에게 쓰는 일기',
    description: ['감성 콘텐츠로 지속성 향상', '"오늘 내가 지구를 위해 한 일" 기록'],
    icon: BookOpen,
    color: 'bg-green-100'
  }
];

export const PROBLEMS: ProblemItem[] = [
  {
    id: 'p1',
    title: '실천 부족 / 무력감',
    description: '기후 변화 문제는 널리 알려졌지만 어디서부터 어떻게 실천할지 모르는 사람들이 많습니다.',
    icon: Zap
  },
  {
    id: 'p2',
    title: '정보의 파편화',
    description: '친환경 관련 정보는 인터넷에 흩어져 있고, 신뢰성과 실천 가능성이 부족합니다.',
    icon: Globe
  },
  {
    id: 'p3',
    title: '행동 지속의 어려움',
    description: '초기엔 의욕이 있어도 금방 포기하거나 잊어버리게 됩니다.',
    icon: TrendingUp
  }
];

export const ROADMAP: RoadmapItem[] = [
  {
    date: '2025.07',
    title: '아이디어 검증 및 구체화',
    description: '타겟 유저 니즈 분석, 핵심 솔루션 도출 및 MVP 기획 완료',
    status: 'done'
  },
  {
    date: '2025.11',
    title: 'MVP 개발 및 베타 테스트',
    description: '핵심 기능 구현, FGT(그룹 테스트)를 통한 사용성 검증 및 고도화',
    status: 'active'
  },
  {
    date: '2026.01',
    title: '정식 앱 출시 (Android/iOS)',
    description: '스토어 등록 완료, 대중 대상 런칭 캠페인 및 서비스 오픈',
    status: 'future'
  },
  {
    date: '2026.06',
    title: '누적 이용자 3,000명 달성',
    description: '커뮤니티 기능 확장, 친환경 브랜드 제휴 및 수익 모델 안착',
    status: 'future'
  }
];