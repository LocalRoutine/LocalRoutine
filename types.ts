import { LucideIcon } from 'lucide-react';

export interface FeatureItem {
  id: string;
  title: string;
  description: string[];
  icon: LucideIcon;
  color: string;
}

export interface ProblemItem {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface TeamMember {
  name: string;
  role: string;
  description: string[];
  image: string;
}

export interface RoadmapItem {
  date: string;
  title: string;
  description?: string;
  status: 'done' | 'active' | 'future';
}