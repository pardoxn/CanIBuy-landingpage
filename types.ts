import { LucideIcon } from 'lucide-react';

export interface FeatureProps {
  icon: LucideIcon;
  title: string;
  description: string;
  delay?: number;
}

export interface ReviewProps {
  name: string;
  role: string;
  text: string;
  stars: number;
}

export interface NavLink {
  label: string;
  href: string;
}