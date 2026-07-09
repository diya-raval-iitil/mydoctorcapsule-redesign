import {
  Globe,
  UserPlus,
  Calendar,
  Star,
  BarChart3,
  Shield,
  type LucideIcon,
} from 'lucide-react';

export interface Feature {
  id: string;
  tag: string;
  title: string;
  description: string;
  icon: LucideIcon;
  accentClass: string;
  accentBgClass: string;
  glowClass?: string;
  featured?: boolean;
}

export const FEATURES: Feature[] = [
  {
    id: 'visibility',
    tag: 'SEO + LISTINGS',
    title: 'Digital Visibility',
    description:
      'Rank higher on Google, Practo, and Maps. Your verified profile reaches patients actively searching for specialists in your city.',
    icon: Globe,
    accentClass: 'text-primary',
    accentBgClass: 'bg-primary/10',
  },
  {
    id: 'acquisition',
    tag: 'GROWTH ENGINE',
    title: 'Smart Patient Acquisition',
    description:
      'AI-powered lead capture, instant appointment booking, and WhatsApp follow-ups convert browsers into confirmed patients.',
    icon: UserPlus,
    accentClass: 'text-accent',
    accentBgClass: 'bg-accent/10',
  },
  {
    id: 'scheduling',
    tag: 'OPERATIONS',
    title: 'Appointment Management',
    description:
      'Eliminate no-shows with automated reminders. Manage your calendar across clinics from one unified dashboard.',
    icon: Calendar,
    accentClass: 'text-indigo-500',
    accentBgClass: 'bg-indigo-500/10',
  },
  {
    id: 'reputation',
    tag: 'REPUTATION',
    title: 'Reputation Intelligence',
    description:
      'Monitor and respond to reviews across all platforms. Build social proof that accelerates trust with new patients.',
    icon: Star,
    accentClass: 'text-amber-500',
    accentBgClass: 'bg-amber-500/10',
    glowClass: 'before:absolute before:top-0 before:right-0 before:h-32 before:w-32 before:rounded-full before:bg-amber-300/20 before:blur-2xl',
    featured: true,
  },
  {
    id: 'analytics',
    tag: 'ANALYTICS',
    title: 'Clinical Analytics',
    description:
      'Deep insights into patient demographics, peak hours, revenue trends, and acquisition channels - all in real time.',
    icon: BarChart3,
    accentClass: 'text-emerald-500',
    accentBgClass: 'bg-emerald-500/10',
  },
  {
    id: 'compliance',
    tag: 'SECURITY',
    title: 'DISHA Compliance',
    description:
      "Built on India's digital health standards. Patient data is encrypted, consent-managed, and fully audit-ready.",
    icon: Shield,
    accentClass: 'text-violet-500',
    accentBgClass: 'bg-violet-500/10',
  },
];
